// libray imports
import { useState, useEffect } from "react";

// data imports
import { getComicData } from "@/data/fetchData";

// component imports
import Card from "@/components/card/card";

// utlis imports
import { fetchErrorHandler } from "@/utils/fetchErrorHandler";

export default function SectionLayout({ title, url, children, maxData = 10 }) {
  const [comicData, setComicData] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getComicData({ url: url, maxData: maxData, signal })
      .then((data) => {
        setComicData(data);
      })
      .catch(fetchErrorHandler);

    return () => {
      controller.abort();
    };
  }, []);

  if (!comicData) {
    return (
      <section aria-label="loading" className="section-wrapper">
        <div className="loading-title">
          <div></div>
        </div>
        <div className="card-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {children}
      </section>
    );
  }
  return (
    comicData && (
      <section aria-label={title} className="section-wrapper">
        <h2 className="section_title" aria-label="section-title">
          {title}
        </h2>

        <div className="card-container">
          {comicData &&
            comicData.map((item, i) => {
              if (i < maxData) {
                return (
                  <Card
                    key={item.id}
                    comicId={item.id}
                    src={item.cover.src}
                    altName={item.cover.altName}
                    title={item.title}
                  />
                );
              }
            })}
        </div>
        {children}
      </section>
    )
  );
}
