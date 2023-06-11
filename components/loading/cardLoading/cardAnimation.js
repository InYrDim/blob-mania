import style from "./cardLoading.module.css";

export default function LoadingCardAnimation({ cardCount = 12 }) {
  return (
    <div className={style["card-loading"]}>
      {Array.from({ length: cardCount }, (_, index) => (
        <span key={index}>
          <span
            // style={{
            //   animationDelay: `${index * cardCount * 10}ms`,
            // }}
            className={style["img-loading-animation-element"]}
          ></span>
          <span className={style["title-loading-animation-element"]}></span>
          <span className={style["title-loading-animation-element"]}></span>
        </span>
      ))}
    </div>
  );
}
