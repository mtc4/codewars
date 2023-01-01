// Version 1
function solution(string) {
  return [...string]
    .map((char) => (char.match(/[A-Z]/g) ? " " + char : char))
    .join("");
}

// Version 2
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}
