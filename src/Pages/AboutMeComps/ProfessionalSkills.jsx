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

export default function ProfessionalSkills() {

    return (
        <>
            <div className="WrapperAboutProfessional">

                <div class="SkillsContainer">
                    <div class="Frontend-Skills">
                        <div className="Subtitle" >Fronted Skills</div>
                        <ul className="skills-list">
                            <li className="skill">
                                <div className="icon"><img src={JavaScriptIcon} className="icon" alt='' /></div>
                                JavaScript
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={CssIcon}  alt='' div className="icon"/></div>
                                CSS
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={HTMLIcon} alt='' div className="icon"/></div>
                                HTML
                            </li>
                            <li className="skill">
                                <div className="icon"> <img src={ReactIcon} alt='' div className="icon"/></div>
                                React
                            </li>
                            <li className="skill">
                                <div className="icon"> <img src={BootstrapIcon} alt='' div className="icon"/></div>
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
                            <li className="skill">
                                <div className="icon"> <img src={ReactIcon} className="icon" alt='' /></div>
                                Agile
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


                <div className="sometext">wasd</div>

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
        </>

    )

}

