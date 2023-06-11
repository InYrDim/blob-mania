// context imports
import {
  useCheckboxContext,
  useClearCheckboxContext,
} from "@/context/selectedChecboxProvider";

// pageComponents import
import { ContentFilter } from "./contentFilter";

// componentImport
import Button from "@/components/actionControl/button/Button";
import SearchInput from "@/components/forms/search/SearchInput";

// library import
import { useState } from "react";

export default function SearchSection({ setIsSearching, setCurrentPageIndex }) {
  const [isShowFilters, setIsShowFilters] = useState(false);

  const { checked, setChecked } = useCheckboxContext();
  const { setClearChecked } = useClearCheckboxContext();

  function handleSearch() {
    setIsSearching((prevVal) => !prevVal);
    setIsShowFilters(false);
    setCurrentPageIndex(1);
  }

  function CheckedNotice(name) {
    return <span className="checkedNotice">(!) {name}</span>;
  }

  function ContentFilterToggler({ variant }) {
    return (
      <Button
        name={isShowFilters ? "Collapse" : "Content Filter"}
        classes={"content_filter_toggler"}
        variant={variant}
        onClick={() => {
          setIsShowFilters((prevValue) => !prevValue);
        }}
      />
    );
  }

  return (
    <div className="searchFilter" aria-label="content_search_filter">
      <div className="searchbox-wrapper">
        <SearchInput onClick={handleSearch} />
        <ContentFilterToggler variant={`text_only`} />
      </div>

      {checked && CheckedNotice("Content is Filtered")}
      {isShowFilters && checked && (
        <Button
          name={"Clear Filter"}
          variant={["fullWidth", "outlined"]}
          onClick={() => {
            setChecked();
            setClearChecked();
            handleSearch();
          }}
        />
      )}
      <div className={`content-filter-wrapper ${isShowFilters ? "show" : ""}`}>
        <ContentFilter />
      </div>

      {isShowFilters && (
        <>
          <ContentFilterToggler variant={["fullWidth", "outlined"]} />
          <Button
            name={"Start Search"}
            classes={"content_filter_toggler"}
            variant={["fullWidth", "fill"]}
            onClick={handleSearch}
          />
        </>
      )}
    </div>
  );
}
