import genresCombinator from "@/utils/genreCombinator";
import { comicProps } from "../batoto_property";

function getSearchComicUrl(requireParams) {
  const {
    search = "",
    genres = genresCombinator(),
    page = "1",
    lang = "id",
    order = comicProps.order[0].data,
  } = requireParams; // destructure

  const setRequireParams = {
    search,
    genres,
    page,
    lang,
    order,
  };

  const queryParams = Object.entries(setRequireParams).reduce(
    (value, [prop, val], i) => {
      return `${value}${i > 0 ? "&" : ""}${prop}=${val}`;
    },
    ""
  );

  return `https://bato-to.vercel.app/browse?${queryParams}`;
}

export default getSearchComicUrl;
