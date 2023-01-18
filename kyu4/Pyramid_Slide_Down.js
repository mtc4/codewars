function longestSlideDown(pyramid) {
  let pyramidArr = [];
  pyramid.forEach((elem, index) => {
    pyramidArr.push(elem.map((e) => (index === pyramid.length - 1 ? e : 0)));
  });
  for (let i = pyramidArr.length - 2; i >= 0; i--) {
    for (let j = 0; j < pyramidArr[i].length; j++) {
      pyramidArr[i][j] =
        pyramid[i][j] +
        Math.max(pyramidArr[i + 1][j], pyramidArr[i + 1][j + 1]);
    }
  }
  return pyramidArr[0][0];
}
