import type React from "react";

export function scrollToRef(
  ref: React.RefObject<HTMLElement | null> | undefined,
  offset: number
): void {
  if (!ref?.current) return;

  const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - offset - 24;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
