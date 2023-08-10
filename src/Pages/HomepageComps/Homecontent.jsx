// Pages and Comps
import '../../Css/Homepage.css'
import ProjektBild from '../../Images/TempProjekte.png'
import AusbildungBild from '../../Images/TempAusbildung.png'
import HobbiesBild from '../../Images/TempHobbies.png'
import LebenslaufBild from '../../Images/TempLebenslauf.png'
import GalerieBild from '../../Images/TempGalerie.png'



// Libraries

export default function Homecontent() {
    return (
        <div>
            <div className='homeContent'>
            <div className="textbox" id='ProjektText'>
            <div className='subtitle'>Discover My different Projects</div>
                Step into the realm of my web development journey. From sleek and responsive designs to seamless user experiences, my portfolio is a testament to the websites I've brought to life. Immerse yourself in the world of digital creativity and explore the diverse range of web projects I've crafted.
            </div>

            <div className="homeImages"id="ProjektBild">
                <img src={ProjektBild} alt='Projekte' />

            </div>

            <div id="AusbildungBild">
                <img src={AusbildungBild} alt='Ausbildung' />

            </div>

            <div className="textbox" id="AusbildungText">
            <div className='subtitle'>Navigating My Education:</div>
                Presently enrolled in the IMS program, I am immersed in a journey that blends theoretical knowledge with hands-on development. Exploring the realm of technology and development, my path is a fusion of learning and practical application.
            </div>

            <div className="textbox" id="HobbiesText">
            <div className='subtitle'>Unveiling My Hobbies:</div>
                Step into the world of my interests. From the excitement of sports to the dedication of weightlifting and the immersive realm of gaming, these hobbies paint a vivid picture of my diverse passions that inspire and engage me.
            </div>

            <div id="HobbiesBild">
                <img src={HobbiesBild} alt='Hobbies' />

            </div>

            <div id="LebenslaufBild">
                <img src={LebenslaufBild} alt='Lebenslauf' />

            </div>

            <div className="textbox" id="LebenslaufText">
            <div className='subtitle'>Explore My Professional Journey</div>
                Embark on a journey through my professional life and accomplishments. From impactful career milestones to skillful expertise, my curriculum vitae showcases the path I've carved in the realm of work and experience. Immerse yourself in the narrative of my professional growth and discover the diverse array of roles and accomplishments that shape my story.
            </div>


            <div className="textbox" id="GalerieText">
            <div className='subtitle'>Dive into My Visual Portfolio</div>
                Step into the world of visual storytelling through my gallery. From captivating images to thought-provoking snapshots, my gallery is a collection of moments frozen in time. Immerse yourself in the art of visual expression and explore the diverse range of images I've captured and curated.

            </div>


            <div id="GalerieBild">
                <img src={GalerieBild} alt='Galerie' />
            </div>
            
            </div>
        </div>
    )
}