// Pages and Comps
import '../../Css/Aboutme.css'
import DavidImage from '../../Images/davidImage.png'
import ProfessionalSkills from './ProfessionalSkills';
import PersonalPursuits from './PersonalPursuits';
// Libraries and stuff
import React from 'react';
import { Link } from 'react-scroll'
export default function Aboutmemain() {

    return (
        <>
            <div className='AboutContainer'>
                <div class="AboutMainContainer">
                    <div id="davidImage">
                        <img src={DavidImage} alt='DavidImage' />
                    </div>
                    <div id="professionalSkills" class="textbox">
                        <Link className="subtitle" to="ProfRef" spy={true} smooth={true} duration={1000} >Professional Skills</Link>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In asperiores praesentium soluta eum quisquam eveniet quidem dignissimos! Aperiam tempore aw
                        </p>
                    </div>

                    <div id="PersonalPursuits" class="textbox">
                        <h2 className="subtitle" ></h2>
                        <Link className="subtitle" to="PersRef" spy={true} smooth={true} duration={1000} >Personal Pursuits</Link>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod nulla ac libero consectetur, non fringilla massa hendrerit. Curabitur id dignissim
                        </p>
                    </div>
                </div>
            </div>

            <a className="ProfRef"><ProfessionalSkills /></a>
            <br />
            <a className="PersRef"><PersonalPursuits /> </a>

        </>

    )

}

