// Pages and Comps
import '../../Css/Aboutme.css'
import ReactIcon from '../../Images/React-icon.svg'
import JavaIcon from '../../Images/Java-icon.svg'
import HTMLIcon from '../../Images/HTML-icon.svg'
import CssIcon from '../../Images/CSS3-icon.svg'
//import Icon from '../../Images/HTML-icon.svg'
import JavaScriptIcon from '../../Images/JavaScript-icon.svg'
//import Icon from '../../Images/-icon.svg'

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
                                <div className="icon"><img src={JavaScriptIcon} className="icon" /></div>
                                JavaScript
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={CssIcon} className="icon" /></div>
                                CSS
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={HTMLIcon} className="icon" /></div>
                                HTML
                            </li>
                            <li className="skill">
                                <div className="icon"> <img src={ReactIcon} /></div>
                                React
                            </li>
                            <li className="skill">
                                <div className="icon"> <img src={ReactIcon} /></div>
                                Bootstrap 
                            </li>
                        </ul>
                    </div>
                    <div class="Tools-Skills">
                        <div className="Subtitle">Tools</div>
                        <ul className="skills-list">
                            <li className="skill">
                                <div className="icon"><img src={JavaScriptIcon} className="icon" /></div>
                                Git
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={CssIcon} className="icon" /></div>
                                VsCode
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={HTMLIcon} className="icon" /></div>
                                Figma
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={JavaIcon} className="icon" /></div>
                                Photoshop
                            </li>
                            <li className="skill">
                                <div className="icon"> <img src={ReactIcon} /></div>
                                Firebase
                            </li>
                            <li className="skill">
                                <div className="icon"> <img src={ReactIcon} /></div>
                                AWS
                            </li>
                            <li className="skill">
                                <div className="icon"> <img src={ReactIcon} /></div>
                                Agile
                            </li>
                        </ul>
                    </div>
                    <div class="Backend-Skills">
                        <div className="Subtitle">Backend Skills</div>
                        <ul className="skills-list">
                            <li className="skill">
                                <div className="icon"><img src={JavaIcon} className="icon" /></div>
                                Express
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={JavaIcon} className="icon" /></div>
                                Node
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={JavaIcon} className="icon" /></div>
                                MySQL
                            </li>
                            <li className="skill">
                                <div className="icon"><img src={JavaIcon} className="icon" /></div>

                            </li>
                            <li className="skill">
                                <div className="icon"><img src={JavaIcon} className="icon" /></div>
                                Express
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>

    )

}

