import style from "./circleLoading.module.css";

export default function LoadingCircleAnimation({ circleCount = 5 }) {
  return (
    <div className={style["circle-loading"]}>
      {Array.from({ length: circleCount }, (_, index) => (
        <span
          key={index}
          style={{
            animationDelay: `${index * circleCount * 23}ms`,
            animationDuration: `${circleCount * 23}0ms`,
          }}
          className="loading-animation-element"
        ></span>
      ))}
    </div>
  );
}
