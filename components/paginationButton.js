export default function PaginationButton({
  chapterData,
  comicID,
  type = "next",
}) {
  if (type === "next" && chapterData.pagination.hasNext) {
    return (
      <a
        aria-label="pagination-button"
        href={`/comic/${comicID}/read/${chapterData.pagination.next}`}
      >
        Next
      </a>
    );
  }

  if (type === "prev" && chapterData.pagination.hasPrev) {
    return (
      <a
        aria-label="pagination-button"
        href={`/comic/${comicID}/read/${chapterData.pagination.prev}`}
      >
        Prev
      </a>
    );
  }
}
