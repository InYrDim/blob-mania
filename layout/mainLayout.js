// layout import
import MainHeader from "./header/header";
import HeadLayout from "./head_layout";
import SectionLayout from "./section";
// library imports
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
export default function MainLayout({ children, title }) {
  return (
    <>
      <main className={`${nunito.className}`} id="main-container">
        <HeadLayout title={title} />
        <MainHeader />
        <div id="content-wrapper">{children}</div>
      </main>
    </>
  );
}
