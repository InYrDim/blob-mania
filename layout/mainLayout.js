// layout import
import Footer from "./footer";
import HeadLayout from "./headLayout";
import MainHeader from "./header";

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
