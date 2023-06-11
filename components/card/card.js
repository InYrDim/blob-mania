/* eslint-disable @next/next/no-img-element */
import style from "./card.module.css";
export default function Card({
  comicId = "",
  src,
  altName,
  title,
  onClick,
  children,
}) {
  return (
    <figure className={`${style.card}`} key={comicId} onClick={onClick}>
      <div>
        {children}
        <img src={src} alt={altName} loading="lazy" />
      </div>
      <figcaption className={`${style.caption}`}>{title}</figcaption>
    </figure>
  );
}
