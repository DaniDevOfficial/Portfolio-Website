// Pages and Comps
import '../../Css/Aboutme.css'
import DavidImage from '../../Images/davidImage.png'

// Libraries and stuff
import React from 'react';
import { Link } from 'react-scroll'
export default function AboutMeMain() {

    return (
        <>
            <div className='AboutContainer'>
                <div class="AboutMainContainer">
                    <div id="davidImage">
                        <img src={DavidImage} alt='DavidImage' />
                    </div>
                    <div id="professionalSkills" class="textbox">
                        <Link className="subtitle pointer" to="ProfRef" spy={true} smooth={true} duration={1000} >Professional Skills</Link>
                        <p>
                            Discovering my programming skills and understanding how I collaborate within a team can be instrumental in fostering a productive and efficient work environment. Let's delve into both aspects in greater detail.

                        </p>
                    </div>

                    <div id="PersonalPursuits" class="textbox">
                        <Link className="subtitle pointer" to="PersRef" spy={true} smooth={true} duration={1000} >Personal Pursuits</Link>
                        <p>
                        Let's explore how I spend my free time and the motivations behind my activities. This will help shed light on my interests and priorities.                        </p>
                    </div>
                </div>

            </div>


        </>

    )

}

