import React, { useState } from 'react';
import Card from '../components/Card';
import NewCard from './NewCard';

const ViewMore = ({title}) => {
  const [contentList, setContentList] = useState([
    ,
  ]);

  const loadMoreContent = () => {
    const newContent = (
    <div className='grid grid-cols-4 gap-6 p-4 pt-6 '>
        <NewCard queryParameter='stories'/>
        <NewCard queryParameter='united states'/>
        <NewCard queryParameter='comedy'/>
        <NewCard queryParameter='war'/>
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
          className="px-6 py-3 mt-4 mb-12 bg-blue-500 text-white rounded-3xl hover:bg-blue-700 transition"
          onClick={loadMoreContent}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default ViewMore;
