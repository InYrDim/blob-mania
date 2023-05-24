export async function getComicData({ url, maxData = 35 }) {
  const response = await fetch(url);
  const data = await response.json();

  return data.map((data, i) => {
    if (i < maxData) {
      return data;
    }
  });
}
