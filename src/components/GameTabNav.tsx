"use client";

import { useEffect, useRef, useState } from "react";

interface Tab {
  id: string;
  label: string;
}

interface Props {
  tabs: Tab[];
}

export function GameTabNav({ tabs }: Props) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");
  const userClicked = useRef(false);
  const clickResetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (userClicked.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    tabs.forEach((tab) => {
      const el = document.getElementById(tab.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tabs]);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    userClicked.current = true;
    setActive(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (clickResetTimer.current) clearTimeout(clickResetTimer.current);
    clickResetTimer.current = setTimeout(() => {
      userClicked.current = false;
    }, 800);
  };

  return (
    <div className="sticky top-16 z-30 border-b border-border bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto overflow-y-hidden px-6">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={handleClick(tab.id)}
              className={`relative shrink-0 px-3 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {isActive && (
                <span
                  className="absolute inset-x-3 bottom-0 h-0.5 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
