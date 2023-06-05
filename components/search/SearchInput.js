import style from "./search.module.css";
import Button from "../button/Button";

export default function SearchInput({ handleSearch }) {
  return (
    <div className={style.search_comic_input_container}>
      <input
        type="text"
        placeholder="search"
        id="search-comic"
        className={style.search_comic_input}
        aria-label="search-comic-input"
        name="search-comic"
      />
      <Button name="search" onClick={handleSearch} />
    </div>
  );
}
