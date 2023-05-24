// libray imports
import Link from "next/link";

export default function LinkBtn({
  name,
  href,
  isFill = true,
  isBordered = false,
  isActive = false,
}) {
  return (
    <Link
      href={href}
      aria-label="navigation-links"
      data-isfill={isFill}
      data-isbordered={isBordered}
      data-active={isActive}
    >
      <span>{name}</span>
    </Link>
  );
}
