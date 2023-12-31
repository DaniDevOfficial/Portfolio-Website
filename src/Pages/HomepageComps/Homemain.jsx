// Pages and Comps
import '../../Css/Homepage.css'
import ProfilePic from '../../Images/ActualImages/RealPB.png'
import MainBild from '../../Images/TempMainBild.png';

// Libraries
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom'

export default function Homemain() {


    return (
        <>
        
             <div className='content-container'>

                <div className='typewriter'>
                    <span className='greeting'>Hey, my name is David and </span>
                    <Typewriter
                        options={{ loop: true }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("I'm currently a student")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("I enjoy building Websites")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("I'm a passionate developer")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("I love working with React and JavaScript")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("I like dogs 🐶")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("I'm always eager to learn new technologies")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("I believe in the power of code to change the world")
                                .start();
                        }}
                    />
                </div>
                <div className='portrait'>
                    <img src={ProfilePic} alt='Portrait' />
                </div>
                <div className='another-image'>
                    <img src={MainBild} alt='A video Comming soon or not' />
                </div>
                <div className='textbox' id='about'>
                    <Link to='/AboutMe' className='link'><div className='subtitle'>A little about me</div> </Link>
                    <p>
                        Hey there! My name is David, and I'm a passionate  developer. I have a strong foundation in React and JavaScript and enjoy building beautiful and interactive websites.
                        <br /><br />
                        Feel free to explore my portfolio and <a className="fancyText" href="mailto:bischof.david.db@gmail.com" target="_blank" rel="noopener noreferrer">reach out</a> if you're interested in collaborating with me. Let's create together!
                    </p>
                </div>

            </div>

        </>
    )
}