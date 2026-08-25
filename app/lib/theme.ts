export type ThemeMode = "light" | "dark";

const STORAGE_KEY = "theme-preference";

export function getStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : null;
}

export function storeTheme(theme: ThemeMode): void {
  window.localStorage.setItem(STORAGE_KEY, theme);
}

export function applyTheme(theme: ThemeMode): void {
  document.documentElement.setAttribute("data-theme", theme);
}