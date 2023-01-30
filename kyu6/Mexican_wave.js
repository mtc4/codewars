function wave(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    result.push(replaceAt(str, i, str[i].toUpperCase()));
  }
  return result;
}

// utils
function replaceAt(text, index, replacement) {
  return (
    text.substring(0, index) +
    replacement +
    text.substring(index + replacement.length)
  );
}
