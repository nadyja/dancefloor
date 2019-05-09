function getRandomColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
}
function getTileSize(clientWidth, dimensions) {
  const { columns } = dimensions;
  return clientWidth/columns;
}
function recalculateCanvasHeight(dimensions, tileSize) {
  return tileSize * dimensions.rows;
}
function runTheLoop(ctx, dimensions, tileSize) {
  const { rows, columns } = dimensions;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      ctx.fillStyle = getRandomColor(i, j);
      ctx.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);
    }
  }
}

export default function renderTiles(canvas, dimensions) {
  const ctx = canvas.getContext("2d");
  const tileSize = getTileSize(ctx.canvas.clientWidth, dimensions);
  ctx.canvas.height = recalculateCanvasHeight(dimensions, tileSize);
  runTheLoop(ctx, dimensions, tileSize);
}