const BYTES_IN_KB = 1024;

export const bytesToMegabytes = (size: number): number => size / (BYTES_IN_KB * BYTES_IN_KB);
