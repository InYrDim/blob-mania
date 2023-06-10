import { GENRES_FILTER } from "@/data/genresFilter";

function arrayToStringCombinator(arr, combinator = "") {
  if (arr.length === 0) return "";
  if (typeof arr === "string") return "";

  return arr.reduce((word, text, i) => {
    return `${word}${i > 0 ? "," : ""}${combinator}${text}`;
  }, "");
}
export function genresCombinator({
  includedGenres = [],
  excludedGenres = GENRES_FILTER,
} = {}) {
  const includedString = arrayToStringCombinator(includedGenres);
  const excludedString = arrayToStringCombinator(excludedGenres, "|");

  if (includedString === "") return excludedString;
  if (excludedString === "") return includedString;

  return includedString + "," + excludedString;
}
