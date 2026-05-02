import {
  PlayCircle,
  Tv,
  AtSign,
  MessagesSquare,
  Heart,
  Music,
  Camera,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import type { CreatorPlatform } from "@/types";

const PLATFORM_ICONS: Record<string, LucideIcon> = {
  youtube: PlayCircle,
  twitch: Tv,
  kick: Tv,
  twitter: AtSign,
  discord: MessagesSquare,
  patreon: Heart,
  tiktok: Music,
  instagram: Camera,
};

const PLATFORM_LABELS: Record<string, string> = {
  youtube: "YouTube",
  twitch: "Twitch",
  kick: "Kick",
  twitter: "Twitter / X",
  discord: "Discord",
  patreon: "Patreon",
  tiktok: "TikTok",
  instagram: "Instagram",
};

interface PlatformLinkProps {
  platform: CreatorPlatform;
}

export function PlatformLink({ platform }: PlatformLinkProps) {
  const Icon = PLATFORM_ICONS[platform.type] ?? ExternalLink;
  const label = PLATFORM_LABELS[platform.type] ?? platform.type;

  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-sm transition-colors hover:border-accent/50 hover:bg-muted"
    >
      <Icon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
      <div className="min-w-0 flex-1">
        <p className="truncate font-medium leading-tight">{label}</p>
        {platform.handle && (
          <p className="truncate text-xs text-muted-foreground">
            {platform.handle}
          </p>
        )}
      </div>
      <ExternalLink className="h-3 w-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
}
