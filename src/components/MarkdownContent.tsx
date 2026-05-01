import { renderMarkdown } from "@/lib/markdown";

interface MarkdownContentProps {
  source: string;
  className?: string;
}

export function MarkdownContent({ source, className }: MarkdownContentProps) {
  const html = renderMarkdown(source);
  return (
    <div
      className={`markdown-content ${className ?? ""}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
