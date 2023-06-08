export default function AnchorButton({
  comicId,
  pageType,
  name,
  pageCondition,
}) {
  if (!pageCondition) return;
  return (
    <a
      aria-label="pagination-button"
      href={`/comic/${comicId}/read/${pageType}`}
    >
      {name}
    </a>
  );
}
export function PaginatsionButton({ chapterData, comicID, type = "next" }) {
  if (type === "next" && chapterData.pagination.hasNext) {
    return <AnchorButton id={comicID} pageType={chapterData.pagination.next} />;
  }

  if (type === "prev" && chapterData.pagination.hasPrev) {
    return (
      <AnchorButton id={comicID} pageType={chapterData.pagination.hasPrev} />
    );
  }
}
