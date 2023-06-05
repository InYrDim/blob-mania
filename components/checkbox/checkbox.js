// library import
import { useState, useEffect } from "react";
import {
  AiOutlineBorder,
  AiFillCheckSquare,
  AiFillMinusSquare,
} from "react-icons/ai";

// style import
import style from "./checkbox.module.css";

const MULTIPLE_CHECKBOX_CONDITIONS = [
  { state: "idle", icon: AiOutlineBorder() },
  { state: "included", icon: AiFillCheckSquare() },
  { state: "excluded", icon: AiFillMinusSquare() },
];

export default function Checkbox({
  name,
  dataType,
  onlySelectOne = false,
  options = [],
}) {
  const [currentStateIndex, setCurrentStateIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("idle");

  function handleClickChange() {
    setCurrentStateIndex(
      (prevStateIndex) =>
        (prevStateIndex + 1) % MULTIPLE_CHECKBOX_CONDITIONS.length
    );
  }
  function handleSingleCheckboxChange(option) {
    if (selectedOption === option) {
      setSelectedOption("");
      return;
    }
    setSelectedOption(option);
  }

  if (onlySelectOne) {
    return (
      <>
        {options.map((option) => {
          return (
            <div
              key={option.data}
              onClick={() => handleSingleCheckboxChange(option.data)}
              data-type={dataType}
              data-value={option.data}
              data-ischecked={
                selectedOption === option.data ? "included" : "idle"
              }
              className={`${style.item_checkbox}`}
              aria-label="item-checkbox"
            >
              {selectedOption === option.data
                ? AiFillCheckSquare()
                : AiOutlineBorder()}
              <span>{option.name}</span>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <>
      <div
        onClick={handleClickChange}
        data-type={dataType}
        data-value={MULTIPLE_CHECKBOX_CONDITIONS[currentStateIndex].state}
        className={`${style.item_checkbox}`}
        aria-label="item-checkbox"
      >
        {MULTIPLE_CHECKBOX_CONDITIONS[currentStateIndex].icon}
        <span>{name}</span>
      </div>
    </>
  );
}
