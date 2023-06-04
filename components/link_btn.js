// libray imports
import Link from "next/link";

export default function LinkBtn({
  name,
  href,
  isFill = true,
  isBordered = false,
  isActive = false,
  blank = "",
  children,
  onClick,
}) {
  return (
    <Link
      href={href}
      key={href}
      aria-label="navigation-links"
      data-isfill={isFill}
      data-isbordered={isBordered}
      data-active={isActive}
      target={blank && "_blank"}
      onClick={onClick}
    >
      {name && <span>{name}</span>}
      {children}
    </Link>
  );
}
