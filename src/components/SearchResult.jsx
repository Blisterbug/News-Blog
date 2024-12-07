import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';
import LoadMore from './LoadMore';
import SmallCard from './SmallCard';
import CenterCard from './CenterCard';
import Footer from './Footer';



const SearchResult = () => {
  const location = useLocation();
  const { searchTerm } = location.state || {};

  return (
    <div className="p-6 bg-slate-100">
      <>
    <div>
        <h2 className="text-2xl font-bold mb-4">Search Results for: "{searchTerm}"</h2>
        <h2 className="text-3xl font-bold pt-20 pl-12">Search Results for : "{searchTerm}"</h2>
        <div className='flex justify-between items-stretch gap-6 p-6'>
        {/* Left Section */}
            <div className='grid grid-rows-2 gap-6 p-4 pl-4'>
                <SmallCard queryParameter={searchTerm}/> 
                <SmallCard queryParameter={searchTerm}/> 
            </div>

        {/* Center section*/}
            <div className='grid grid-cols-1 gap-6 p-4 pt-4'>
                <CenterCard queryParameter={searchTerm}/>
            </div>

        {/* Right section*/}
            <div className='grid grid-rows-2 gap-6 p-4 pl-6'>
                <SmallCard queryParameter={searchTerm}/> 
                <SmallCard queryParameter={searchTerm}/> 
            </div>
        </div>
    </div>

    <div className='w-full'>
        <div className='grid grid-cols-3 gap-4 p-8 pl-24'>
            <Card queryParameter={searchTerm}/> 
            <Card queryParameter={searchTerm}/> 
            <Card queryParameter={searchTerm}/> 
            <Card queryParameter={searchTerm}/> 
            <Card queryParameter={searchTerm}/> 
            <Card queryParameter={searchTerm}/> 
        </div>
        <LoadMore title={searchTerm}/>
    </div>
    <Footer/>
    </>
      </div>
  );
};

export default SearchResult;
