// Pages and Comps
import '../../Css/Aboutme.css'
import ReactIcon from '../../Images/React-icon.svg'
import JavaIcon from '../../Images/Java-icon.svg'
import HTMLIcon from '../../Images/HTML-icon.svg'
import CssIcon from '../../Images/CSS3-icon.svg'
import BootstrapIcon from '../../Images/Bootstrap-icon.svg'
import JavaScriptIcon from '../../Images/JavaScript-icon.svg'
import GitIcon from '../../Images/Git-icon.svg'
import FigmaIcon from '../../Images/Figma-icon.svg'
import PhotoshopIcon from '../../Images/Photoshop-icon.svg'
import FirebaseIcon from '../../Images/Firebase-icon.svg'
import AWSIcon from '../../Images/AWS-icon.svg'
import NodejsIcon from '../../Images/Node.js-icon.svg'
import MySqlIcon from '../../Images/MySql-icon.svg'

// Libraries and stuff
import React from 'react';

export default function MySkills() {

    return (
        <>

            <div className="WrapperAboutProfessional">

                <div className="TopicTitle">Professional Skills</div>

                <div className="Quotes">
                    <p>"The only way to do great work is to love what you do."</p>
                    <p>- Steve Jobs</p>
                </div>

                <div class="SkillsContainer">
                    <div class="Frontend-Skills">
                        <div className="Subtitle" >Fronted Skills</div>
                        <ul className="skills-list">
                            <li className="skill">
                                <div className="icon"><img src={JavaScriptIcon} className="icon" alt='' /> </div>
                                JavaScript
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={CssIcon} alt='' div className="icon" /></div>
                                CSS
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={HTMLIcon} alt='' div className="icon" /></div>
                                HTML
                            </li>
                            <li className="skill">
                                <div className="icon"> <img src={ReactIcon} alt='' div className="icon" /></div>
                                React
                            </li>
                            <li className="skill">
                                <div className="icon"> <img src={BootstrapIcon} alt='' div className="icon" /></div>
                                Bootstrap
                            </li>
                        </ul>
                    </div>
                    <div class="Tools-Skills">
                        <div className="Subtitle">Tools</div>
                        <ul className="skills-list">
                            <li className="skill">
                                <div className="icon"><img src={GitIcon} className="icon" alt='' /></div>
                                Git
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={CssIcon} className="icon" alt='' /></div>
                                VsCode
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={FigmaIcon} className="icon" alt='' /></div>
                                Figma
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={PhotoshopIcon} className="icon" alt='' /></div>
                                Photoshop
                            </li>
                            <li className="skill">
                                <div className="icon"> <img src={FirebaseIcon} className="icon" alt='' /></div>
                                Firebase
                            </li>
                            <li className="skill">
                                <div className="icon"> <img src={AWSIcon} className="icon" alt='' /></div>
                                AWS
                            </li>
                        </ul>
                    </div>
                    <div class="Backend-Skills">
                        <div className="Subtitle">Backend Skills</div>
                        <ul className="skills-list">
                            <li className="skill">
                                <div className="icon"><img src={NodejsIcon} className="icon" alt='' /></div>
                                Node
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={MySqlIcon} className="icon" alt='' /></div>
                                MySQL
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={JavaIcon} className="icon" alt='' /></div>
                                some random skill
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="personal-text">
                    <h2>My Coding Journey</h2>
                    <p>I discovered my love for coding thanks to my Grandfather's enthusiasm.</p>
                    <p>My interest in technology deepened through my passion for gaming, where I delved into understanding its inner workings.</p>
                    <p>My coding adventure began at the age of about 15 when I first explored Python. I was immediately captivated by its creative potential.</p>
                    <p>Today, I'm a dedicated coder, continuously expanding my knowledge and pushing the boundaries of what's achievable.</p>
                    <p>I'm thrilled to share my skills and contribute positively through technology.</p>
                </div>
                <div class="wave2">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>

                <div className="TeamSkills">
                <div className="TopicTitle">Team Collaboration</div>

                <div className="Quotes">
                    <p>"It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently."</p>
                    <p>- Warren Buffett</p>
                </div>

                <div class="SkillsContainer">
                    <div class="Frontend-Skills">
                        <div className="Subtitle" >Communication and Collaboration</div>
                        <ul className="skills-list">
                            <li className="skill">
                                <div className="icon"><img src={JavaScriptIcon} className="icon" alt='' /></div>
                                JavaScript
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={CssIcon} className="icon" alt='' /></div>
                                CSS
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={HTMLIcon} className="icon" alt='' /></div>
                                HTML
                            </li>
                            <li className="skill">
                                <div className="icon"> <img src={ReactIcon} alt='' /></div>
                                React
                            </li>
                            <li className="skill">
                                <div className="icon"> <img src={ReactIcon} alt='' /></div>
                                Bootstrap
                            </li>
                        </ul>
                    </div>
                    <div class="Tools-Skills">
                        <div className="Subtitle">Problem Solving and Adaptability</div>
                        <ul className="skills-list">
                            <li className="skill">
                                <div className="icon"><img src={JavaScriptIcon} className="icon" alt='' /></div>
                                Git
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={CssIcon} className="icon" alt='' /></div>
                                VsCode
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={HTMLIcon} className="icon" alt='' /></div>
                                Figma
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={JavaIcon} className="icon" alt='' /></div>
                                Photoshop
                            </li>
                            <li className="skill">
                                <div className="icon"> <img src={ReactIcon} alt='' /></div>
                                Firebase
                            </li>
                            <li className="skill">
                                <div className="icon"> <img src={ReactIcon} alt='' /></div>
                                AWS
                            </li>
                            <li className="skill">
                                <div className="icon"> <img src={ReactIcon} alt='' /></div>
                                Agile
                            </li>
                        </ul>
                    </div>
                    <div class="Backend-Skills">
                        <div className="Subtitle">Leadership and Time Management</div>
                        <ul className="skills-list">
                            <li className="skill">
                                <div className="icon"><img src={JavaIcon} className="icon" alt='' /></div>
                                Express
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={JavaIcon} className="icon" alt='' /></div>
                                Node
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={JavaIcon} className="icon" alt='' /></div>
                                MySQL
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={JavaIcon} className="icon" alt='' /></div>
                                some random skill
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={JavaIcon} className="icon" alt='' /></div>
                                Express
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>

        </>

    )

}

