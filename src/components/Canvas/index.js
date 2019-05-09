export function getRandomColor() {
  const r = (Math.random() * 255)|0;
  const g = (Math.random() * 255)|0;
  const b = (Math.random() * 255)|0;
  return `rgb(${r}, ${g}, ${b})`;
}

export function getSize(ctx, dimensions) {
  const { columns } = dimensions;
  return ctx.canvas.clientWidth/columns;
}
export function renderTiles(canvas, dimensions) {
  const ctx = canvas.getContext("2d");

  const tileSize = getSize(ctx, dimensions);
  ctx.canvas.height = tileSize * dimensions.rows;

  const { rows, columns } = dimensions;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      ctx.fillStyle = getRandomColor(i, j);
      ctx.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);
    }
  }
}
export default {
  getRandomColor,
  getSize,
  renderTiles,
}