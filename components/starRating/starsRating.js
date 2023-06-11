import style from "./starRating.module.css";

function splitRating({ value, minValue, maxLength }) {
  const stars = [];
  let currentValue = value;

  for (let i = 0; i < maxLength; i++) {
    if (currentValue >= minValue) {
      stars.push(minValue);
      currentValue -= minValue;
    } else if (currentValue > 0) {
      stars.push(parseFloat(currentValue.toFixed(1)));
      currentValue = 0;
    } else {
      stars.push(0);
    }
  }
  return stars;
}
export default function StarsRating({ rate }) {
  const floatRate = parseFloat(rate);
  const splittedRatings = splitRating({
    maxLength: 5,
    minValue: 1,
    value: floatRate / 2,
  });
  const percentage = splittedRatings.map((floatVal) => {
    return `${floatVal * 100}%`;
  });

  return (
    <>
      <div className={style.rate_container}>
        <div>
          <div className={style.rate_wrapper}>
            {percentage.map((star, i) => {
              return (
                <span key={i}>
                  <span
                    style={{
                      width: star,
                    }}
                    className={style.rate_item}
                  ></span>
                </span>
              );
            })}
          </div>
          <span className={style.rate_title}>{rate}</span>
        </div>
      </div>
    </>
  );
}
