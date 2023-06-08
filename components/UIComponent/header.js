// library imports
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext } from "react";

// components imports
import LinkBtn from "@/components/link_btn";
// import BlobManiaLogoText from "@/components/logomark/blobManiaText";
import BlobMania from "@/components/logomark/blobMania";

// data imports
import { navigations } from "@/data/mainNavigations";
import HamburgerButton from "../hamburger/";

// define icons variable

// styles imports
export default function MainHeader() {
  const path = useRouter().asPath;
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
              setActive(active ? false : true);
            }}
          />
        </div>

        <nav className={`main_header_nav ${active ? "active" : ""}`}>
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
      </div>
    </header>
  );
}
