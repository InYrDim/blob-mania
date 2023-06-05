import style from "./button.module.css";

export default function Button({ name, onClick, classes = [] }) {
  return (
    <button
      className={`${style.btn} ${[...classes].join(" ")}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
