// styles import

// data imports
import { present } from "@/data/homeData";

// layouts import
import MainLayout from "@/layout/mainLayout";
import ComicDetail from "@/pageComponents/comic/comicDetail";

// fonts definitions

// library imports
import { useRouter } from "next/router";

export default function Comic() {
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
