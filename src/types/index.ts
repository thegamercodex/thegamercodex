export type Locale = "es" | "en";

export type Platform =
  | "windows"
  | "macos"
  | "linux"
  | "android"
  | "ios"
  | "playstation"
  | "xbox"
  | "switch"
  | "web";

export type StorePlatform =
  | "steam"
  | "epic"
  | "gog"
  | "playstation"
  | "xbox"
  | "nintendo"
  | "battlenet"
  | "origin"
  | "uplay";

export type ToolType =
  | "software"
  | "web-app"
  | "overlay"
  | "browser-extension"
  | "mobile-app"
  | "official-service"
  | "reference";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type CreatorPlatformType =
  | "youtube"
  | "twitch"
  | "kick"
  | "twitter"
  | "discord"
  | "patreon"
  | "tiktok"
  | "instagram";

export type ResourceType =
  | "video"
  | "article"
  | "guide"
  | "stream"
  | "podcast"
  | "infographic";

export type MonetizationModel =
  | "free-to-play"
  | "buy-to-play"
  | "subscription"
  | "freemium";

export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface Store {
  platform: StorePlatform;
  url: string;
  appId?: string;
  model: MonetizationModel;
}

export interface Monetization {
  model: MonetizationModel;
  hasInGamePurchases: boolean;
  purchaseTypes: string[];
  payToWin: boolean;
  noteEs: string;
  noteEn: string;
}

export interface LocalizedCategory {
  id: string;
  nameEs: string;
  nameEn: string;
  descriptionEs: string;
  descriptionEn: string;
  icon?: string;
}

export type ToolCategory = LocalizedCategory;
export type ResourceCategory = LocalizedCategory;

export interface GameMeta {
  id: string;
  name: string;
  shortName: string;
  developer: string;
  releaseYear: number;
  officialUrl: string;
  stores: Store[];
  priceTracker?: string;
  monetization: Monetization;
  platforms: Platform[];
  genres: string[];
  theme: Theme;
  logo: string;
  heroImage: string;
  toolCategories: ToolCategory[];
  resourceCategories: ResourceCategory[];
}

export interface Game extends GameMeta {
  taglineEs: string;
  taglineEn: string;
  summaryEs: string;
  summaryEn: string;
  descriptionEs: string;
  descriptionEn: string;
}

export interface Screenshot {
  url: string;
  captionEs: string;
  captionEn: string;
}

export interface ToolVideo {
  youtubeId: string;
  title: string;
  creator: string;
  language: Locale;
  duration: string;
  noteEs: string;
  noteEn: string;
}

export interface ToolCreator {
  name: string;
  url?: string;
  creatorId?: string;
}

export interface MultiGameRef {
  gameId: string;
  url: string;
}

export interface MultiGameInfo {
  available: boolean;
  otherGames: MultiGameRef[];
}

export interface ToolMeta {
  id: string;
  name: string;
  shortName?: string;
  taglineEs: string;
  taglineEn: string;
  url: string;
  category: string;
  type: ToolType;
  official: boolean;
  free: boolean;
  openSource: boolean;
  github?: string;
  license?: string;
  platforms: Platform[];
  languages: Locale[];
  tags: string[];
  essential: boolean;
  difficulty: Difficulty;
  lastVerified: string;
  logo: string;
  screenshots: Screenshot[];
  videos: ToolVideo[];
  relatedTools: string[];
  alternatives: string[];
  createdBy?: ToolCreator;
  multiGame?: MultiGameInfo;
}

export interface Tool extends ToolMeta {
  quickTakeEs: string;
  quickTakeEn: string;
  contentEs: string;
  contentEn: string;
}

export interface PlaylistRef {
  id: string;
  name: string;
  withDisclaimer?: boolean;
}

export interface CreatorPlatform {
  type: CreatorPlatformType;
  handle?: string;
  url: string;
  channelId?: string;
  primary?: boolean;
  gamePlaylists?: Record<string, PlaylistRef[]>;
}

export interface CreatorMeta {
  id: string;
  name: string;
  realName?: string;
  country: string;
  languages: Locale[];
  active: boolean;
  joinedYear?: number;
  platforms: CreatorPlatform[];
  specialties: string[];
  games: string[];
  contentTypes: string[];
  audienceLevel: Difficulty[];
  noteEs: string;
  noteEn: string;
  highlightsEs: string[];
  highlightsEn: string[];
  avatar: string;
  banner: string;
}

export type Creator = CreatorMeta;

export interface YouTubeVideo {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
}

export interface Resource {
  id: string;
  type: ResourceType;
  title: string;
  creator: string;
  url: string;
  language: Locale;
  noteEs: string;
  noteEn: string;
  youtubeId?: string;
  duration?: string;
  publishedDate?: string;
  league?: string;
}

export interface ResourceCollection {
  category: string;
  resources: Resource[];
}
