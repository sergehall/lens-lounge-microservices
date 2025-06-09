/**
 * Replaces route parameters (e.g. :id, :slug) in a route template string
 * with actual values from the provided params object.
 *
 * Supports multiple parameters.
 *
 * Example:
 * buildRoute('/posts/:postId/comments/:commentId', {
 *   postId: '42',
 *   commentId: '7',
 * });
 * // → "/posts/42/comments/7"
 *
 * All values are automatically URI-encoded.
 *
 * @param template - A route string with :params (e.g. '/users/:id')
 * @param params - An object with keys matching the param names
 * @returns The final path with params replaced
 */
export function buildRoute(template: string, params: Record<string, string>): string {
  return Object.entries(params).reduce((path, [key, value]) => {
    const param = `:${key}`;
    if (!path.includes(param)) {
      console.warn(`Param :${key} not found in route: ${template}`);
    }
    return path.replace(param, encodeURIComponent(value));
  }, template);
}
