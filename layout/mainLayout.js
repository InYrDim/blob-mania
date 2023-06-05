// layout import
import Footer from "./footer";
import MainHeader from "./header";
import HeadLayout from "./headLayout";

// library imports
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
export default function MainLayout({ children, title }) {
  return (
    <>
      <div className={`${nunito.className}`} id="main-container">
        <HeadLayout title={title} />
        <MainHeader />
        <main id="content-wrapper">{children}</main>
        <Footer />
      </div>
    </>
  );
}