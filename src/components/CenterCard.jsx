import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CenterCard = ({ queryParameter }) => {
  const API_Key = import.meta.env.VITE_API_KEY;
  const base_URL = `https://newsapi.org/v2/everything?q=${queryParameter}&apiKey=${API_Key}`;

  const [article, setArticle] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await fetch(base_URL);
      const data = await response.json();
      if (data.articles && data.articles.length > 0) {
        // Filter articles to include only those with complete data
        const validArticles = data.articles.filter(article => 
          article.urlToImage && article.title && article.description
        );
        if (validArticles.length > 0) {
          // Select a random valid article
          const randomIndex = Math.floor(Math.random() * validArticles.length);
          setArticle(validArticles[randomIndex]);
        } else {
          // Log a message if no valid articles are found
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
        className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all"
        style={{ width: '650px', height: '625px' }} // Fixed dimensions for the card
      >
        {/* Skeleton loader */}
        <div className="h-80 bg-gray-300 rounded-t-2xl mb-4 animate-pulse"></div>
        <div className="p-4 flex flex-col justify-between h-[calc(625px-192px)]">
          <div>
            <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all"
      style={{ width: '650px', height: '625px' }} // Fixed dimensions for the card
    >
      <img
        className="w-full h-80 object-cover hover:scale-105 transition-all"
        src={article.urlToImage || `https://via.placeholder.com/320x180`}
        alt="Blog Post"
      />
      <div className="p-4 flex flex-col justify-between h-[calc(625px-192px)]">
        <div>
          <p className="text-gray-500 text-sm">{new Date(article.publishedAt).toLocaleDateString()}</p>
          <h3 className="text-xl font-bold mt-2 line-clamp-2">
            {article.title.length > 60 ? article.title.slice(0, 60) + '...' : article.title}
          </h3>
          <p className="text-gray-600 mt-3 line-clamp-3">{article.description}</p>
          <div className="flex justify-between items-center">
          <button
            onClick={fetchNews}
            className="px-4 py-2 mt-16 bg-blue-500 text-white rounded-xl text-sm hover:bg-blue-700 hover:text-white transition"
          >
            Refresh

          </button>
          <button
            onClick={() => window.open(article.url, '_blank')}
            className="px-4 py-2 mt-16 bg-green-500 text-white rounded-xl text-sm hover:bg-green-700 hover:text-white transition "
          >
            Read Story
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterCard;