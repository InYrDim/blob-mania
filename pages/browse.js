/* eslint-disable @next/next/no-img-element */
// layouts import
import MainLayout from "@/layout/mainLayout";

// library imports
import { useState, useEffect } from "react";

// components imports
import Card from "@/components/card/";
import Pagination from "@/components/actionControl/pagination/";
import LoadingCardAnimation from "@/components/loading/cardLoading/cardAnimation";
import StarsRating from "@/components/starRating/";

// PageComponents
import { handleSearchQuery } from "@/pageComponents/browse/handleSearchQuery";
import SearchSection from "@/pageComponents/browse/searchsection";

// utils imports
import { getSearchComicUrl } from "@/utils/getSearchComicUrl";
import useFetch from "@/hooks/useFetch";

// context imports
import SelectedCheckboxContextProvider from "@/context/selectedChecboxProvider";

export default function Browse() {
  const [isSearching, setIsSearching] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const [fetchUrl, setFetchUrl] = useState(null);
  const { data, isLoading } = useFetch(fetchUrl);

  const comicResult = data;
  const isComicResultLoading = isLoading;

  useEffect(() => {
    const queryParams = handleSearchQuery({ pageIndex: currentPageIndex });
    const url = getSearchComicUrl(queryParams);
    setFetchUrl(url);
  }, [isSearching, currentPageIndex]);

  return (
    <>
      <MainLayout title={"Browse"}>
        <section className="browse top_green_line">
          {/* SearchSection */}{" "}
          <SelectedCheckboxContextProvider>
            <SearchSection
              setCurrentPageIndex={setCurrentPageIndex}
              setIsSearching={setIsSearching}
            />
          </SelectedCheckboxContextProvider>
          {isComicResultLoading && <LoadingCardAnimation />}
          {!isComicResultLoading && comicResult && (
            <section
              className="search-card-container "
              aria-label="search-card-container"
            >
              {comicResult.map((item, i) => {
                return (
                  <Card
                    key={i}
                    title={item.title}
                    comicId={item.id}
                    altName={item.cover.altName}
                    src={item.cover.src}
                    onClick={() => {
                      window.open(`/comic/${item.id}`);
                    }}
                  >
                    <StarsRating rate={item.rating} />
                  </Card>
                );
              })}
            </section>
          )}
          <div className="center">
            {comicResult && comicResult.length !== 0 && (
              <Pagination
                pageIndex={currentPageIndex}
                isLoading={isComicResultLoading}
                shouldRenderNext={comicResult && comicResult.length === 36}
                shouldRenderPrev={comicResult && currentPageIndex !== 1}
                nextHandler={() => {
                  setCurrentPageIndex((page) => {
                    return page + 1;
                  });
                }}
                prevHandler={() => {
                  if (currentPageIndex >= 2) {
                    setCurrentPageIndex((page) => {
                      return page - 1;
                    });
                  }
                }}
              />
            )}

            {comicResult && comicResult.length === 0 && <div>Not Found</div>}
          </div>
        </section>
      </MainLayout>
    </>
  );
}

// rumus => minValue 1? maxValue 5, minValue 2 ? maxValue 10.
// multiplier * 2
