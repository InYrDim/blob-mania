// libray imports
import Link from "next/link";

export default function LinkButton({
  name,
  href,
  isFill = true,
  isBordered = false,
  isActive = false,
  blank = "",
  children,
}) {
  return (
    <Link
      href={href}
      key={href}
      aria-label="navigation-links"
      data-isfill={isFill}
      data-active={isActive}
      data-isbordered={isBordered}
      target={blank && "_blank"}
    >
      {name && <span>{name}</span>}
      {children}
    </Link>
  );
}
