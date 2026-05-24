import { getChangelogEntries } from "@/lib/changelog";
import { absoluteUrl, siteUrl } from "@/lib/site";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function isoFromDateOnly(dateStr: string): string {
  return new Date(`${dateStr}T00:00:00Z`).toISOString();
}

export async function GET() {
  const entries = getChangelogEntries();
  const base = siteUrl();
  const selfUrl = absoluteUrl("/changelog/feed.xml");
  const updated = entries.length > 0 ? isoFromDateOnly(entries[0].date) : new Date().toISOString();

  const xmlEntries = entries
    .map((entry) => {
      const id = `${base}/en/changelog#${entry.slug}`;
      const link = `${base}/en/changelog#${entry.slug}`;
      const iso = isoFromDateOnly(entry.date);
      return `  <entry>
    <id>${escapeXml(id)}</id>
    <title>${escapeXml(entry.titleEn)}</title>
    <link rel="alternate" type="text/html" href="${escapeXml(link)}"/>
    <updated>${iso}</updated>
    <published>${iso}</published>
    <summary>${escapeXml(entry.summaryEn)}</summary>
    <content type="html">${escapeXml(entry.htmlEn)}</content>
  </entry>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>TheGamerCodex — Changelog</title>
  <subtitle>New games, tools, creators, resources, and comparisons added to the codex.</subtitle>
  <link rel="self" type="application/atom+xml" href="${escapeXml(selfUrl)}"/>
  <link rel="alternate" type="text/html" href="${escapeXml(base + "/en/changelog")}"/>
  <id>${escapeXml(base + "/changelog/feed.xml")}</id>
  <updated>${updated}</updated>
${xmlEntries}
</feed>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
