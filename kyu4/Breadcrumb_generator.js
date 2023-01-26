const EXCLUDED_WORDS = [
  "the",
  "of",
  "in",
  "from",
  "by",
  "with",
  "and",
  "or",
  "for",
  "to",
  "at",
  "a",
];

function generateBC(url, separator) {
  const extensionRegex = /(.*)(\.[0-9a-z]+)+$/i;
  const parts = [];
  const regex = /^index\..*/;
  let clearedUrl = url;
  if (url.indexOf("?") > -1) {
    clearedUrl = url.slice(0, url.indexOf("?"));
  }
  if (clearedUrl.indexOf("#") > -1) {
    clearedUrl = clearedUrl.slice(0, clearedUrl.indexOf("#"));
  }
  [, clearedUrl] = clearedUrl.match(
    /(?:https:\/\/|http:\/\/)?((.*)(?:\.[a-z]+)+(.*))/
  );

  clearedUrl
    .split("/")
    .filter((el) => el.length > 0)
    .forEach((part) => {
      if (!regex.test(part)) {
        parts.push(part);
      }
    });
  let bc = [],
    builtUrl = "";
  parts.forEach((el, index) => {
    if (index === 0) {
      let result = `<a href="/">HOME</a>`;
      if (index === parts.length - 1) {
        result = `<span class="active">HOME</span>`;
      }
      bc.push(result);
      builtUrl += "/";
    } else {
      let label = el;

      if (extensionRegex.test(label)) {
        [, label] = label.match(extensionRegex);
      }

      if (label.length > 30) {
        label = label
          .split("-")
          .filter((word) => !EXCLUDED_WORDS.includes(word))
          .map((word) => word.charAt(0))
          .join("")
          .toUpperCase();
      } else {
        label = label.replace(/-/g, " ").toUpperCase();
      }

      if (index < parts.length - 1) {
        bc.push(`<a href="${builtUrl}${el}/">${label}</a>`);
        builtUrl += `${el}/`;
      } else {
        bc.push(`<span class="active">${label}</span>`);
      }
    }
  });

  return bc.join(`${separator}`);
}
