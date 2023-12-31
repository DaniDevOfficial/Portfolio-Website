// Pages and Comps
import '../Css/Homepage.css'
import Homecontent from './HomepageComps/Homecontent';
import Homemain from './HomepageComps/Homemain';
// Libraries

import React from 'react';

function Homepage() {
  return (
    <div className='homewrapper'>
      <Homemain />
      <div class="waveHome">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <Homecontent />
      <div class="EndDivider" id='homedivider'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
}

export default Homepage;