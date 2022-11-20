import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards";
import InfoCards from "./components/InfoCards";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// react helmet

const alanKey = `${process.env.REACT_APP_ALAN_KEY}/stage`;

function App() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsData(articles);
        }
      },
    });
  }, []);

  console.log(newsData);

  return (
    <>
      <div className="h-full flex flex-col items-center">
        <Navbar />
        {newsData.length === 0 ? (
          <InfoCards />
        ) : (
          <NewsCards newsData={newsData} />
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
