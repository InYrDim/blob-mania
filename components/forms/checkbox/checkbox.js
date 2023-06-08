import React, { useState } from "react";
import { BsSquare, BsCheckSquareFill, BsXSquareFill } from "react-icons/bs";
import style from "./checkbox.module.css";

const MULTIPLE_CHECKBOX_CONDITIONS = [
  { state: "idle", icon: BsSquare() },
  { state: "included", icon: BsCheckSquareFill() },
  { state: "excluded", icon: BsXSquareFill() },
];

export default function Checkbox({ dataType, options }) {
  const [selectedConditions, setSelectedConditions] = useState(
    options.map(() => 0)
  );

  const handleCheckboxClick = (index) => {
    setSelectedConditions((prevConditions) => {
      const newConditions = [...prevConditions];
      newConditions[index] = (newConditions[index] + 1) % 3;
      return newConditions;
    });
  };

  return (
    <>
      {options.map((option, index) => {
        const selectedCondition = selectedConditions[index];
        return (
          <div
            key={option}
            onClick={() => {
              handleCheckboxClick(index);
            }}
            data-type={dataType}
            data-value={option}
            data-checked_as={
              MULTIPLE_CHECKBOX_CONDITIONS[selectedCondition].state
            }
            className={`${style.item_checkbox}`}
            aria-label="item-checkbox"
          >
            {MULTIPLE_CHECKBOX_CONDITIONS[selectedCondition].icon}
            <span>{option.split("_").join(" ")}</span>
          </div>
        );
      })}
    </>
  );
}
