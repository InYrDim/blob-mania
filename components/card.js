import Image from "next/image";

export default function Card({ comicId = "", src, altName, name }) {
  return (
    <figure data-id={comicId} aria-label="card-wrapper">
      <div className="card-img-wrapper">
        <img src={src} alt={altName} width={300} height={400} />
      </div>
      <figcaption>{name}</figcaption>
    </figure>
  );
}
