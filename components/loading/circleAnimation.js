import style from "./circleLoading.module.css";

export default function LoadingCircleAnimation({
  circleCount = 5,
  duration = 12,
  delay = 120,
}) {
  return (
    <div className={style["circle-loading"]}>
      {Array.from({ length: circleCount }, (_, index) => (
        <span
          key={index}
          style={{
            animationDelay: `${index * delay}ms`,
            animationDuration: `${duration}00ms`,
          }}
          className="loading-animation-element"
        ></span>
      ))}
    </div>
  );
}
