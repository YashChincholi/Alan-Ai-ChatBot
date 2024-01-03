import React from "react";
import NewsCards from "./NewsCards";

const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Read the latest news on Technology",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CBC News,Associated Press, Google News, BBC News, IGN, Fox News, Business Insider,abc News...",
    text: "Give me the news from Associated Press",
  },
];

const NewsCard = ({ articles, activeArticle }) => {
  if (!articles.length) {
    return (
      <div
        id={articles.url}
        className="flex container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 justify-evenly items-center"
        style={{ width: "100%" }}
      >
        {infoCards.map((infoCard, k) => (
          <div key={k} className="my-6 mx-auto md:mx-3 w-full md:w-auto">
            <div
              className="flex flex-col items-center justify-between w-full p-10 h-[55vh] rounded-[20px] text-white"
              style={{ backgroundColor: infoCard.color }}
            >
              <p className="flex flex-row items-center justify-between text-lg">
                {infoCard.title}
              </p>
              {infoCard.info ? (
                <p className="flex flex-row items-center justify-between text-xl">
                  <strong>
                    {infoCard.title.split(" ")[2]}
                    <br />
                    {infoCard.info}
                  </strong>
                </p>
              ) : (
                ""
              )}
              <p className="text-xl">
                Try Saying :<br />
                <i> {infoCard.text}</i>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {articles.map((article, i) => (
        <div key={i} className="p-4 flex items-center justify-center">
          <div className="max-w-xs h-full bg-white rounded-lg overflow-hidden shadow-md">
            <NewsCards article={article} i={i} activeArticle={activeArticle} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
