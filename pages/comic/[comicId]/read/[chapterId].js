// styles import

// layouts import
import MainLayout from "@/layout/mainLayout";
import ReadComic from "@/pageComponents/read/readComic";

// library imports
import { useRouter } from "next/router";

function SetReadedDataToLocalStorage({ localKey, data }) {
  const storedData = localStorage.getItem(localKey) || "[]";
  let dataArray = JSON.parse(storedData);
  dataArray = dataArray.filter((item) => item.comicId !== data.comicId);
  dataArray.push(data);
  localStorage.setItem(localKey, JSON.stringify(dataArray));
}

export default function Home() {
  const router = useRouter();
  const path = router.asPath;
  const id = path.split(/\//).pop();

  const tempPath = path.split("/");

  router.isReady &&
    SetReadedDataToLocalStorage({
      localKey: "latestReading",
      data: {
        comicId: tempPath[2],
        chapterId: tempPath[4],
      },
    });

  return (
    <>
      <MainLayout title={id}>
        <ReadComic />
      </MainLayout>
    </>
  );
}
