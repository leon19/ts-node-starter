/**
 * Just an example function that sums two or more numbers.
 *
 * @example ```
 * const result = sum(1 + 2); // 3
 * ```
 * @param numbers - The numbers to sum
 * @returns The result
 */
export function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
