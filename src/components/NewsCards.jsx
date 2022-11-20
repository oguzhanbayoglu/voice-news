import React from "react";
import NewsCard from "./NewsCard";

function NewsCards({ newsData }) {
  return (
    <div className="flex flex-wrap justify-center pt-4">
      {newsData.map((news, i) => (
        <NewsCard news={news} key={i} />
      ))}
    </div>
  );
}

export default NewsCards;
