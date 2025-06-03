export function validateURL(url: string): boolean {
  const urlPattern =
    /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:\d+)?(\/[\w-./?%&=]*)?$/i;
  return urlPattern.test(url);
}
