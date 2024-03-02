import React from "react";

function NewsCard({ news }) {
  const boilerBg =
    "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

  return (
    <div className="card card-compact w-[21.9rem]  m-4 shadow-2xl lg:first:w-[45rem]">
      <figure>
        <img src={news.urlToImage || boilerBg} alt="cover" />
      </figure>
      <div className="card-body relative">
        <div className="z-10 text-white flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-between opacity-60 text-[0.7rem]">
              <p className="mb-4">
                {new Date(news.publishedAt).toDateString()}
              </p>
              <p className="!grow-0">{news.source.name}</p>
            </div>
            <h2 className="card-title !mb-4">{news.title}</h2>
            <p className="mb-4">{news.description}</p>
          </div>
          <div className="card-actions !items-end mb-2">
            <a
              href={news.url}
              target="_blank"
              className="hover:underline hover:text-sky-200 !justify-end"
            >
              Read more...
            </a>
          </div>
        </div>
        <img
          src={news.urlToImage}
          alt="cover"
          className="absolute top-0 left-0 w-full h-full object-cover rotate-180 blur-2xl saturate-200 -scale-x-100 opacity-50"
        />
      </div>
    </div>
  );
}

export default NewsCard;
