import React from 'react'
import Hero from './Hero'
import Card from './Card'
import BigCard from './BigCard'
import Footer from './Footer'
import BigNewCard from './BigNewCard'
import NewCard from './NewCard'
import ViewMore from './ViewMore'
import MoreNews from './MoreNews'

const Home = () => {
  return (
    <div className='flex flex-col pt-32 w-screen overflow-x-hidden bg-gray-100  '>
        <section className='max-w-full'>
            <div className='flex justify-center w-full'>
        <h1 className="text-5xl font-bold text-gray-700 pb-4 px-10 overflow-x-hidden ">
                Breaking News, Instant Updates Here
            </h1>
            </div>
            <Hero/>
        </section>

        <section>
        <h2 className="text-3xl font-bold  p-4 pb-2 pl-36 pt-4 overflow-x-hidden ">Technology</h2>
        {/* Recent trending on this category  */}
    <div className='w-full'>
        <div className='grid grid-cols-3 gap-4 p-8 px-28 overflow-x-hidden'>
            <div ><Card queryParameter="technology"/> </div>
            <div ><Card queryParameter="google"/> </div>
            <div ><Card queryParameter="scam"/> </div>   
        </div>
    </div>
        </section>

        <section>
    <h2 className="text-3xl font-bold  p-4 pb-8 pl-36 overflow-x-hidden ">Space</h2>
        <div className='w-full'>
    <div className='flex justify-between px-10 overflow-x-hidden'>
        <div className='flex-1 pl-6'>
            <BigCard queryParameter="space"/>
        </div>
        <div className='flex-1'>
            <BigCard queryParameter="space"/>
        </div>
    </div>
        </div>

        </section>

        <section>
        <h2 className="text-3xl font-bold  p-4 pb-6 pl-36 pt-12 overflow-x-hidden ">Featured Articles</h2>
        {/* Recent trending on this category  */}
        <div className='w-full'>
            <div className='grid grid-cols-3 gap-4 p-8 px-28 overflow-x-hidden'>
                <Card queryParameter="crime"/>  
                <Card queryParameter="united states"/> 
                <Card queryParameter="india"/> 
            </div>
        </div>

        </section>
        <div className='flex justify-center w-full'>
        <h1 className="text-6xl font-bold text-gray-700 pb-4 px-10 overflow-x-hidden ">
                Stories
        </h1>
        
            </div>
            <p className="text-md  font-bold text-gray-700 pb-4 px-96 overflow-x-hidden "> 
            "The visionaries, builders, and trailblazers shaping a brighter future for all." </p>
        <div className='grid grid-cols-1 p-4'>
            <BigNewCard queryParameter='stories'/> 
        </div>
      
      <div className='grid grid-cols-4 gap-6 p-4 pt-6 '>
          <NewCard queryParameter='stories'/>
          <NewCard queryParameter='united states'/>
          <NewCard queryParameter='comedy'/>
          <NewCard queryParameter='war'/>
      </div>
        <ViewMore/>

        <div className='flex justify-start w-full'>
            <h1 className="text-3xl font-bold text-gray-700 pb-4 pl-36 overflow-x-hidden ">
                More from Chronicle Hub
            </h1>
        </div>

        <div className='grid grid-cols-2 gap-6 p-4 px-52'>
          <MoreNews queryParameter='climate'/>
          <MoreNews queryParameter='fashion'/>
          <MoreNews queryParameter='finance'/>
          <MoreNews queryParameter='weather'/>
          <MoreNews queryParameter='germany'/>
          <MoreNews queryParameter='india'/>
          <MoreNews queryParameter='cybersecurity'/>
          <MoreNews queryParameter='gaming'/>
        </div>


        <Footer/>
    </div>
  )
}

export default Home