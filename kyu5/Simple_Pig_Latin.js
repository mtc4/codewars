function pigIt(str) {
  return str
    .split(" ")
    .map((word) =>
      word.match("[.!?\\-]") ? word : `${word.slice(1)}${word[0]}ay`
    )
    .join(" ");
}
