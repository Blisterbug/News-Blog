import React, { useState } from 'react';
import Card from '../components/Card';

const LoadMore = ({title}) => {
  const [contentList, setContentList] = useState([
    ,
  ]);

  const loadMoreContent = () => {
    const newContent = (
      <div className="grid grid-cols-3 gap-4 p-8 pl-24" key={contentList.length}>
        <Card queryParameter={title} />
        <Card queryParameter={title}/>
        <Card queryParameter={title}/>
      </div>
    );
    setContentList((prevContent) => [...prevContent, newContent]);
  };

  return (
    <div className="w-full space-y-4">
      {/* Render dynamically loaded content */}
      {contentList}

      {/* Load More Button */}
      <div className="text-center">
        <button
          className="px-8 py-3 mb-12 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition"
          onClick={loadMoreContent}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default LoadMore;
