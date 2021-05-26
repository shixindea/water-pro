export function isSite(): boolean {
  return import.meta.env.VITE_APP_SITE === 'true';
}
