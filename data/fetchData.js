export async function getComicData({ url, maxData = 35, signal }) {
  const response = await fetch(url, { signal: signal });
  const data = await response.json();

  return data.map((data, i) => {
    if (i < maxData) {
      return data;
    }
  });
}
