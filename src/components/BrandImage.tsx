type Variant = "bannerLanding" | "logoSquare" | "logoHorizontal";

interface Props {
  variant: Variant;
  alt: string;
  className?: string;
}

// Renders the brand image for the active chrome theme via a CSS background-image
// driven by [data-chrome-theme] selectors (see .brand-image-* rules in globals.css).
// The inline <head> script sets data-chrome-theme on <html> before paint, so the
// browser only fetches the URL of the active theme — no flash, no double download.
// This is a server component (no hydration cost).
export function BrandImage({ variant, alt, className }: Props) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`brand-image brand-image-${variant} ${className ?? ""}`}
    />
  );
}
