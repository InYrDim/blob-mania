import { createContext, useState, useContext } from "react";

const NewCheckboxContext = createContext("");
const NewSetterCheckboxContext = createContext(() => {});

export function useCheckboxContext() {
  return {
    value: useContext(NewCheckboxContext),
    setter: useContext(NewSetterCheckboxContext),
  };
}

export default function CheckboxContextProvider({ children }) {
  const [selected, setSelected] = useState(false);

  function updateSelectedCheckboxContext() {}

  return (
    <NewCheckboxContext.Provider value={selected}>
      <NewSetterCheckboxContext.Provider value={updateSelectedCheckboxContext}>
        {children}
      </NewSetterCheckboxContext.Provider>
    </NewCheckboxContext.Provider>
  );
}
