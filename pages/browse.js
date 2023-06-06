/* eslint-disable @next/next/no-img-element */

// styles import

// data imports
import getSearchComicUrl from "@/data/fetchComic/getSearchUrl";
import { GENRES_FILTER } from "@/data/genresFilter";
import { comicProps } from "@/data/batoto_property";

// layouts import
import MainLayout from "@/layout/mainLayout";
import CheckboxLayout from "@/layout/checkbox";

// library imports
import { useState, useEffect } from "react";

// components imports
import SearchInput from "@/components/search";
import Button from "@/components/button/Button";
import Checkbox from "@/components/checkbox";
import genresCombinator from "@/utils/genreCombinator";

const DATA_NAME = "data-ischecked";

function getSelectedGenresDataValue(nodeList, attribute, value) {
  return [...nodeList]
    .filter((element) => element.getAttribute(attribute) === value)
    .map((element) => element.getAttribute("data-value"));
}
function genresChekboxHandler(checkboxNodelist) {
  const includedGenres = getSelectedGenresDataValue(
    checkboxNodelist,
    DATA_NAME,
    "included"
  );
  const excludedGenres = getSelectedGenresDataValue(
    checkboxNodelist,
    DATA_NAME,
    "excluded"
  );

  return { includedGenres, excludedGenres };
}
function flagEmojiToIso(flag) {
  return String.fromCodePoint(
    ...[...flag].map((c) => c.codePointAt() - 127397)
  ).toLowerCase();
}

export default function Browse() {
  const [comicResult, setComicResult] = useState();
  const [search, setSearch] = useState(false);
  const [page, setPage] = useState(1);

  function handleSearchQuery() {
    // search words
    const word = document.getElementById("search-comic");
    const wordValue = word.value.toString();

    // genres
    const dataGenres = document.querySelectorAll('[data-type="genre"]');
    const { includedGenres, excludedGenres } = genresChekboxHandler(dataGenres);

    // order
    const dataOrder = document.querySelector(
      '[data-type="order"][data-ischecked="included"]'
    );
    // status
    const dataStatus = document.querySelector(
      '[data-type="status"][data-ischecked="included"]'
    );
    // translatedLanguages
    const dataTranslatedLanguages = document.querySelector(
      '[data-type="tlLang"][data-ischecked="included"]'
    );
    // wrap querySearch
    const searchQuery = {
      search: wordValue,
      order: dataOrder?.getAttribute("data-value"),
      status: dataStatus?.getAttribute("data-value"),
      lang: dataTranslatedLanguages?.getAttribute("data-value"),
      genres: genresCombinator({
        includedGenres,
        excludedGenres: [
          ...excludedGenres /* pilihan ente */,
          ...GENRES_FILTER /* filter aing 🥶 */,
        ],
      }),
    };

    return searchQuery;
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const queryParams = handleSearchQuery();
    const url = getSearchComicUrl(queryParams);

    setComicResult(undefined);

    fetch(url, { signal })
      .then((response) => response.json())
      .then((responseData) => setComicResult(responseData))
      .catch(function (e) {
        if (e instanceof DOMException && e.name == "AbortError") return;
        console.log(e.message);
      });

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

          <div
            className="advance-search-filter"
            aria-label="advance_search_filter"
          >
            <CheckboxLayout
              title={comicProps.contentType.name}
              others={{ "data-layout": "main" }}
            >
              {comicProps.contentType.filters.sort().map((type, i) => {
                return (
                  <Checkbox
                    key={i}
                    dataValue={type}
                    name={type.split("_").join(" ")}
                    dataType={"genre"}
                  />
                );
              })}
            </CheckboxLayout>

            <CheckboxLayout
              title={comicProps.genres.name}
              others={{ "data-layout": "main" }}
            >
              {comicProps.genres.filters.map((genreType, i) => {
                return (
                  <CheckboxLayout
                    key={i}
                    title={`${genreType.name}`}
                    others={{ "data-layout": comicProps.genres.name }}
                  >
                    {genreType.filters.sort().map((filter, j) => {
                      return (
                        <Checkbox
                          key={j}
                          dataValue={filter}
                          name={filter.split("_").join(" ")}
                          dataType={"genre"}
                        />
                      );
                    })}
                  </CheckboxLayout>
                );
              })}
            </CheckboxLayout>

            <CheckboxLayout title={"Order"} others={{ "data-layout": "main" }}>
              {comicProps.orders.filters.map((order, i) => {
                return (
                  <Checkbox
                    key={i}
                    dataValue={order.filters}
                    name={order.name}
                    dataType={"order"}
                    onlySelectOne={true}
                  />
                );
              })}
            </CheckboxLayout>

            <CheckboxLayout
              title={comicProps.status.name}
              others={{ "data-layout": "main" }}
            >
              {comicProps.status.filters.map((stats, i) => {
                return (
                  <Checkbox
                    key={i}
                    dataValue={stats}
                    name={stats}
                    dataType={"status"}
                    onlySelectOne={true}
                  />
                );
              })}
            </CheckboxLayout>
            <CheckboxLayout
              title={comicProps.translatedLanguage.name}
              others={{ "data-layout": "main" }}
            >
              {comicProps.translatedLanguage.filters.map((countryCode, i) => {
                return (
                  <Checkbox
                    key={i}
                    name={`${countryCode.emoji} ${countryCode.name}`}
                    dataValue={flagEmojiToIso(countryCode.emoji)}
                    dataType={"tlLang"}
                    onlySelectOne={true}
                  />
                );
              })}
            </CheckboxLayout>
          </div>

          {/* loading comic data UI */}
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
