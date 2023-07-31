// Pages and Comps
import '../Css/Homepage.css'
import ProfilePic from '../Images/TempProfielbild.png'
// Libraries
import Typewriter from "typewriter-effect";

import React from 'react';

function Homepage() {
  return (
    <div className='homewrapper'>
    <div className='typewriter'>
      <span className='greeting'>Hey, my name is David and </span>
      <Typewriter
        options={{ loop: true }}
        onInit={(typewriter) => {
          typewriter
            .typeString("I'm currently a student")
            .pauseFor(1000)
            .deleteAll()
            .typeString("I enjoy building Websites")
            .pauseFor(1000)
            .deleteAll()
            .typeString("I'm a passionate developer")
            .pauseFor(1000)
            .deleteAll()
            .typeString("I love working with React and JavaScript")
            .pauseFor(1000)
            .deleteAll()
            .typeString("I like dogs 🐶")
            .pauseFor(1000)
            .deleteAll()
            .typeString("I'm always eager to learn new technologies")
            .pauseFor(1000)
            .deleteAll()
            .typeString("I believe in the power of code to change the world")
            .start();
        }}
      />
    </div>
    <div className='content-container'>
      <div className='portrait'>
        <img src={ProfilePic} alt='Portrait' />
      </div>
      <div className='textbox'>
      </div>
    </div>
  </div>
  );
}

export default Homepage;