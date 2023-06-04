import style from "./search.module.css";

export default function SearchInput({
  handleSearch,
  setComicResult,
  setSearch,
}) {
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
      <button
        name="search-comic-button"
        htmlFor="search-comic"
        onClick={handleSearch}
      >
        search
      </button>
    </div>
  );
}
