import style from "./search.module.css";

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
      <button
        name="search"
        onClick={handleSearch}
        aria-label="search_action_button"
      >
        search
      </button>
    </div>
  );
}
