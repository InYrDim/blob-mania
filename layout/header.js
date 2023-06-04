// library imports
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

// components imports
import LinkBtn from "@/components/link_btn";
// import BlobManiaLogoText from "@/components/logomark/blobManiaText";
import BlobMania from "@/components/logomark/blobMania";

// data imports
import { navigations } from "@/data/mainNavigations";

// define icons variable

// styles imports
export default function MainHeader() {
  const path = useRouter().asPath;
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <header className="main_header" aria-label="main_header">
      <div className={`logomark_container`}>
        <Link href="/">
          <figure className="logomark">
            <BlobMania type="icon" />
            <BlobMania type="text" />
          </figure>
        </Link>
        <div
          className="hamburgerIcon"
          onClick={() => {
            setActive(active ? false : true);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
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
    </header>
  );
}
