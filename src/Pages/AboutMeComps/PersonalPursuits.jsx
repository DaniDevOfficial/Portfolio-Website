// Pages and Comps
import '../../Css/Aboutme.css'
import Volleyball from "../../Images/ActualImages/VolleyballTurnier.jpeg"
import Gym from "../../Images/ActualImages/Gym.jpeg"
import Code from '../../Images/ActualImages/CodeGamingHobbie.jpg'
// Libraries and stuff
import React from 'react';
import App from './../../App';

export default function PersonalPursuits() {

    return (
        <div className='personalWrapper'>



            <div className="PersonalContent">
                <div className="TopicTitle">Who is David</div>
                <div className='flex-container'>
                <div className='Imagebelow'>
                    <div className='textbox textboxProjects fixedheight' > 
                        <div className="subtitle pointer">Sports</div>
                        In my free time, I regularly playing sports with friends and my brother. Currently, I'm in a school volleyball class, and I regularly compete in ping pong matches with my brother. Occasionally, I also enjoy  football and other sports for some spontaneous fun. These activities keep me active and entertained during my freetime.
                    </div> 
                    <img className="textboxProjects PersonalImage"src={Volleyball} alt="Volleyball" /> </div >
                    <div className='Imagebelow'>
                    <div className='textbox textboxProjects fixedheight'>
                        <div className="subtitle">Weight liftig</div>                       
                        At the beginning of the IMS, I began going to the gym with my new classmates. Eventually, we had to switch to a different gym because our school gym closed due to the coronavirus. Currently, I continue to go to the gym, and I find it enjoyable not only for the the training and the sense of improvement it brings but also for the social aspect and just meeting new people there.
                    </div>
                    <img className="textboxProjects PersonalImage"src={Gym} alt="Gym" /> </div>
                    <div className='Imagebelow'>
                    <div className='textbox textboxProjects fixedheight'>
                        <div className="subtitle">Gaming / Coding</div>                      
                        I began playing video games with my Grandfather, and I've kept up with it ever since. However, during the last summer vacation, I had a realization about how much time I was spending on gaming without much purpose. In response, I decided to replace gaming with coding, which I find incredibly satisfying. I enjoy creating new things which has brought me a lot of joy and fulfillment.

                    </div>
                    <img className="textboxProjects PersonalImage"src={Code} alt="Gym" /> </div>

                </div>

            </div>

        </div>

    )

}
