// library import
import { useState } from "react";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";

// styles import, same as chekcbox
import style from "../checkbox/checkbox.module.css";

const MULTIPLE_CHECKBOX_CONDITIONS = [
  { state: "idle", icon: BsCircle() },
  { state: "included", icon: BsCheckCircleFill() },
];

export default function Radio({ options, dataType = "" }) {
  const [selectedCondition, setSelectedCondition] = useState(0);

  if (typeof options[0] !== "string") {
    return options.map((options, i) => {
      const [name, value, emoji] = Object.values(options);
      const selectedIndex = selectedCondition === value ? 1 : 0;

      return (
        <div
          key={i}
          onClick={() => {
            setSelectedCondition((prev) => {
              if (prev !== value) return value;
            });
          }}
          data-type={dataType}
          data-value={value}
          data-checked_as={MULTIPLE_CHECKBOX_CONDITIONS[selectedIndex].state}
          className={`${style.item_checkbox}`}
        >
          {MULTIPLE_CHECKBOX_CONDITIONS[selectedIndex].icon}
          <span>
            {emoji ? emoji : ""} {name.split("_").join(" ")}
          </span>
        </div>
      );
    });
  }

  return (
    <>
      {options.map((option, i) => {
        const selectedIndex = selectedCondition === option ? 1 : 0;
        return (
          <div
            key={i}
            onClick={() => {
              setSelectedCondition((prev) => {
                if (prev !== option) return option;
              });
            }}
            data-type={dataType}
            data-value={option}
            data-checked_as={MULTIPLE_CHECKBOX_CONDITIONS[selectedIndex].state}
            className={`${style.item_checkbox}`}
          >
            {MULTIPLE_CHECKBOX_CONDITIONS[selectedIndex].icon}
            <span>{option.split("_").join(" ")}</span>
          </div>
        );
      })}
    </>
  );
}
