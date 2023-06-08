/* eslint-disable @next/next/no-img-element */

export default function Card({ comicId = "", src, altName, title, onClick }) {
  return (
    // <figure data-id={comicId} aria-label="card-wrapper" onClick={onClick}>
    //   <div className="card-img-wrapper">
    //     <img
    //       src={src}
    //       alt={altName}
    //       width={300}
    //       height={400}
    //       loading="lazy"
    //       aria-label="test"
    //     />
    //   </div>
    //   <figcaption>{name}</figcaption>
    // </figure>

    <figure className="card" key={comicId} onClick={onClick}>
      <img src={src} alt={altName} loading="lazy" />
      <figcaption className="caption">{title}</figcaption>
    </figure>
  );
}
