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
    "container mx-auto bg-white rounded-xl shadow-md overflow-hidden m-5",
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
    <div ref={elRefs[i]} className={myClass}>
      <a href="/" className="block">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src={urlToImage ? urlToImage : process.env.PUBLIC_URL + "/OIP.jpeg"}
            alt="news"
          />
        </div>
        <div className="p-6">
          <div className="text-gray-500 text-sm">
            <h2 className="font-bold">
              {new Date(publishedAt).toDateString()}
            </h2>
            <p>{source.name}</p>
          </div>
          <h5 className="mt-2 font-semibold text-lg leading-tight truncate">
            {title}
          </h5>
          <div className="mt-2 text-gray-500">
            <p>{description}</p>
          </div>
          <div className="flex justify-between mt-6">
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
