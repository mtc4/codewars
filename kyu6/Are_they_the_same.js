function comp(array1, array2) {
  if (!array1 || !array2) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  const isEqual = (v, i) => v === array2[i];
  return array1.map((v) => v * v).every(isEqual);
}
