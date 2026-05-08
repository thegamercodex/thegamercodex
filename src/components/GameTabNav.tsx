"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
}

interface Props {
  tabs: Tab[];
  rightSlot?: ReactNode;
}

export function GameTabNav({ tabs, rightSlot }: Props) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");
  const userClicked = useRef(false);
  const clickResetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // IntersectionObserver was unreliable for sections of very different heights
    // (the markdown "about" section spans more than a viewport, so its
    // intersectionRatio stays small and never wins the highest-ratio sort).
    // Scroll-based detection: the active tab is the last section whose top
    // has crossed an imaginary line at 30% from the viewport top.
    const handleScroll = () => {
      if (userClicked.current) return;
      const triggerY = window.innerHeight * 0.3;
      let activeId = tabs[0]?.id ?? "";
      for (const tab of tabs) {
        const el = document.getElementById(tab.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= triggerY) {
          activeId = tab.id;
        }
      }
      setActive(activeId);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

  const nav = (
    <nav className="flex flex-1 gap-1 overflow-x-auto overflow-y-hidden">
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
  );

  return (
    <div className="sticky top-16 z-30 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col-reverse px-6 sm:flex-row sm:items-center sm:gap-4">
        {nav}
        {rightSlot && (
          <div className="flex shrink-0 items-center justify-start border-b border-border py-2 sm:border-b-0 sm:py-0 sm:justify-end">
            {rightSlot}
          </div>
        )}
      </div>
    </div>
  );
}
