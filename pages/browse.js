/* eslint-disable @next/next/no-img-element */

// layouts import
import MainLayout from "@/layout/mainLayout";

// library imports
import { useState, useEffect } from "react";

// components imports
import SearchInput from "@/components/forms/search/SearchInput";
import Button from "@/components/actionControl/button/";
import Card from "@/components/card/";

// PageComponents
import { ContentFilter } from "@/pageComponents/browse/contentFilter";
import { handleSearchQuery } from "@/pageComponents/browse/handleSearchQuery";

// utils imports
import { getSearchComicUrl } from "@/utils/getSearchComicUrl";
import useFetch from "@/hooks/useFetch";

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

  return (
    <>
      <MainLayout title={"Browse"}>
        <h1>Browse Page</h1>
        <section className="browse top_green_line">
          <div className="searchFilter" aria-label="content_search_filter">
            <div className="searchbox-wrapper">
              <SearchInput
                handleSearch={() => {
                  setIsSearching((prevVal) => !prevVal);
                  setShowFilter(false);
                  setCurrentPageIndex(1);
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
            {!isComicResultLoading && comicResult && (
              <div
                className="pagination"
                aria-label="browse-pagination-container"
              >
                {comicResult.length === 36 && (
                  <Button
                    name="Next"
                    onClick={() => {
                      setCurrentPageIndex((page) => {
                        return page + 1;
                      });
                    }}
                  />
                )}
                <span>{currentPageIndex}</span>

                {currentPageIndex !== 1 && (
                  <Button
                    name="Prev"
                    onClick={() => {
                      if (currentPageIndex >= 2) {
                        setCurrentPageIndex((page) => {
                          return page - 1;
                        });
                      }
                    }}
                  />
                )}
              </div>
            )}

            {comicResult && comicResult.length === 0 && <div>Not Found</div>}
          </div>
        </section>
      </MainLayout>
    </>
  );
}
