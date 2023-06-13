import Script from "next/script";

export default function ClientDate() {
  return (
    <>
      <Script id="time">{`
        const date = new Date().getFullYear().toString()
        document.getElementById("copyDate").innerHTML = date;      
      `}</Script>

      <span id="copyDate"></span>
    </>
  );
}
