import { MEGA_MENU_ARROW_INSET_PX } from "../constants";

/**
 * Horizontal translation, in physical pixels, that places the mega menu arrow
 * under a nav trigger. The arrow sits at the inline start of the nav, so the
 * distance is measured from that edge and its sign flips in right-to-left
 * layouts.
 */
export function getArrowTranslateX(
  trigger: HTMLElement,
  container: HTMLElement
): number {
  const triggerRect = trigger.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const isRtl = getComputedStyle(container).direction === "rtl";

  const distanceFromStart = isRtl
    ? containerRect.right - triggerRect.right
    : triggerRect.left - containerRect.left;
  const distance =
    distanceFromStart + triggerRect.width / 2 - MEGA_MENU_ARROW_INSET_PX;

  return isRtl ? -distance : distance;
}
