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
        <div classname="Homecontent">
            <div className="ProjektText">
                Projekte
            </div>
            <div className="ProjektBild">
                <img src={ProjektBild} alt='Projekte' />

            </div>
            <div className="AusbildungBild">
                <img src={AusbildungBild} alt='Ausbildung' />

            </div>
            <div className="AusbildungText"></div>
            <div className="HobbiesText"></div>
            <div className="HobbiesBild">
                <img src={HobbiesBild} alt='Hobbies' />

            </div>
            <div className="LebenslaufBild">
                <img src={LebenslaufBild} alt='Lebenslauf' />

            </div>
            <div className="LebenslaufText"></div>
            <div className="GalerieText"></div>
            <div className="GalerieBild">
                <img src={GalerieBild} alt='Galerie' />

            </div>




        </div>
    )
}