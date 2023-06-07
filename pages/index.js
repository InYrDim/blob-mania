// styles import

// data imports
import { homeData } from "@/data/homeData";

// layouts import
import SectionLayout from "@/components/UIComponent/section";
import MainLayout from "@/layout/mainLayout";

export default function Home() {
  return (
    <>
      <MainLayout title={"Home"}>
        <div className="content">
          {homeData.map((category) => {
            return (
              <SectionLayout
                key={category.title}
                title={category.title}
                url={category.url}
              />
            );
          })}
        </div>
      </MainLayout>
    </>
  );
}
