/* eslint-disable @next/next/no-img-element */

// styles import

// data imports
import { getComicData } from "@/data/fetchData";

// layouts import
import MainLayout from "@/layout/mainLayout";

// library imports
import { useState, useEffect } from "react";

// components imports
import SearchInput from "@/components/search";
import Button from "@/components/button/Button";

export default function Browse() {
  const [comicResult, setComicResult] = useState();
  const [clear, setClear] = useState(false);
  const [page, setPage] = useState(1);

  function handleSearch() {
    const word = document.getElementById("search-comic");
    const wordValue = word.value.toString();

    setComicResult(undefined);

    async function getSearchComic(callback) {
      const response = await fetch(
        `https://bato-to.vercel.app/browse?search=${wordValue}&lang=id&genres=|yaoi,|yuri,|smut,|harem,|ecchi,|gore,|adult`
      );
      const data = await response.json();
      callback(data);
    }

    if (wordValue !== "") {
      getSearchComic(setComicResult);
    }
  }

  useEffect(() => {
    async function getSearchComic(callback) {
      const response = await fetch(
        `https://bato-to.vercel.app/browse?page=${page}&lang=id&genres=|yaoi,|yuri,|smut,|harem,|ecchi,|gore,|adult,|hentai`
      );
      const data = await response.json();
      callback(data);
    }
    getSearchComic(setComicResult);
  }, [page]);

  return (
    <>
      <MainLayout title={"Browse"}>
        <h1>Browse Page</h1>
        <section className="browse top_green_line">
          <h2>Search</h2>
          <SearchInput
            handleSearch={handleSearch}
            setComicResult={setComicResult}
            setSearch={setClear}
          />

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
                  setPage(page + 1);
                  setComicResult(undefined);
                }}
              />
              <span>{page}</span>
              <Button
                name="prev"
                onClick={() => {
                  if (page > 1) {
                    setPage(page - 1);
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
