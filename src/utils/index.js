export function upperSnakeCase(string) {
  return string.split(' ').join('_').toUpperCase();
}
