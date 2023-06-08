import style from "./button.module.css";

export default function Button({
  name,
  onClick,
  classes = [],
  variant = "fill",
}) {
  return (
    <button
      className={`${style.btn} ${style[variant]} ${classes}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
