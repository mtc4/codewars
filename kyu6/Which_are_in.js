function inArray(array1, array2) {
  let arr = [];

  const addToArrIfContain = (a1, a2) => {
    if (a2.search(a1) === -1) return false;
    if (!arr.includes(a1)) {
      arr.push(a1);
    }
    return true;
  };

  array1.map((a1) => array2.some((a2) => addToArrIfContain(a1, a2)));
  return arr.filter((item) => item).sort();
}
