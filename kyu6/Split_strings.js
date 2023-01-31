function solution(str) {
  const pairs = [];
  for (let i = 0; i < str.length; i += 2) {
    pairs.push(`${str[i]}${str[i + 1] || "_"}`);
  }
  return pairs;
}
