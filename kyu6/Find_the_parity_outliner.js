function findOutlier(integers) {
  const even = integers.filter((a) => a % 2);
  const odd = integers.filter((a) => !(a % 2));
  return even.length === 1 ? even[0] : odd[0];
}
