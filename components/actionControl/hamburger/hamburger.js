export default function HamburgerButton({ onClick }) {
  return (
    <div className="hamburgerIcon" onClick={onClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
