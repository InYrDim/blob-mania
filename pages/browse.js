/* eslint-disable @next/next/no-img-element */

// styles import

// data imports
import getSearchComicUrl from "@/data/fetchComic/getSearchUrl";
import { GENRES_FILTER } from "@/data/genresFilter";

// layouts import
import MainLayout from "@/layout/mainLayout";

// library imports
import { useState, useEffect } from "react";

// components imports
import SearchInput from "@/components/search";
import Button from "@/components/button/Button";
import genresCombinator from "@/utils/genreCombinator";

// UI Components
import ContentFilter from "@/components/UIComponent/content_filter";

// utils imports
import { fetchErrorHandler } from "@/utils/fetchErrorHandler";
import { useFetchWithAbort } from "@/utils/useFetchWithAbort";

function handleSearchQuery() {
  function selectBoxDataValue({ dataType, type = "included" }) {
    return [
      ...document.querySelectorAll(
        `[data-type="${dataType}"][data-checked_as=${type}]`
      ),
    ].map((genre) => genre?.getAttribute("data-value"));
  }
  // search words
  const word = document.getElementById("search-comic");
  const wordValue = word.value.toString();

  // content_filter
  const includedGenres = selectBoxDataValue({ dataType: "genre" });
  const excludedGenres = selectBoxDataValue({
    dataType: "genre",
    type: "excluded",
  });
  const dataOrder = selectBoxDataValue({ dataType: "order" });
  const dataStatus = selectBoxDataValue({ dataType: "status" });

  const dataTranslatedLanguages = selectBoxDataValue({
    dataType: "tlLang",
  });

  const searchQuery = {
    search: wordValue,
    order: dataOrder,
    status: dataStatus,
    lang: dataTranslatedLanguages,
    genres: genresCombinator({
      includedGenres,
      excludedGenres: [...excludedGenres, ...GENRES_FILTER],
    }),
  };

  console.log(searchQuery.genres);
  return searchQuery;
}
export default function Browse() {
  const [comicResult, setComicResult] = useState();
  const [search, setSearch] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const queryParams = handleSearchQuery();
    const url = getSearchComicUrl(queryParams);

    setComicResult(undefined);

    try {
      const fetchData = async () => {
        try {
          const response = await fetch(url, { signal });
          const data = await response.json();

          setComicResult(data);
        } catch (err) {
          fetchErrorHandler(err);
        }
      };

      fetchData();
    } catch (err) {
      fetchErrorHandler(err);
    }

    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <>
      <MainLayout title={"Browse"}>
        <h1>Browse Page</h1>
        <section className="browse top_green_line">
          <h2>Search</h2>
          <SearchInput
            handleSearch={() => {
              setSearch((search) => !search);
            }}
          />
          <ContentFilter />

          {!comicResult && (
            <section aria-label="loading" className="section-wrapper">
              <div className="card-container">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </section>
          )}

          {comicResult && (
            <section
              className="search-card-container"
              aria-label="search-card-container"
            >
              {comicResult.map((item, i) => {
                return (
                  <div
                    className="card"
                    key={item.id}
                    onClick={() => {
                      // manual new tab
                      window.open(`/comic/${item.id}`);
                    }}
                  >
                    <img src={item.cover.src} alt={item.cover.altName} />
                    <div className="caption">{item.title}</div>
                  </div>
                );
              })}
            </section>
          )}

          <div className="center">
            <div
              className="pagination"
              aria-label="browse-pagination-container"
            >
              <Button
                name="next"
                onClick={() => {
                  setPage((page) => page + 1);
                  setComicResult(undefined);
                }}
              />
              <span>{page}</span>
              <Button
                name="prev"
                onClick={() => {
                  if (page > 1) {
                    setPage((page) => page - 1);
                    setComicResult(undefined);
                  }
                }}
              />
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
