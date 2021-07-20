export function normalizeTime(timestamp) {
  let isoTime;
  try {
    isoTime = new Date(timestamp).toISOString();
  } catch (e) {
    return "";
  }

  return isoTime.slice(0, 10) + " " + isoTime.slice(12, 16);
}
