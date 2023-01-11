function generateHashtag(str) {
  const result = str
    .split(" ")
    .map((word) => word && capitalize(word))
    .join("");
  if (!result || result.length >= 140) return false;
  return `#${result}`;
}

// utils
const capitalize = (word) =>
  word[0].toUpperCase() + word.toLowerCase().slice(1);
