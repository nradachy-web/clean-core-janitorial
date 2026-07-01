/** Prefix the GitHub Pages basePath onto plain <img>/<a>/url() paths. Set BASE to ""
 *  at cutover to cleancorejanitorial.com and add public/CNAME. */
export const BASE = "";
export function asset(path: string): string {
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path;
  if (path.startsWith("/")) return `${BASE}${path}`;
  return path;
}
