export function getBoxDataValue({ dataType, checked = "included" }) {
  if (typeof dataType !== "string") return [];

  return [
    ...document.querySelectorAll(
      `[data-type="${dataType}"][data-checked_as=${checked}]`
    ),
  ].map((genre) => genre?.getAttribute("data-value"));
}
