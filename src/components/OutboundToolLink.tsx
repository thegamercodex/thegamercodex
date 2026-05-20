"use client";

import type { CSSProperties, ReactNode } from "react";
import { track } from "@vercel/analytics";

interface OutboundToolLinkProps {
  href: string;
  toolId: string;
  gameId: string;
  kind: "cta" | "github";
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function OutboundToolLink({
  href,
  toolId,
  gameId,
  kind,
  className,
  style,
  children,
}: OutboundToolLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={() => {
        track("tool-out", { tool: toolId, game: gameId, kind });
      }}
    >
      {children}
    </a>
  );
}
