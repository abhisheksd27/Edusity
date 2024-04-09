// App.jsx
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Titles/Title';
import {programs} from './Data';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from "./Components/Footer/Footer"
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';


const App = () => {

  const [playState , setPlayState]=useState(false)






  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title
          subtitle= "Our program"
          title="What we Offer"
        />
        <Programs programs={programs} />
        <About setPlayState={setPlayState}/>
        <Title
          subtitle= "GALLERY"
          title="Campus Photos"  
        />
        <Campus/>
        <Title
          subtitle= "TESTIMONIALS"
          title="What Student Says"
        />
        <Testimonials/>
        <Title
          subtitle= "CONTACT US"
          title="Get in Touch"
        />
        <Contact/>
        
        <Footer/>
      </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
}

export default App;
