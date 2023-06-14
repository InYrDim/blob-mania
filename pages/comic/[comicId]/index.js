// styles import

// data imports
import { present } from "@/data/homeData";

// layouts import
import MainLayout from "@/layout/mainLayout";
import ComicDetail from "@/pageComponents/comic/comicDetail";

// fonts definitions

// library imports

export default function Comic() {
  return (
    <>
      <MainLayout>
        <ComicDetail />
      </MainLayout>
    </>
  );
}
