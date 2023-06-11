import style from "./button.module.css";
import { resolveVariants } from "@/utils/resolveVariants";
export default function Button({
  name,
  onClick,
  classes = "",
  variant = "fill",
}) {
  const selectedVariant = resolveVariants({ style, variant });
  return (
    <button
      className={`${style.btn} ${selectedVariant} ${classes}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
