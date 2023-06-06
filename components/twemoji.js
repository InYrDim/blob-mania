import twemoji from "twemoji";
export default function SetCountryEmoji({ countryCode }) {
  const emojiCode = countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
  const emoji = twemoji.parse(emojiCode);

  return <span dangerouslySetInnerHTML={{ __html: emoji }} />;
}
