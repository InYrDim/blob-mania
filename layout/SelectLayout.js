export default function SelectLayout({
  children,
  title = "",
  layout = "main",
}) {
  return (
    <div
      className="checkbox-container"
      aria-label={`${title}_checkbox`}
      data-layout={layout}
    >
      <p className="checkbox-title">{title}</p>
      <div className="checkbox-items-container custom-colums">{children}</div>
    </div>
  );
}
