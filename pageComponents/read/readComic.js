// library import
import LinkBtn from "@/components/actionControl/link/linkButton";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

import Select from "react-select";
import AnchorButton from "@/components/actionControl/anchor/paginationButton";
import useScrollDirection from "@/hooks/usePageScroll";
import LoadingCircleAnimation from "@/components/loading/circleLoading/circleAnimation";

// define variables
const domain = "https://bato-to.vercel.app/read";

export default function ReadComic() {
  const router = useRouter();
  const curretPath = router.asPath;
  const routerReady = router.isReady;

  const comicID = curretPath.split("/")[2];
  const _chapterID = curretPath.split("/")[4];

  const [chapterData, setChapterData] = useState();

  useEffect(() => {
    if (routerReady) {
      async function getCurrentChapterData() {
        const response = await fetch(
          `${domain}/${comicID}?chapter=${_chapterID}`
        );
        const data = await response.json();

        setChapterData(data);
      }

      getCurrentChapterData();
    }
  }, [routerReady]);

  if (chapterData !== undefined) {
    const avaiableChapters = chapterData.info.avaiableChapter;
    const options = avaiableChapters
      .map((chapter) => {
        return { value: chapter.id, label: chapter.title };
      })
      .reverse();
    const chapterIndex = options.findIndex(
      (val) => val.value === chapterData.info.id
    );

    return (
      <div className="read-comic-container">
        <div aria-label="chapter-info">
          <Head>
            <title>BM | {chapterData.info.title}</title>
          </Head>
          <h1>{chapterData.title}</h1>
          <span>{chapterData.info.title}</span>
          <LinkBtn name={"back to detail.."} href={`/comic/${comicID}`} />
        </div>
        <div aria-label="pagination" data-pos="start">
          <span aria-label="chapter-select">Chapter List : </span>

          <Select
            className="chapters-select-container"
            classNamePrefix="chapter-select"
            isSearchable={false}
            isClearable={false}
            defaultValue={options[chapterIndex]}
            options={options}
            onChange={(e) => {
              window.location.href = `/comic/${comicID}/read/${e.value}`;
            }}
            styles={{
              option: (baseStyles, {}) => {
                return {
                  ...baseStyles,
                  fontSize: "var(--f-sm)",
                  backgroundColor: "white",
                  color: "rgba(var(--clr-secondary), 0.7)",

                  boxShadow: "none",
                  ":hover": {
                    color: "white !important",
                    backgroundColor: "rgba(var(--clr-primary), 1) !important",
                  },
                };
              },

              control: (baseStyles, { menuIsOpen }) => {
                return {
                  ...baseStyles,

                  border: "2px solid rgba(var(--clr-primary), 1) !important",
                  color: "rgba(var(--clr-primary))  !important",
                  boxShadow: !menuIsOpen
                    ? `0px 3px 0px rgba(var(--clr-primary), 1) ,
                    0px 7px 5px rgba(var(--clr-secondary), 0.3) `
                    : "",

                  marginBlockEnd: "var(--s-lg)",
                };
              },
              singleValue: (baseStyles, {}) => {
                return {
                  ...baseStyles,
                  color: "rgba(var(--clr-primary))  !important",
                };
              },
            }}
          />

          <div className="single-page-control">
            <AnchorButton
              pageType={chapterData.pagination.prev}
              comicId={comicID}
              name="prev"
              pageCondition={chapterData.pagination.hasPrev}
            />
            <AnchorButton
              pageType={chapterData.pagination.next}
              comicId={comicID}
              name="next"
              pageCondition={chapterData.pagination.hasNext}
            />
          </div>
        </div>

        <div aria-label="image-container">
          {
            <div aria-label="main-image-container" data-chapter={_chapterID}>
              {chapterData.imageUrl.map((url, i) => {
                return (
                  <img src={url} key={i} alt="page of chapter" loading="lazy" />
                );
              })}
            </div>
          }
        </div>

        <div className="readNavFooter">Thats it for this chapter!</div>

        <div aria-label="pagination" data-pos="end">
          <span aria-label="chapter-select">Chapter List : </span>

          <Select
            className="chapters-select-container"
            classNamePrefix="chapter-select"
            isSearchable={false}
            isClearable={false}
            defaultValue={options[chapterIndex]}
            options={options}
            onChange={(e) => {
              window.location.href = `/comic/${comicID}/read/${e.value}`;
            }}
            styles={{
              option: (baseStyles, {}) => {
                return {
                  ...baseStyles,
                  fontSize: "var(--f-sm)",
                  backgroundColor: "white",
                  color: "rgba(var(--clr-secondary), 0.7)",

                  boxShadow: "none",
                  ":hover": {
                    color: "white !important",
                    backgroundColor: "rgba(var(--clr-primary), 1) !important",
                  },
                };
              },

              control: (baseStyles, { menuIsOpen }) => {
                return {
                  ...baseStyles,

                  border: "2px solid rgba(var(--clr-primary), 1) !important",
                  color: "rgba(var(--clr-primary))  !important",
                  boxShadow: !menuIsOpen
                    ? `0px 3px 0px rgba(var(--clr-primary), 1) ,
                    0px 7px 5px rgba(var(--clr-secondary), 0.3) `
                    : "",

                  marginBlockEnd: "var(--s-lg)",
                };
              },
              singleValue: (baseStyles, {}) => {
                return {
                  ...baseStyles,
                  color: "rgba(var(--clr-primary))  !important",
                };
              },
            }}
          />

          <div className="single-page-control">
            <AnchorButton
              pageType={chapterData.pagination.prev}
              comicId={comicID}
              name="prev"
              pageCondition={chapterData.pagination.hasPrev}
            />
            <AnchorButton
              pageType={chapterData.pagination.next}
              comicId={comicID}
              name="next"
              pageCondition={chapterData.pagination.hasNext}
            />
          </div>

          <ArrowNavigation />
        </div>
      </div>
    );
  }

  return <LoadingCircleAnimation />;
}

function ArrowNavigation() {
  const { isScrollUp } = useScrollDirection();
  return (
    <>
      <a href="#" className={`button-to-top ${isScrollUp ? "show" : ""}`}>
        <BsFillArrowUpSquareFill />
      </a>
    </>
  );
}
