/** Custom next/image loader for static export on GitHub Pages. Keep basePath in sync
 *  with next.config.ts + lib/asset.ts. Set to "" when serving at the domain root. */
const basePath = "";
export default function imageLoader({ src }: { src: string }): string {
  if (/^https?:\/\//.test(src)) return src;
  if (src.startsWith(basePath)) return src;
  if (src.startsWith("/")) return `${basePath}${src}`;
  return src;
}
