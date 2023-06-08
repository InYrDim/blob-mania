// libray imports
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";

// compontents imports
import LinkBtn from "@/components/actionControl/link/linkButton";

const domain = "https://bato-to.vercel.app/comic/";

export default function ComicDetail() {
  const [data, setData] = useState("");
  const [localReadedData, setLocalReadedData] = useState([]);
  const [latestReadedChapter, setLatestReadedChapter] = useState([]);

  const [firstRender, setFirstRender] = useState(true);

  const routerPath = useRouter().asPath;
  const routerReady = useRouter().isReady;
  const comicId = routerPath.split(/\//).pop();

  function chapterSugested(index) {
    return (
      data !== "" &&
      data.chapters[index !== undefined ? index : data.chapters.length - 1]
    );
  }

  useEffect(() => {
    function getRecentlyReadedChapter(id) {
      const localData = JSON.parse(localStorage.getItem("latestReading")) || [];
      const currentChapter = localData.find((data) => data.comicId === id);

      return currentChapter;
    }

    function getChapterDetails(chapters, chapterId) {
      return chapters.find((chapter) => chapter.id === chapterId);
    }

    function storageEventHandler(e) {
      if (e.key === "latestReading") {
        if (routerReady) {
          const recentlyReadedChapter = getRecentlyReadedChapter(comicId);

          setLocalReadedData(recentlyReadedChapter);
        }
      }
    }

    if (firstRender) {
      if (routerReady) {
        const recentlyReadedChapter = getRecentlyReadedChapter(comicId);

        setLocalReadedData(recentlyReadedChapter);
        setFirstRender(false);
      }
    }

    if (data !== "") {
      if (localReadedData) {
        const chapterDetail = getChapterDetails(
          data.chapters,
          localReadedData.chapterId
        );

        if (chapterDetail !== undefined) {
          setLatestReadedChapter(chapterDetail);
        }
      }
    }

    window.addEventListener("storage", storageEventHandler);

    // return window.removeEventListener("storage", storageEventHandler);
  }, [comicId, localReadedData, data]);

  useEffect(() => {
    if (routerReady && data == "") {
      (async () => {
        const response = await fetch(`${domain}${comicId}`);
        const data = await response.json();

        setData(data);
      })();
    }
  }, [routerReady]);

  return data !== "" ? (
    <div className="comic-detail-container">
      <div className="comic-detail-props">
        <Head>
          <title>Blob : {data.title}</title>
        </Head>
        <h2 aria-label="comic-title">{data.title}</h2>
        <div aria-label="other-title">
          {data.otherTitle
            .map((other, i) => {
              return <span key={i}>{other}</span>;
            })
            .reduce((accu, elem) => {
              return accu === null ? [elem] : [...accu, ",", elem];
            }, null)}
        </div>

        <div aria-label="genres">
          {data.genres
            .map((genre) => {
              return <span key={genre}> {genre} </span>;
            })
            .reduce((accu, elem) => {
              return accu === null ? [elem] : [...accu, ",", elem];
            }, null)}
        </div>

        <p aria-label="description">{data.description}</p>

        <span aria-label="status">
          Status :{" "}
          <span>{data.status.publication ? data.status.publication : "-"}</span>
        </span>

        <div aria-label="comic-languages">
          <span aria-label="original-language">
            {data.language.orignalLanguge}
          </span>
          <span aria-label="translated-language">
            {data.language.translatedLanguge}
          </span>
        </div>
        {data.chapters.length > 0 ? (
          <div aria-label="suggested-chapter">
            <span>Start reading</span>
            <div>
              <div aria-label="first-chapter">
                <span>First Chapter</span>

                <LinkBtn
                  href={`/comic/${comicId}/read/${chapterSugested(0).id}`}
                  name={chapterSugested(0).name}
                  blank={true}
                />
              </div>
              <div aria-label="newest-chapter">
                <span>Newest Chapter</span>
                <LinkBtn
                  href={`/comic/${comicId}/read/${chapterSugested().id}`}
                  name={chapterSugested().name}
                  blank={true}
                />
              </div>
              {latestReadedChapter.length !== 0 && (
                <div aria-label="recently-chapter">
                  <span>Recently Chapter You Open</span>
                  <LinkBtn
                    href={`/comic/${comicId}/read/${latestReadedChapter.id}`}
                    name={latestReadedChapter.name}
                    blank={true}
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div aria-label="suggested-chapter">No Chapters</div>
        )}
      </div>

      <div className="comic-detail-cover">
        <img src={data.cover.src} alt={data.cover.alt} />
      </div>

      <div className="chapter-container">
        <h3>Chapter List</h3>
        <div className="chapter-list-wrapper">
          <div aria-label="chapter_list" id="chapter_list">
            {data.chapters.length > 0 ? (
              data.chapters
                .map((chapter) => {
                  return (
                    <LinkBtn
                      key={chapter.id}
                      href={`/comic/${comicId}/read/${chapter.id}`}
                      name={chapter.name}
                      blank={true}
                    />
                  );
                })
                .reverse()
            ) : (
              <a>No Chapters data or deleted</a>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        padding: "5rem",
      }}
    >
      LoadingState
    </div>
  );
}
