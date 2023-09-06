// Pages and Comps
import '../../Css/Homepage.css'
import ProjektBild from '../../Images/TempProjekte.png'

import GalerieBild from '../../Images/TempGalerie.png'



// Libraries
import { Link } from 'react-router-dom'
import React from 'react';

export default function Homecontent() {
    return (
        <div>
            <div className='homeContent'>
            <div className="textbox" id='ProjektText'>
            <Link to='/Projects' className='link'><div className='subtitle'>Discover My different Projects</div> </Link>
                Step into the realm of my web development journey. From sleek and responsive designs to seamless user experiences, my portfolio is a testament to the websites I've brought to life. Immerse yourself in the world of digital creativity and explore the diverse range of web projects I've crafted.
            </div>

            <div className="homeImages" id="ProjektBild">
            <Link to='/Projects' className='link'>
                <img src={ProjektBild} alt='Projekte' />
                </Link>
            </div> 

            <div className="homeImages" id="GalerieBild">
                <Link to='/Galerie' className='link'>
                    <img src={GalerieBild} alt='Galerie' />
                </Link>
            </div>
            
            <div className="textbox" id="GalerieText">
            <Link to='/aboutme' className='link'>
                <div className='subtitle'>Learn a bit about me</div> 
            </Link>
            Explore the fascinating world of who i realy am and gain a comprehensive understanding of my persona. Discover my hobbies, professional expertise, and collaborative abilities with teams and peers.            </div>


 
            
            </div>
        </div>
    )
}