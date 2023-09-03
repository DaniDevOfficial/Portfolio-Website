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
            <Link to='/Projekte' className='link'><div className='subtitle'>Discover My different Projects</div> </Link>
                Step into the realm of my web development journey. From sleek and responsive designs to seamless user experiences, my portfolio is a testament to the websites I've brought to life. Immerse yourself in the world of digital creativity and explore the diverse range of web projects I've crafted.
            </div>

            <div className="homeImages" id="ProjektBild">
            <Link to='/Projekte' className='link'>
                <img src={ProjektBild} alt='Projekte' />
                </Link>
            </div> 

            <div className="homeImages" id="GalerieBild">
                <Link to='/Galerie' className='link'>
                    <img src={GalerieBild} alt='Galerie' />
                </Link>
            </div>
            
            <div className="textbox" id="GalerieText">
            <Link to='/Galerie' className='link'>
                <div className='subtitle'>Dive into My Visual Portfolio</div> 
            </Link>
                Step into the world of visual storytelling through my gallery. From captivating images to thought-provoking snapshots, my gallery is a collection of moments frozen in time. Immerse yourself in the art of visual expression and explore the diverse range of images I've captured and curated.

            </div>


 
            
            </div>
        </div>
    )
}