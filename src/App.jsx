import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchResult from './components/SearchResult';
import Business from './categories/Business'
import Entertainment from './categories/Entertainment'
import Space from './categories/Space'
import Technology from './categories/Technology'
import About from './components/About';
import Movies from './categories/Movies';
import Science from './categories/Science';
import Politics from './categories/Politics';
import Fashion from './categories/Fashion';
import Weather from './categories/Weather';
import ScrollTop from './components/ScrollTop';
import ResNavbar from './responsive/ResNavbar';


const App = () => {
  return (
<div className=''>
    <ScrollTop/>
    <ResNavbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/searchResult" element={<SearchResult />} />
            <Route path="/business" element={<Business/>} />
            <Route path="/space" element={<Space />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/entertainment" element={<Entertainment />}/>
            <Route path="/movies" element={<Movies />}/>
            <Route path="/science" element={<Science />}/>
            <Route path="/politics" element={<Politics />}/>
            <Route path="/fashion" element={<Fashion />}/>
            <Route path="/weather" element={<Weather />}/>
        </Routes>
</div>
  );
};

export default App;
