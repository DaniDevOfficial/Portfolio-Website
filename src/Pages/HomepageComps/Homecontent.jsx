// Pages and Comps
import '../../Css/Homepage.css'
import ProjektBild from '../../Images/TempProjekte.png'
import AusbildungBild from '../../Images/TempAusbildung.png'
import HobbiesBild from '../../Images/TempHobbies.png'
import LebenslaufBild from '../../Images/TempLebenslauf.png'
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

            <div className="homeImages" id="AusbildungBild">
            <Link to='/Ausbildung' className='link'>
                <img src={AusbildungBild} alt='Ausbildung' />
            </Link>

            </div>

            <div className="textbox" id="AusbildungText">
            <Link to='/Ausbildung' className='link'>
                <div className='subtitle'>Navigating My Education:</div>
            </Link>
                Presently enrolled in the IMS program, I am immersed in a journey that blends theoretical knowledge with hands-on development. Exploring the realm of technology and development, my path is a fusion of learning and practical application.
            </div>

            <div className="textbox" id="HobbiesText">
            <Link to='/Hobbies' className='link'>
                <div className='subtitle'>Unveiling My Hobbies:</div>
            </Link>
                Step into the world of my interests. From the excitement of sports to the dedication of weightlifting and the immersive realm of gaming, these hobbies paint a vivid picture of my diverse passions that inspire and engage me.
            </div>

            <div className="homeImages" id="HobbiesBild">
                <Link to='/Hobbies' className='link'>
                    <img src={HobbiesBild} alt='Hobbies' />
                </Link>

            </div>

            <div className="homeImages" id="LebenslaufBild">
            <Link to='/Lebenslauf' className='link'> 
                <img src={LebenslaufBild} alt='Lebenslauf' />
            </Link>

            </div>

            <div className="textbox" id="LebenslaufText">
            <Link to='/Lebenslauf' className='link'>
                <div className='subtitle'>Explore My Professional Journey</div>
            </Link>
                Embark on a journey through my professional life and accomplishments. From impactful career milestones to skillful expertise, my curriculum vitae showcases the path I've carved in the realm of work and experience. Immerse yourself in the narrative of my professional growth and discover the diverse array of roles and accomplishments that shape my story.
            </div>


            <div className="textbox" id="GalerieText">
            <Link to='/Galerie' className='link'>
                <div className='subtitle'>Dive into My Visual Portfolio</div> 
            </Link>
                Step into the world of visual storytelling through my gallery. From captivating images to thought-provoking snapshots, my gallery is a collection of moments frozen in time. Immerse yourself in the art of visual expression and explore the diverse range of images I've captured and curated.

            </div>


            <div className="homeImages" id="GalerieBild">
                <Link to='/Galerie' className='link'>
                    <img src={GalerieBild} alt='Galerie' />
                </Link>
            </div>
            
            </div>
        </div>
    )
}