export function sumArray(array: number[]): number {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}