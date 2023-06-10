import LoadingCircleAnimation from "@/components/loading/circleLoading/circleAnimation";
import Button from "../button/Button";

import style from "./pagination.module.css";
export default function Pagination({
  isLoading = false,
  nextHandler,
  prevHandler,
  shouldRenderNext,
  shouldRenderPrev,
  pageIndex,
}) {
  if (isLoading) {
    return <LoadingCircleAnimation />;
  }
  return (
    <>
      <div
        className={`${style.pagination} ${
          isLoading ? "pagination-nav-loading" : ""
        }`}
      >
        {shouldRenderPrev && <Button name="Prev" onClick={prevHandler} />}
        <span>{pageIndex}</span>
        {shouldRenderNext && <Button name="Next" onClick={nextHandler} />}
      </div>
    </>
  );
  // if (!isLoading) return <>Loading Page</>;
}
