var uniqueInOrder = function (iterable) {
  return [...iterable].filter((char, i) => iterable[i - 1] !== char);
};
