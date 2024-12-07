import React from 'react'
import SmallCard from './SmallCard'
import CenterCard from './CenterCard'
import Card from './Card'
import LoadMore from './LoadMore'

const CategoryPage = () => {
  return (
    <>
    <div>
        <div className='flex justify-between items-stretch gap-6 p-6'>
        {/* Left Section */}
            <div className='grid grid-rows-2 gap-6 p-4 pl-4'>
                <SmallCard queryParameter="top"/> 
                <SmallCard queryParameter="top"/> 
            </div>

        {/* Center section*/}
            <div className='grid grid-cols-1 gap-6 p-4 pt-4'>
                <CenterCard queryParameter="Trending"/>
            </div>

        {/* Right section*/}
            <div className='grid grid-rows-2 gap-6 p-4 pl-6'>
                <SmallCard queryParameter="popular"/> 
                <SmallCard queryParameter="popular"/> 
            </div>
        </div>
    </div>

    <div className='w-full'>
        <div className='grid grid-cols-3 gap-4 p-8 pl-24'>
            <Card queryParameter="business"/> 
            <Card queryParameter="business"/> 
            <Card queryParameter="business"/> 
        </div>
        <LoadMore title="business"/>
    </div>

    </>
  )
}

export default CategoryPage