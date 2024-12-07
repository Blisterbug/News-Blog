import React, { useState, useEffect } from 'react';

const BigNewCard = ({ queryParameter }) => {
  const API_Key = import.meta.env.VITE_API_KEY;
  const base_URL = `https://newsapi.org/v2/everything?q=${queryParameter}&apiKey=${API_Key}`;

  const [article, setArticle] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await fetch(base_URL);
      const data = await response.json();
      if (data.articles && data.articles.length > 0) {
        const validArticles = data.articles.filter(article => 
          article.urlToImage && article.title && article.description
        );
        if (validArticles.length > 0) {
          const randomIndex = Math.floor(Math.random() * validArticles.length);
          setArticle(validArticles[randomIndex]);
        } else {
          console.error('No articles with complete data found.');
        }
      }
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [queryParameter]);

  if (!article) {
    return (
      <div
        className="relative rounded-lg shadow-lg overflow-hidden"
        style={{
          width: '304px',
          height: '304px',
        }}
      >
        {/* Skeleton loader */}
        <div className="h-48 bg-gray-300 rounded-t-2xl mb-4 animate-pulse"></div>
        <div className="p-4 flex flex-col justify-between h-[calc(304px-192px)]">
          <div>
            <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="h-10 w-10 px-4 py-2 mb-9 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-10 w-10 px-4 py-2 mb-9 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative rounded-3xl shadow-lg overflow-hidden"
      style={{
        width: '1320px',
        height: '500px',
      }}
    >
      {/* Background Image */}
      <img
        src={article.urlToImage || 'https://via.placeholder.com/1320x500'}
        alt="Article"
        className="absolute inset-0 w-full h-full object-cover hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75"></div>

      {/* Content */}
      <div className="absolute inset-0 p-4 text-white flex flex-col justify-between">
        {/* Title */}
        <h3 className="text-3xl font-semibold mt-80 text-left">
          {article.title.length > 80 ? article.title.slice(0, 80) + '...' : article.title}
        </h3>
        
        {/* Date */}
        <p className="absolute bottom-6 left-4 text-lg font-semibold ">{new Date(article.publishedAt).toLocaleDateString()}</p>

        {/* Buttons */}
        <div className="flex justify-end items-center mt-4">
          <button
            onClick={() => window.open(article.url, '_blank')}
            className="px-4 py-2 bg-gray-800 text-white rounded-xl text-md hover:bg-gray-800 transition"
          >
            Read Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigNewCard;
