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
import { getBoxDataValue } from "@/utils/getBoxDataValue";

function handleSearchQuery({ page }) {
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
    page: page,
    genres: genresCombinator({
      includedGenres,
      excludedGenres: [...excludedGenres, ...GENRES_FILTER],
    }),
  };

  return searchQuery;
}
export default function Browse() {
  const [comicResult, setComicResult] = useState();
  const [search, setSearch] = useState(false);
  const [page, setPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const queryParams = handleSearchQuery({ page });
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
  }, [search, page]);

  return (
    <>
      <MainLayout title={"Browse"}>
        <h1>Browse Page</h1>
        <section className="browse top_green_line">
          {/* <h2>Search</h2> */}
          {/* {included && <h2>TESTT</h2>} */}
          <div className="searchFilter" aria-label="content_search_filter">
            <div className="searchbox-wrapper">
              <SearchInput
                handleSearch={() => {
                  setSearch((search) => !search);
                  setPage((page) => (page = 1));
                }}
              />
              <Button
                name={
                  showFilter ? (
                    <span>Collapse</span>
                  ) : (
                    <span>Content Filter</span>
                  )
                }
                classes={"content_filter_toggler test"}
                variant={"text_only"}
                onClick={() => {
                  setShowFilter((state) => !state);
                }}
              />
            </div>
            <>
              <div
                className={`content_filter ${showFilter ? "show" : ""}`}
                onClick={(e) => {
                  // function findElementFromEventTarget(
                  //   elementNode,
                  //   target = ""
                  // ) {
                  //   let attempt = 0;
                  //   let MAX_ATTEMPT = 3;
                  //   function getParentNode(node) {
                  //     if (!node) return;
                  //     if (attempt > MAX_ATTEMPT) return;
                  //     attempt++;
                  //     const tagName = node.tagName;
                  //     const attributes = node.attributes.getNamedItem(target);
                  //     if (tagName === "DIV" && attributes !== null) {
                  //       return node;
                  //     }
                  //     getParentNode(node.parentNode);
                  //   }
                  //   return getParentNode(elementNode);
                  // }
                  // const parentNode = e.target.parentElement;
                  // const elementVal = "data-checked_as";
                  // const checkedElement = findElementFromEventTarget(
                  //   parentNode,
                  //   elementVal
                  // );
                }}
              >
                <ContentFilter />
              </div>{" "}
              {showFilter && (
                <Button
                  name={
                    showFilter ? (
                      <span>Collapse</span>
                    ) : (
                      <span>Content Filter</span>
                    )
                  }
                  classes={"content_filter_toggler"}
                  variant={showFilter ? "outlined" : "text_only"}
                  onClick={() => {
                    setShowFilter((state) => !state);
                  }}
                />
              )}
            </>
          </div>

          {/* loadingState */}
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

          {/* comic found */}
          {comicResult && (
            <section
              className="search-card-container "
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
            {/* show only when have fulldata */}
            {comicResult && comicResult.length === 36 && (
              <div
                className="pagination"
                aria-label="browse-pagination-container"
              >
                {/* handle NextPage */}
                {comicResult && comicResult.length <= 36 && (
                  <Button
                    name="Next"
                    onClick={() => {
                      setComicResult(undefined);
                      setPage((page) => page + 1);
                    }}
                  />
                )}
                <span>{page}</span>

                {/* handle PrevPage */}
                {comicResult && page !== 1 && (
                  <Button
                    name="Prev"
                    onClick={() => {
                      if (page >= 2) {
                        setComicResult(undefined);
                        setPage((page) => page - 1);
                      }
                    }}
                  />
                )}
              </div>
            )}

            {/* not found requested data */}
            {comicResult && comicResult.length === 0 && <div>Not Found</div>}
          </div>
        </section>
      </MainLayout>
    </>
  );
}
