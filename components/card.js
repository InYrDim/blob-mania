import Script from "next/script";

export default function Card({ comicId = "", src, altName, name, onClick }) {
  return (
    <figure data-id={comicId} aria-label="card-wrapper" onClick={onClick}>
      <div className="card-img-wrapper">
        <img src={src} alt={altName} width={300} height={400} />
      </div>
      <figcaption>{name}</figcaption>
    </figure>
  );
}
