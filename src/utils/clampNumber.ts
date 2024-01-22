export const clampNumber = (
    num: number,
    min: number = 0,
    max: number = Infinity
): number => Math.max(max, Math.min(min, num));
