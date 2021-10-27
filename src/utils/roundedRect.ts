export const getRoundedRect = (
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) => {
  const rectangle = new Path2D();

  rectangle.moveTo(x, y + radius);
  rectangle.lineTo(x, y + height - radius);
  rectangle.arcTo(x, y + height, x + radius, y + height, radius);
  rectangle.lineTo(x + width - radius, y + height);
  rectangle.arcTo(
    x + width,
    y + height,
    x + width,
    y + height - radius,
    radius,
  );
  rectangle.lineTo(x + width, y + radius);
  rectangle.arcTo(x + width, y, x + width - radius, y, radius);
  rectangle.lineTo(x + radius, y);
  rectangle.arcTo(x, y, x, y + radius, radius);

  return rectangle;
};
