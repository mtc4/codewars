function titleCase(title, minorWords) {
  const wordsToSkip = minorWords ? minorWords.toLowerCase().split(" ") : "";
  if (!title) return "";
  return title
    .split(" ")
    .map((e, i) =>
      i > 0 && wordsToSkip.includes(e.toLowerCase())
        ? e.toLowerCase()
        : capitalize(e)
    )
    .join(" ");
}

// utils
const capitalize = (word) =>
  word[0].toUpperCase() + word.toLowerCase().slice(1);
