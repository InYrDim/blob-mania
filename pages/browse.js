/* eslint-disable @next/next/no-img-element */

// layouts import
import MainLayout from "@/layout/mainLayout";

// library imports
import { useState, useEffect } from "react";

// components imports
import SearchInput from "@/components/forms/search/SearchInput";
import Button from "@/components/actionControl/button/";
import Card from "@/components/card/";
import Pagination from "@/components/actionControl/pagination/";

// PageComponents
import { ContentFilter } from "@/pageComponents/browse/contentFilter";
import { handleSearchQuery } from "@/pageComponents/browse/handleSearchQuery";

// utils imports
import { getSearchComicUrl } from "@/utils/getSearchComicUrl";
import useFetch from "@/hooks/useFetch";

// context imports
import SelectedCheckboxContextProvider from "@/context/selectedChecboxProvider";
export default function Browse() {
  // const [comicResult, setComicResult] = useState(undefined);
  const [isSearching, setIsSearching] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [showFilter, setShowFilter] = useState(false);

  const [fetchUrl, setFetchUrl] = useState(null);
  const { data, isLoading, error } = useFetch(fetchUrl);

  const comicResult = data;
  const isComicResultLoading = isLoading;

  useEffect(() => {
    const queryParams = handleSearchQuery({ pageIndex: currentPageIndex });
    const url = getSearchComicUrl(queryParams);
    setFetchUrl(url);
  }, [isSearching, currentPageIndex]);

  function ContentFilterToggler({ variant }) {
    return (
      <Button
        name={showFilter ? "Collapse" : "Content Filter"}
        classes={"content_filter_toggler test"}
        variant={variant}
        onClick={() => {
          setShowFilter((prevValue) => !prevValue);
        }}
      />
    );
  }

  function handleSearch() {
    setIsSearching((prevVal) => !prevVal);
    setShowFilter(false);
    setCurrentPageIndex(1);
  }
  return (
    <>
      <SelectedCheckboxContextProvider>
        <MainLayout title={"Browse"}>
          <h1>Browse Page</h1>
          <section className="browse top_green_line">
            <div className="searchFilter" aria-label="content_search_filter">
              <div className="searchbox-wrapper">
                <SearchInput onClick={handleSearch} />
                <ContentFilterToggler variant="text_only" />
              </div>
              <>
                <div
                  className={`content-filter-wrapper ${
                    showFilter ? "show" : ""
                  }`}
                >
                  <ContentFilter />
                </div>
                {showFilter && <ContentFilterToggler variant="outlined" />}
              </>
            </div>

            {isComicResultLoading && (
              <section aria-label="loading" className="section-wrapper">
                <div className="card-container">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </section>
            )}

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
                        // manual new tab
                        window.open(`/comic/${item.id}`);
                      }}
                    />
                  );
                })}
              </section>
            )}

            <div className="center">
              {
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
              }

              {comicResult && comicResult.length === 0 && <div>Not Found</div>}
            </div>
          </section>
        </MainLayout>
      </SelectedCheckboxContextProvider>
    </>
  );
}
