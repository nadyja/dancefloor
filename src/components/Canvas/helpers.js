export function getRandomColor(i, j) {
  return `rgb(${i * 15}, ${j * 5}, ${(i+j) * 50})`
}
export function getSize(ctx, columns, rows) {
  const sizeWidth = ctx.canvas.clientWidth;
  const sizeHeight = ctx.canvas.clientHeight;
  const width = 300/columns;//sizeWidth/columns;
  const height = width;
  return width;
}
export default {
  getRandomColor,
  getSize,
}