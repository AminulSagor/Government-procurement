export function formatBytes(bytes: number) {
  if (!bytes) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const num = bytes / Math.pow(k, i);
  return `${num.toFixed(i === 0 ? 0 : 1)} ${sizes[i]}`;
}