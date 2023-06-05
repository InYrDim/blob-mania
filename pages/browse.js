/* eslint-disable @next/next/no-img-element */

// styles import

// data imports
import getSearchComicUrl from "@/data/fetchComic/getSearchUrl";
import { GENRES_FILTER } from "@/data/genresFilter";
import { comicProps } from "@/data/batoto_property";

// layouts import
import MainLayout from "@/layout/mainLayout";

// library imports
import { useState, useEffect } from "react";

// components imports
import SearchInput from "@/components/search";
import Button from "@/components/button/Button";
import Checkbox from "@/components/checkbox";
import genresCombinator from "@/utils/genreCombinator";

function resolveInnerText(arr, attribute, value) {
  return [...arr]
    .filter((element) => element.getAttribute(attribute) === value)
    .map((element) => element.getAttribute("data-value"));
}

export default function Browse() {
  const [comicResult, setComicResult] = useState();
  const [search, setSearch] = useState(false);
  const [page, setPage] = useState(1);

  function handleSearchQuery() {
    const word = document.getElementById("search-comic");
    const wordValue = word.value.toString();

    const dataGenres = document.querySelectorAll('[data-type="genre"]');

    const includedGenres = resolveInnerText(
      dataGenres,
      "data-ischecked",
      "included"
    );
    const excludedGenres = resolveInnerText(
      dataGenres,
      "data-ischecked",
      "excluded"
    );

    const dataOrder = document.querySelector(
      '[data-type="order"][data-ischecked="included"]'
    );
    const searchQuery = {
      search: wordValue,
      order: dataOrder?.getAttribute("data-value"),
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

  // firstRendering
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

          {/* checkbox */}
          <div className="checkbox-container">
            <p className="checkbox-title">Genres</p>
            <div className="checkbox-items-container">
              {comicProps.genres.map((genre, i) => {
                return (
                  <Checkbox
                    key={i}
                    name={genre.split("_").join(" ")}
                    dataType={"genre"}
                    dataValue={genre}
                  />
                );
              })}
            </div>
          </div>

          <div className="checkbox-container">
            <p className="checkbox-title">Order</p>
            <div className="checkbox-items-container">
              {comicProps.orders.map((order, i) => {
                return (
                  <Checkbox
                    key={i}
                    dataValue={order.data}
                    name={order.name}
                    dataType={"order"}
                    onlySelectOne={true}
                  />
                );
              })}
            </div>
          </div>

          {comicResult ? (
            <section
              className="search-card-container"
              aria-label="search-card-container"
            >
              {comicResult.map((item, i) => {
                return (
                  // <LinkBtn key={item.id} href={`/comic/${item.id}`} blank={true}>
                  <article
                    className="card"
                    key={item.id}
                    onClick={() => {
                      window.open(`/comic/${item.id}`);
                    }}
                  >
                    <img src={item.cover.src} alt={item.cover.altName} />
                    <div className="caption">{item.title}</div>
                  </article>
                  // </LinkBtn>
                );
              })}
            </section>
          ) : (
            <section aria-label="loading" className="section-wrapper">
              <div className="card-container">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
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
