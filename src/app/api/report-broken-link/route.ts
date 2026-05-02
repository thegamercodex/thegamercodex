import { NextResponse } from "next/server";
import { getGame, getTool } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

const MAX_COMMENT_LENGTH = 1000;

interface ReportBody {
  toolId?: unknown;
  gameId?: unknown;
  locale?: unknown;
  comment?: unknown;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHANNEL_ID;
  if (!token || !chatId) {
    return NextResponse.json(
      { ok: false, error: "Reporting not configured" },
      { status: 503 },
    );
  }

  let body: ReportBody;
  try {
    body = (await request.json()) as ReportBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 },
    );
  }

  if (
    !isNonEmptyString(body.toolId) ||
    !isNonEmptyString(body.gameId) ||
    !isNonEmptyString(body.locale)
  ) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  const comment =
    typeof body.comment === "string"
      ? body.comment.trim().slice(0, MAX_COMMENT_LENGTH)
      : "";

  const locale = body.locale === "en" ? "en" : "es";

  let game, tool;
  try {
    [game, tool] = await Promise.all([
      getGame(body.gameId),
      getTool(body.gameId, body.toolId),
    ]);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Tool or game not found" },
      { status: 404 },
    );
  }

  const pageUrl = absoluteUrl(`/${locale}/${game.id}/tools/${tool.id}`);
  const lines = [
    "<b>\u{1F534} Enlace caído reportado</b>",
    "",
    `<b>Juego:</b> ${escapeHtml(game.name)}`,
    `<b>Tool:</b> ${escapeHtml(tool.name)}`,
    `<b>URL reportada:</b> ${escapeHtml(tool.url)}`,
    `<b>Página:</b> ${escapeHtml(pageUrl)}`,
  ];
  if (comment) {
    lines.push("", "<b>Comentario:</b>", escapeHtml(comment));
  }

  let telegramRes: Response;
  try {
    telegramRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: lines.join("\n"),
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      },
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Telegram unreachable" },
      { status: 502 },
    );
  }

  if (!telegramRes.ok) {
    return NextResponse.json(
      { ok: false, error: "Telegram delivery failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
