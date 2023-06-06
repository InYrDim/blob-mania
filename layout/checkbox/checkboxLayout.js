export default function CheckboxLayout({ children, title = "", others = {} }) {
  return (
    <div
      className="checkbox-container "
      aria-label={`${title}_checkbox`}
      {...others}
    >
      <p className="checkbox-title">{title}</p>
      <div className="checkbox-items-container custom-colums">{children}</div>
    </div>
  );
}
