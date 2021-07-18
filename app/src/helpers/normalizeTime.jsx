export function normalizeTime(timestamp) {
  const isoTime = new Date(timestamp).toISOString();

  return isoTime.slice(0, 10) + " " + isoTime.slice(12, 16);
}
