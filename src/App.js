import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCard from "./components/NewsCard";
import wordsToNumbers from "words-to-numbers";

const alanKey =
  "b08dd64ee27c15c5c2b0924ccb2a7fe82e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticle, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (article) {
            window.open(article.url, "_blank");
          }
        }
      },
    });
  }, []);
  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <img
          className="h-40 w-4/12 object-cover rounded-md mt-8"
          src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64f5aad0cbdbf0b7d248f4aa_alan%20ai_1.webp"
          alt="alan logo"
        />
      </div>
      <NewsCard articles={newsArticle} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
