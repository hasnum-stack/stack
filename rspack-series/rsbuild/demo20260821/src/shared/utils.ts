export const UTILS_MARKER = 'SHARED_UTILS_v1';

let loadCount = 0;
loadCount += 1;
console.log(`[utils] module executed, loadCount=${loadCount}`);

export function currentLoadCount(): number {
  return loadCount;
}

export function formatDate(ts: number): string {
  const d = new Date(ts);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

export function uid(): string {
  return `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function clamp(v: number, min: number, max: number): number {
  return Math.min(Math.max(v, min), max);
}
