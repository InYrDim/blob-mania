// library imports
import Link from "next/link";
import { useRouter } from "next/router";

// components imports
import LinkBtn from "@/components/link_btn";
import BlobManiaLogoText from "@/components/logomark/blobManiaText";
import BlobManiaLogoIcon from "@/components/logomark/blobManiaIcon";

// data imports
import { navigations } from "@/data/mainNavigations";

// styles imports
export default function MainHeader() {
  const path = useRouter().asPath;

  return (
    <header className="main_header" aria-label="main_header">
      <div className={`logomark_container`}>
        <Link href="/">
          <figure className="logomark">
            <BlobManiaLogoIcon />
            <BlobManiaLogoText />
          </figure>
        </Link>
      </div>
      <nav className="main_header_nav">
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
