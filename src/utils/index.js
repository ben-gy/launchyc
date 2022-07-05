export function upperSnakeCase(string) {
  return string.split(' ').join('_').toUpperCase();
}

export function getDaysDiff(date) {
  return (Math.abs(new Date(date) - new Date()) / 36e5).toFixed();
}
