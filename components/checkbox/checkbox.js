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
  dataValue,
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
        <div
          onClick={() => handleSingleCheckboxChange(dataValue)}
          data-type={dataType}
          data-value={dataValue}
          data-ischecked={selectedOption === dataValue ? "included" : "idle"}
          className={`${style.item_checkbox}`}
          aria-label="item-checkbox"
        >
          {selectedOption === dataValue
            ? AiFillCheckSquare()
            : AiOutlineBorder()}
          <span>{name}</span>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        onClick={handleClickChange}
        data-type={dataType}
        data-ischecked={MULTIPLE_CHECKBOX_CONDITIONS[currentStateIndex].state}
        data-value={dataValue}
        className={`${style.item_checkbox}`}
        aria-label="item-checkbox"
      >
        {MULTIPLE_CHECKBOX_CONDITIONS[currentStateIndex].icon}
        <span>{name}</span>
      </div>
    </>
  );
}
