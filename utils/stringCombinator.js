export default function arrayToStringCombinator(arr, combinator = "") {
  if (arr.length === 0) return "";
  if (typeof arr === "string") return "";

  const combinedString = arr.reduce((word, text, i) => {
    return `${word}${i > 0 ? "," : ""}${combinator}${text}`;
  }, "");

  return combinedString;
}
