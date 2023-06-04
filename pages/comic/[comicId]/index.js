// styles import

// data imports
import { present } from "@/data/homeData";

// layouts import
import MainLayout from "@/layout/mainLayout";
import ComicDetail from "@/layout/comicDetail";

// fonts definitions

// library imports
import { useRouter } from "next/router";

export default function Home() {
  const routerPath = useRouter().asPath;
  const id = routerPath.split(/\//).pop();

  return (
    <>
      <MainLayout>
        <ComicDetail />
      </MainLayout>
    </>
  );
}
