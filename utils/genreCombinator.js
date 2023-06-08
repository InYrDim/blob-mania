import arrayToStringCombinator from "./stringCombinator";
import { GENRES_FILTER } from "@/data/genresFilter";

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
