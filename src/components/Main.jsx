import {Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Services from './Services';
import Pictures from './Pictures';

export default function Main (){
    return (
        <div className ="Main">
            <Routes>
                <Route path ="/" element={<Home />} />
                <Route path ="/About" element={<About />} />
                <Route path ='/Services' element={<Services />} />
                <Route path ='/Pictures' element={<Pictures />} />
                
            </Routes>
        </div>
    )
}