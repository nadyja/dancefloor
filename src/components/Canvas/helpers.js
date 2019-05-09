export function getRandomColor(i, j) {
  return `rgb(${i * 15}, ${j * 5}, ${(i+j) * 50})`
}
export function getSize(ctx, dimensions) {
  const { columns } = dimensions;
  return 300/columns;
}
export default {
  getRandomColor,
  getSize,
}