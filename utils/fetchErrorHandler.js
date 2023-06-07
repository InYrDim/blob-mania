export function fetchErrorHandler(error) {
  if (error instanceof DOMException && error.name == "AbortError") return;
  console.log(error.message);
}
