// layouts import
import MainLayout from "@/layout/mainLayout";
import { useState } from "react";

// fonts definitions

export default function About() {
  const [name, setName] = useState(false);
  return (
    <>
      <MainLayout title={"About"}>
        <h1
          onClick={() => {
            switchNext();
          }}
        >
          About Page
        </h1>
        <p>{name}</p>
        <button
          onClick={() => {
            setName((prevVal) => !prevVal);
          }}
        >
          UpdateName
        </button>
        <p>Ntar, masih progggggress yak!</p>
        <p>About pagenya belakangan, yang penting bisa baca dlu yekan :V</p>
      </MainLayout>
    </>
  );
}
