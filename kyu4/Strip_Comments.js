function solution(input, markers) {
  let inputLinesArr = input.split("\n");
  for (let marker of markers)
    inputLinesArr = inputLinesArr.map((item) => item.split(marker)[0].trim());
  return inputLinesArr.join("\n");
}
