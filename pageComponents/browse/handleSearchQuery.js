// data imports
import { GENRES_FILTER } from "@/data/genresFilter";

import { genresCombinator } from "@/utils/genreCombinator";
import { getBoxDataValue } from "@/utils/getBoxDataValue";

export function handleSearchQuery({ pageIndex }) {
  // search words
  const word = document.getElementById("search-comic");
  const wordValue = word.value.toString();

  // content_filter
  const includedGenres = getBoxDataValue({ dataType: "genre" });
  const excludedGenres = getBoxDataValue({
    dataType: "genre",
    checked: "excluded",
  });
  const dataOrder = getBoxDataValue({ dataType: "order" });
  const dataStatus = getBoxDataValue({ dataType: "status" });

  const dataTranslatedLanguages = getBoxDataValue({
    dataType: "tlLang",
  });

  const searchQuery = {
    search: wordValue,
    order: dataOrder,
    status: dataStatus,
    lang: dataTranslatedLanguages,
    page: pageIndex,
    genres: genresCombinator({
      includedGenres,
      excludedGenres: [...excludedGenres, ...GENRES_FILTER],
    }),
  };

  return searchQuery;
}
