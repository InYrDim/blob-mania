// data imports
import { GENRES_FILTER } from "@/data/genresFilter";

// utils imports
import { genresCombinator } from "@/utils/genreCombinator";
import { getNodeElements } from "@/utils/getNodeElements";

function getBoxDataValue({ dataType, checked = "included" }) {
  if (typeof dataType !== "string") return [];

  const nodeElements = getNodeElements(
    `[data-type="${dataType}"][data-checked_as=${checked}]`
  );
  const elements = Array.from(nodeElements, (element, i) => {
    return element.getAttribute("data-value") || undefined;
  });

  return elements;
}

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
