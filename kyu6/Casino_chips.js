function solve(arr) {
  var [a, b, c] = arr.sort((x, y) => x - y);
  return Math.min(a + b, parseInt((a + b + c) / 2));
}
