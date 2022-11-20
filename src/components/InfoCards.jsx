import React from "react";

function InfoCards() {
  return (
    <div className="flex flex-wrap gap-8 text-white  p-4 pt-8 h-full items-center">
      <div className="w-[21.9rem] h-[21.9rem] card  border-gray-600 border-solid border-[1px] p-8 flex flex-col justify-between">
        <h2 className="card-title text-3xl">Latest News</h2>
        <div>
          <p className="opacity-50 text-sm mb-1">Try saying:</p>
          <p>Give me the latest news</p>
        </div>
      </div>
      <div className="w-[21.9rem] h-[21.9rem] card  border-gray-600 border-solid border-[1px] p-8 flex flex-col justify-between">
        <h2 className="card-title text-3xl">News by Categories</h2>
        <div>
          <p className="opacity-50 text-sm mb-1">Categories:</p>
          <p>
            Business, Entertainment, General, Health, Science, Sports,
            Technology
          </p>
        </div>
        <div>
          <p className="opacity-50 text-sm mb-1">Try saying:</p>
          <p>Give me the latest Technology news</p>
        </div>
      </div>
      <div className="w-[21.9rem] h-[21.9rem] card  border-gray-600 border-solid border-[1px] p-8 flex flex-col justify-between">
        <h2 className="card-title text-3xl">News by Terms</h2>
        <div>
          <p className="opacity-50 text-sm mb-1">Terms:</p>
          <p>Bitcoin, PlayStation 5, Smartphones, Donald Trump...</p>
        </div>
        <div>
          <p className="opacity-50 text-sm mb-1">Try saying:</p>
          <p>What's up with PlayStation 5</p>
        </div>
      </div>
      <div className="w-[21.9rem] h-[21.9rem] card  border-gray-600 border-solid border-[1px] p-8 flex flex-col justify-between">
        <h2 className="card-title text-3xl">News by Sources</h2>
        <div>
          <p className="opacity-50 text-sm mb-1">Sources:</p>
          <p>CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...</p>
        </div>
        <div>
          <p className="opacity-50 text-sm mb-1">Try saying:</p>
          <p>Give me the news from CNN</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
