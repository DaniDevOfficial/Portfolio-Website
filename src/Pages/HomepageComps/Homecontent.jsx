// Pages and Comps
import '../../Css/Homepage.css'
import ProjektBild from '../../Images/ActualImages/ProjectsImage.jpg'
import AboutMeBild from '../../Images/ActualImages/AboutMeHomepage.png'



// Libraries
import { Link } from 'react-router-dom'
import React from 'react';

export default function Homecontent() {
    return (
        <div>
            <div className='homeContent'>
            <div className="textbox" id='ProjektText'>
            <Link to='/Projects' className='link'><div className='subtitle'>Discover My different Projects</div> </Link>
            I'd like to share the projects I've worked on or am currently working on to provide an understanding of my coding skills. These projects may have been team collaborations or solo efforts, and they reflect my experience and abilities. These Projects range from simple calculators up to Fullstack application.            </div>

            <div className="homeImages" id="ProjektBild">
            <Link to='/Projects' className='link'>
                <img src={ProjektBild} alt='Projekte' />
                </Link>
            </div> 

            <div className="homeImages" id="GalerieBild">
                <Link to='/AboutMe' className='link'>
                    <img src={AboutMeBild} alt='Galerie' />
                </Link>
            </div>
            
            <div className="textbox" id="GalerieText">
            <Link to='/aboutme' className='link'>
                <div className='subtitle'>Learn a bit about me</div> 
            </Link>
            Discover more about me and get a good sense of who I am. Explore my hobbies, my professional expertise, and how well I work with teams and others. Let's take a closer look at what makes me actually me.            </div>


 
            
            </div>
        </div>
    )
}