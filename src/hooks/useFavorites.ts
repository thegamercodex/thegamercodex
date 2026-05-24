"use client";

import { useCallback, useEffect, useState } from "react";

export type FavoriteEntry =
  | { type: "tool"; id: string; gameId: string }
  | { type: "game"; id: string };

const STORAGE_KEY = "thegamercodex:favorites";
const CHANGE_EVENT = "thegamercodex:favorites-changed";

function entriesEqual(a: FavoriteEntry, b: FavoriteEntry): boolean {
  if (a.type !== b.type) return false;
  if (a.id !== b.id) return false;
  if (a.type === "tool" && b.type === "tool") return a.gameId === b.gameId;
  return true;
}

function readStorage(): FavoriteEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (e): e is FavoriteEntry =>
        typeof e === "object" &&
        e !== null &&
        "type" in e &&
        "id" in e &&
        typeof (e as { id: unknown }).id === "string" &&
        ((e as { type: unknown }).type === "game" ||
          ((e as { type: unknown }).type === "tool" &&
            typeof (e as { gameId?: unknown }).gameId === "string"))
    );
  } catch {
    return [];
  }
}

function writeStorage(entries: FavoriteEntry[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteEntry[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setFavorites(readStorage());
    setHydrated(true);
    const sync = () => setFavorites(readStorage());
    window.addEventListener("storage", sync);
    window.addEventListener(CHANGE_EVENT, sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(CHANGE_EVENT, sync);
    };
  }, []);

  const isFavorite = useCallback(
    (entry: FavoriteEntry) => favorites.some((f) => entriesEqual(f, entry)),
    [favorites]
  );

  const toggle = useCallback((entry: FavoriteEntry) => {
    const current = readStorage();
    const exists = current.some((f) => entriesEqual(f, entry));
    const next = exists
      ? current.filter((f) => !entriesEqual(f, entry))
      : [...current, entry];
    writeStorage(next);
    setFavorites(next);
  }, []);

  const remove = useCallback((entry: FavoriteEntry) => {
    const current = readStorage();
    const next = current.filter((f) => !entriesEqual(f, entry));
    writeStorage(next);
    setFavorites(next);
  }, []);

  return {
    favorites,
    isFavorite,
    toggle,
    remove,
    hydrated,
    count: favorites.length,
  };
}
