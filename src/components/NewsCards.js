import { useState, useEffect, createRef } from "react";
import React from "react";
import classNames from "classnames";

const NewsCards = ({
  article: {
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
    source,
  },
  i,
  activeArticle,
}) => {
  const condition = activeArticle === i;
  const myClass = classNames(
    "max-w-xs h-full bg-yellow-200 rounded-lg overflow-hidden shadow-md",
    {
      "border-b-10 border-neon-blue": condition,
    }
  );
  const [elRefs, setElRefs] = useState([]);
  const scrolltoRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);
  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrolltoRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <div ref={elRefs[i]} className={`${myClass} flex flex-col h-full`}>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="block flex-grow"
      >
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src={urlToImage ? urlToImage : process.env.PUBLIC_URL + "/OIP.jpeg"}
            alt="news"
          />
        </div>
        <div className="p-6 flex flex-col justify-between flex-grow">
          <div className="text-gray-500 text-sm flex-grow">
            <h2 className="font-bold">
              {new Date(publishedAt).toDateString()}
            </h2>
            <p>{source.name}</p>
          </div>
          <h5 className="mt-2 font-semibold text-lg leading-tight truncate flex-grow">
            {title}
          </h5>
          <div className="mt-2 text-gray-500 flex-grow">
            <p>{description}</p>
          </div>
          <div className="flex justify-between items-center mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
            <h5 className="mt-2 text-gray-500">{i + 1}</h5>
          </div>
        </div>
      </a>
    </div>
  );
};

export default NewsCards;
