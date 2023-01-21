function likes(names = []) {
  const [n1, n2, n3] = names;
  let text = "";

  switch (names.length) {
    case 0:
      text = "no one likes this";
      break;
    case 1:
      text = `${n1} likes this`;
      break;
    case 2:
      text = `${n1} and ${n2} like this`;
      break;
    case 3:
      text = `${n1}, ${n2} and ${n3} like this`;
      break;
    default:
      text = `${n1}, ${n2} and ${names.length - 2} others like this`;
  }

  return text;
}
