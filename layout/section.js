// libray imports
import { useState, useEffect } from "react";

// data imports
import { getComicData } from "@/data/fetchData";

// component imports
import Card from "@/components/card";

export default function SectionLayout({ title, url, children, maxData = 10 }) {
  const [comicData, setComicData] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getComicData({ url: url, maxData: maxData });

      setComicData(data);
    })();
  }, []);

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
                    name={item.title}
                    key={item.id}
                    comicId={item.id}
                    src={item.cover.src}
                    altName={item.cover.altName}
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
