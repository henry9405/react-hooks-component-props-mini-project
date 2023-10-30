import React from "react";

function Article({ title, date, preview, minutesToRead }) {
  const displayReadingTime = (mins) => {
    const coffee = "☕️";
    const bento = "🍱";

    if (mins <= 30) {
      const coffeeCount = Math.ceil(mins / 5);
      return coffee.repeat(coffeeCount) + ` ${mins} min read`;
    } else {
      const bentoCount = Math.ceil(mins / 10);
      return bento.repeat(bentoCount) + ` ${mins} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{displayReadingTime(minutesToRead)}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
