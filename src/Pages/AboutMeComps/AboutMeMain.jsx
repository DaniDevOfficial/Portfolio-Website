// Pages and Comps
import '../../Css/Aboutme.css'
import DavidImage from '../../Images/davidImage.png'

// Libraries

export default function Aboutmemain() {

    return (
        <>
            <div className='AboutContainer'>
                <div class="AboutMainContainer">
                    <div id="davidImage">
                        <img src={DavidImage} alt='DavidImage' />
                    </div>
                    <div className="textbox" id='professionalSkills'>professionalSkills</div>
                    <div className="textbox" id="PersonalPursuits">PersonalPursuits</div>
                </div>
            </div>
        </>

    )

}

