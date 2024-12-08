import React from 'react'
import CenterCard from '../components/CenterCard'
import SmallCard from '../components/SmallCard'
import BigCard from '../components/BigCard'
import Card from '../components/Card'
import LoadMore from '../components/LoadMore'
import Footer from '../components/Footer'
import BigNewCard from '../components/BigNewCard'


const Technology = () => {
  return (


    <div className='flex flex-col gap-6 pt-32 bg-gray-100'>
        <div className="container mx-auto flex justify-between items-center">
            {/* Center Section: Title */}
        <div className="text-center flex-grow">
            <h1 className="text-5xl font-bold text-gray-700 ">
                Uncover Tech Trends Today
            </h1>
        </div>
     </div>


    <div className='w-full'>
    <div className='grid grid-cols-1 p-4'>
                <BigNewCard queryParameter="technology"/>
        </div>
    <div className='grid grid-cols-3 gap-6 p-8'>
        {/* left section - center card  */}
        <div className=' grid grid-cols-1  pl-12'>
            <CenterCard queryParameter="technology"/>
        </div>

        <div className=' grid grid-rows-2 gap-6 px-72'>
            <SmallCard queryParameter="technology"/>
            <SmallCard queryParameter="technology"/>
        </div>

        <div className=' grid grid-rows-2 gap-6 px-36'>
            <SmallCard queryParameter="technology"/>
            <SmallCard queryParameter="technology"/>
        </div>
        </div>



        {/* Most Popular  */}

        <h2 className="text-3xl font-bold  p-4 pb-6 pl-24">Most Popular on Recent Days</h2>
        <div className='w-full'>
        <div className=' flex justify-between'>
                    <div className='pl-20'>
                        <BigCard queryParameter="technology"/>
                    </div>
                    <div className='pr-16'>
                        <BigCard queryParameter="technology"/>
                    </div>
        </div>
        </div>



        <h2 className="text-3xl font-bold  p-4 pb-6 pl-24 pt-12">Recent Trending on World Technology</h2>
        {/* Recent trending on this category  */}
        <div className='w-full'>
        <div className='grid grid-cols-3 gap-4 p-8 pl-24'>
            <Card queryParameter="technology"/> 
            <Card queryParameter="technology"/> 
            <Card queryParameter="technology"/> 
        </div>
        </div>

        <LoadMore title="technology"/>
        <Footer/>
    </div>
    </div>
  )
}

export default Technology