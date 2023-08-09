// Pages and Comps
import '../Css/Homepage.css'
import Homecontent from './HomepageComps/Homecontent';
import Homemain from './HomepageComps/Homemain';
// Libraries
import Typewriter from "typewriter-effect";

import React from 'react';

function Homepage() {
  return (
    <div className='homewrapper'>
      <Homemain />
      <Homecontent />
  </div>
  );
}

export default Homepage;