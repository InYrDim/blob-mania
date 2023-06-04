// libray imports
import { useState, useEffect } from "react";

// data imports
import { getComicData } from "@/data/fetchData";

// component imports
import Card from "@/components/card";
import LinkBtn from "@/components/link_btn";

export default function SectionLayout({ title, url, children, maxData = 10 }) {
  const [comicData, setComicData] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getComicData({ url: url, maxData: maxData });

      setComicData(data);
    })();
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
                  <LinkBtn
                    key={item.id}
                    href={`/comic/${item.id}`}
                    blank={true}
                  >
                    <Card
                      name={item.title}
                      comicId={item.id}
                      src={item.cover.src}
                      altName={item.cover.altName}
                    />
                  </LinkBtn>
                );
              }
            })}
        </div>
        {children}
      </section>
    )
  );
}
