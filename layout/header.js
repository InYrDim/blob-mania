// library imports
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext } from "react";

// components imports
import LinkBtn from "@/components/actionControl/link/linkButton";
// import BlobManiaLogoText from "@/components/logomark/blobManiaText";
import BlobMania from "@/components/logomark/blobMania";

// data imports
import HamburgerButton from "@/components/actionControl/hamburger/";

// define icons variable

// styles imports
export default function MainHeader() {
  const [active, setActive] = useState(false);

  return (
    <header className="main_header" aria-label="main_header">
      <div className="main-header-wrapper">
        <div className={`logomark_container`}>
          <Link href="/">
            <figure className="logomark">
              <BlobMania type="icon" />
              <BlobMania type="text" />
            </figure>
          </Link>
          <HamburgerButton
            onClick={() => {
              setActive((prevVal) => !prevVal);
            }}
          />
        </div>

        <MainNavigation active={active} />
      </div>
    </header>
  );
}

function MainNavigation({ active = false }) {
  const path = useRouter().asPath;
  const navigations = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Browse",
      path: "/browse",
    },
  ];

  return (
    <nav className={`main_header_nav`} data-is-active={active}>
      {navigations.map((nav) => {
        return (
          <LinkBtn
            key={nav.name}
            name={nav.name}
            href={nav.path}
            isActive={path === nav.path}
          />
        );
      })}
    </nav>
  );
}
