import s from "./button.module.css";
export default function Button({ name, onClick }) {
  return (
    <button className={`${s.btn}`} onClick={onClick}>
      {name}
    </button>
  );
}
