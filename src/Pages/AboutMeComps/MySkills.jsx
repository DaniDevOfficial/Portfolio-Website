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
import TeamworkIcon from '../../Images/TeamworkIcon.png'
import CommunicationIcon from '../../Images/CommunicationIcon.png'
import ConflictResolutionIcon from '../../Images/ConflictResolutionIcon.png'
import ProblemSolvingIcon from '../../Images/ProblemSolvingIcon.png'
import AdaptabilityIcon from '../../Images/AdaptabilityIcon.png'
import ProjectPlanningIcon from '../../Images/ProjectPlanningIcon.png'
import TaskManagementIcon from '../../Images/TaskManagementIcon.png'
import RiskManagementIcon from '../../Images/RiskManagementIcon.png'
import TimeManagementIcon from '../../Images/TimeManagementIcon.png'
import BudgetingIcon from '../../Images/BudgetingIcon.png'
import TeamLeadershipIcon from '../../Images/TeamLeadershipIcon.png'
import DecisionMakingIcon from '../../Images/DecisionMakingIcon.png'
import StrategicPlanningIcon from '../../Images/StrategicPlanningIcon.png'
import MotivationIcon from '../../Images/MotivationIcon.png'

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
                        <div className="SubtitleSkills" >Fronted Skills</div>
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
                        <div className="SubtitleSkills">Tools</div>
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
                        <div className="SubtitleSkills">Backend Skills</div>
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
                                Java
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
                        <p>"The strength of an army lies in its camaraderie."</p>
                        <p>- Napoleon Bonaparte</p>
                    </div>

                    <div class="SkillsContainer">
                        <div class="Collaboration-Skills">
                            <div class="SubtitleSkills">Collaboration Skills</div>
                            <ul class="skills-list">
                                <li class="skill">
                                    <div class="icon"><img src={TeamworkIcon} class="icon" alt="" /> </div>
                                    Teamwork
                                </li>
                                <li class="skill">
                                    <div class="icon"><img src={CommunicationIcon} alt="" class="icon" /></div>
                                    Communication
                                </li>
                                <li class="skill">
                                    <div class="icon"><img src={ConflictResolutionIcon} alt="" class="icon" /></div>
                                    Conflict Resolution
                                </li>
                                <li class="skill">
                                    <div class="icon"><img src={ProblemSolvingIcon} alt="" class="icon" /></div>
                                    Problem Solving
                                </li>
                                <li class="skill">
                                    <div class="icon"><img src={AdaptabilityIcon} alt="" class="icon" /></div>
                                    Adaptability
                                </li>
                            </ul>
                        </div>
                        <div class="Project-Management-Skills">
                            <div class="SubtitleSkills">Project Management Skills</div>
                            <ul class="skills-list">
                                <li class="skill">
                                    <div class="icon"><img src={ProjectPlanningIcon} class="icon" alt="" /></div>
                                    Project Planning
                                </li>
                                <li class="skill">
                                    <div class="icon"><img src={TaskManagementIcon} class="icon" alt="" /></div>
                                    Task Management
                                </li>
                                <li class="skill">
                                    <div class="icon"><img src={RiskManagementIcon} class="icon" alt="" /></div>
                                    Risk Management
                                </li>
                                <li class="skill">
                                    <div class="icon"><img src={TimeManagementIcon} class="icon" alt="" /></div>
                                    Time Management
                                </li>
                                <li class="skill">
                                    <div class="icon"><img src={BudgetingIcon} class="icon" alt="" /></div>
                                    Budgeting
                                </li>
                            </ul>
                        </div>
                        <div class="Leadership-Skills">
                            <div class="SubtitleSkills">Leadership Skills</div>
                            <ul class="skills-list">
                                <li class="skill">
                                    <div class="icon"><img src={TeamLeadershipIcon} class="icon" alt="" /></div>
                                    Team Leadership
                                </li>
                                <li class="skill">
                                    <div class="icon"><img src={DecisionMakingIcon} class="icon" alt="" /></div>
                                    Decision Making
                                </li>
                                <li class="skill">
                                    <div class="icon"><img src={StrategicPlanningIcon} class="icon" alt="" /></div>
                                    Strategic Planning
                                </li>
                                <li class="skill">
                                    <div class="icon"><img src={MotivationIcon} class="icon" alt="" /></div>
                                    Motivation
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div class="wave3">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </div>
            </div>

        </>

    )

}

