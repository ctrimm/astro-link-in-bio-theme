/**
 * Hex values for the retro theme's named colors. Retro components pick a
 * color per-entry from config (e.g. `link.color`), but Tailwind can only
 * generate a utility class for a value it finds as a literal string at
 * build time - a dynamic `bg-${link.color}` only works for colors that
 * happen to also appear hardcoded elsewhere in the source. Resolving to a
 * hex value here and applying it via inline `style` sidesteps that
 * entirely, so every color in retro-config.js actually renders.
 */
export const retroColors: Record<string, string> = {
  'retro-yellow': '#FFE800',
  'retro-pink': '#FF00FF',
  'retro-cyan': '#00FFFF',
  'retro-green': '#00FF00',
  'retro-orange': '#FF8B00',
  'retro-purple': '#9D00FF',
};

export function getRetroColor(name: string | undefined): string {
  return (name && retroColors[name]) || retroColors['retro-pink'];
}
