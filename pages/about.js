// styles import

// data imports
import { present } from "@/data/homeShow";

// layouts import
import HeadLayout from "@/layout/head_layout";
import MainHeader from "@/layout/header/header";
import SectionLayout from "@/layout/section";
import MainLayout from "@/layout/mainLayout";

// fonts definitions
const url =
  "https://bato-to.vercel.app/browse?order=field_score&genres=manga,slice_of_life,shounen,|yaoi,|yuri,|smut,|harem,|ecchi,|gore,|adult";

export default function Home() {
  return (
    <>
      <MainLayout title={"Home"}>
        <h1>About Page</h1>
      </MainLayout>
    </>
  );
}
