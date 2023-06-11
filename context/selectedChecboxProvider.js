import { getNodeElements } from "@/utils/getNodeElements";
import { createContext, useState, useContext } from "react";

// OnCheck Listen
const NewCheckboxContext = createContext(false);
const NewSetterCheckboxContext = createContext(() => {});

// OnClear Listen
const NewClearCheckboxContext = createContext();
const NewSetterClearCheckboxContext = createContext();
export function useCheckboxContext() {
  return {
    checked: useContext(NewCheckboxContext),
    setChecked: useContext(NewSetterCheckboxContext),
  };
}
export function useClearCheckboxContext() {
  return {
    clearChecked: useContext(NewClearCheckboxContext),
    setClearChecked: useContext(NewSetterClearCheckboxContext),
  };
}

function getAttributeValue(nodeList) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from(nodeList, (el) => el.getAttribute("data-checked_as")).some(
          (value) => value !== "idle"
        )
      );
    }, 0);
  });
}
export default function CheckboxContextProvider({ children }) {
  const [selected, setSelected] = useState(false);
  const [clearChecked, setClearChecked] = useState(false);

  async function updateSelectedCheckboxContext() {
    const checkboxElements = getNodeElements("[data-checked_as]");
    const checked = await getAttributeValue(checkboxElements);

    setSelected(checked);
  }
  function updateClearSelectedCheckboxContext() {
    const checkboxElements = getNodeElements("[data-checked_as]");

    for (const element of checkboxElements) {
      element.setAttribute("data-checked_as", "idle");
    }

    setClearChecked((prev) => !prev);
  }

  return (
    <NewCheckboxContext.Provider value={selected}>
      <NewSetterCheckboxContext.Provider value={updateSelectedCheckboxContext}>
        {/*  */}

        <NewClearCheckboxContext.Provider value={clearChecked}>
          <NewSetterClearCheckboxContext.Provider
            value={updateClearSelectedCheckboxContext}
          >
            {children}
          </NewSetterClearCheckboxContext.Provider>
        </NewClearCheckboxContext.Provider>
        {/*  */}
      </NewSetterCheckboxContext.Provider>
    </NewCheckboxContext.Provider>
  );
}
