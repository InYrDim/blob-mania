// styles import

// data imports
import Button from "@/components/actionControl/button/Button";
import LinkButton from "@/components/actionControl/link/linkButton";
import Card from "@/components/card/card";
import LoadingCardAnimation from "@/components/loading/cardLoading/cardAnimation";
import useFetch from "@/hooks/useFetch";

// layouts import
import MainLayout from "@/layout/mainLayout";
import { useEffect, useState } from "react";

const HOME_DATA = [
  {
    title: "Top Rated",
    url: "https://bato-to.vercel.app/browse?lang=id&order=field_score&genres=manga,slice_of_life,shounen,|yaoi,|yuri,|smut,|harem,|ecchi,|gore,|adult",
  },
  {
    title: "Most Followed",
    url: "https://bato-to.vercel.app/browse?lang=id&order=field_follow&genres=slice_of_life,action,|yaoi,|yuri,|smut,|harem,|ecchi,|gore,|adult",
  },
  {
    title: "Newest",
    url: "https://bato-to.vercel.app/browse?lang=id&order=field_upload&genres=slice_of_life,action,|yaoi,|yuri,|smut,|harem,|ecchi,|gore,|adult",
  },
];
const A_MINUTE = 60000;
export default function Home() {
  const [fetchUrl, setFetchUrl] = useState(null);
  const { data, isLoading } = useFetch(fetchUrl);
  const comicData = data;

  const [selectedTab, setSelectedTab] = useState(0);

  function handleTimeOut() {
    setSelectedTab((prevVal) => (prevVal + 1) % HOME_DATA.length);
  }

  useEffect(() => {
    setFetchUrl(HOME_DATA[selectedTab].url);

    const timeout = setTimeout(handleTimeOut, A_MINUTE / 4);

    return () => {
      clearTimeout(timeout);
    };
  }, [selectedTab]);

  return (
    <>
      <MainLayout title={"Home"}>
        <div className="home-comic-container">
          <div className="home-comic-nav">
            {HOME_DATA.map((value, i) => {
              return (
                <HomeComicNavigation
                  key={i}
                  handleOnClick={() => {
                    setSelectedTab(i);
                  }}
                  name={value.title}
                  active={i === selectedTab}
                />
              );
            })}
          </div>
          {isLoading ? (
            <LoadingCardAnimation />
          ) : (
            <div className="home-comic-data-container">
              <h2 className="home-title">{HOME_DATA[selectedTab].title}</h2>
              <div className="home-comic-data">
                {comicData?.map((item, i) => {
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
                    />
                  );
                })}
                )
              </div>
            </div>
          )}
        </div>
      </MainLayout>
    </>
  );
}

function HomeComicNavigation({ active = false, handleOnClick, name }) {
  return (
    <div
      className={`wrapper ${active ? "active" : ""}`}
      onClick={() => {
        handleOnClick();
      }}
    >
      <div className="home-comic-nav-item ">
        <Button
          name={
            <>
              <span className="ellipseBall"></span>
              {name}
            </>
          }
          variant="text_only"
        />
      </div>
    </div>
  );
}
