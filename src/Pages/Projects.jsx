// Pages and Comps
import '../Css/Projects.css'
import Wishlingo from '../Images/Wishlingo.png'
import NatuaralAquatics from '../Images/NatuaralAquatics.png'
import QuoteMate from '../Images/QuoteMate.png'
import { Link } from 'react-scroll'
// Libraries

import React from 'react';

export function Projects() {
    return (
        <div>
            <div className='MainPage-Project'>
                <div className="Title">Explore Projects</div>
                <div className='textbox textboxProjects' id='WelcomeProjects'>
                    Here, you'll discover a selection of my projects from my time at IMS and my personal projects.

                    I'm a passionate developer, dedicated to crafting innovative solutions. Explore these projects to get a glimpse of my skills and creativity. For more, check out my <a className="fancyText" href="https://github.com/David21092" target="_blank" rel="noopener noreferrer">GitHub</a> profile.

                    Thanks for visiting!
                </div>
                <br />
                <div className='flex-container'>
                    <div className='textbox textboxProjects' >
                    <Link className="subtitle" to="WishlingoPart" spy={true} smooth={true} duration={1000} ><div className="subtitle pointer">Wishlingo</div> </Link>
                        Wishlingo is a user-friendly language learning app that allows you to complete sentences in your chosen language by filling in missing words. Learn more by diving deeper below!
                    </div>

                    <div className='textbox textboxProjects'>
                    <Link className="subtitle pointer" to="NaturalAquaticsPart" spy={true} smooth={true} duration={1000} ><div className="subtitle">Natural Aquactics</div> </Link>                        Natural Aquatics is your online destination for premium water subscriptions, presented in a multimedia format with engaging animations and unique styling. Explore more about it below!
                    </div>
                    <div className='textbox textboxProjects'>
                    <Link className="subtitle pointer" to="QuotaMatePart" spy={true} smooth={true} duration={1000} ><div className="subtitle">Quotemate</div> </Link>                        QuoteMate simplifies insurance calculations. Quickly determine your damage costs and insurance coverage, making informed decisions effortlessly. Discover further details down below!

                    </div>
                </div>
                <div class="WaveWhislingoTop">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div className="Content">

                <div className="WishlingoPart">
                    <a className="ProjectImage" href="https://wishlingode.web.app/" target="_blank" rel="noopener noreferrer">
                        <img src={Wishlingo} alt="" />
                    </a>
                    <div className="ProjectText textbox textboxProjects">
                        <div className="subtitle">Wishlingo</div>
                        This is a Language Learn App where you can Learn any given Language and try to fill in the missing word in a sentence. The App has a backend which means the User can login and create his own tasks and can so learn them. This Project was made for a Coding Contest. You can visit it <a className="fancyText" href="https://wishlingode.web.app/" target="_blank" rel="noopener noreferrer">Here</a> and can also check out the code in the <a className="fancyText" href="https://github.com/David21092/Wishlingo" target="_blank" rel="noopener noreferrer">Git Repository</a>.
                    </div>
                </div>

                <div class="WishlingoNaturalDivider">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>

                <div className="NaturalAquaticsPart">
                    <a className="ProjectImage" href="https://backend-multimediapage.web.app/" target="_blank" rel="noopener noreferrer">
                        <img src={NatuaralAquatics} alt="" />
                    </a>
                    <div className="ProjectText textbox textboxProjects">
                        <div className="subtitle">Natural Aquatics</div>
                        This is a Multimedia Page for which the main Focus was using Unique Stylings like Parallax or using Photoshop to create and edit my own images and Display the differences betweet them. This was a Project in the Prog1 Module
                        You can visit it <a className="fancyText" href="https://backend-multimediapage.web.app/" target="_blank" rel="noopener noreferrer">Here</a> and can also check out the code in the <a className="fancyText" href="https://github.com/David21092/NaturalAquatics" target="_blank" rel="noopener noreferrer">Git Repository</a>.
                    </div>
                </div>

                <div class="NaturalQuotaDivider">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>

                <div className='QuotaMatePart'>
                    <a className="ProjectImage" href="https://david21092.github.io/Versicherungsrechner-React/" target="_blank" rel="noopener noreferrer">
                        <img src={QuoteMate} alt="" />
                    </a>
                    <div className="ProjectText textbox textboxProjects">
                        <div className="subtitle">QuoteMate</div>
                        This is a Site to calculate the coverage of the insurance in a case of Damages. The "Auftrag" was from the KBW to make a site where the user can calculate the coverage of House Damages. This was a Project in the Prog1 Module.
                        You can visit it <a className="fancyText" href="https://david21092.github.io/Versicherungsrechner-React/" target="_blank" rel="noopener noreferrer">Here</a> and can also check out the code in the <a className="fancyText" href="https://github.com/David21092/Versicherungsrechner-React/tree/master" target="_blank" rel="noopener  noreferrer">Git Repository</a>.
                    </div>
                </div>
                <div class="WorkingOnDivider">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>

            </div>
            <div className="newProjects">
                <div className="subtitleProjects CurrentlyWorkingOn">Currently Working on</div>
                <div className='flex-container CurrentlyWorkingOn' >

                    <div className='textbox textboxProjects' >
                        <div className="subtitle">Chat App</div>
                        A Simple chat App with which the user can comunicate with others and can maybe VideoCall. Its a Project for the Module Prog2. Git currently not available

                    </div>

                    <div className='textbox textboxProjects'>
                        <div className="subtitle">Ukraine News Site</div>
                        A News Site that has Multimedia features and is Interactive. It should display news About the War and infom people about the Backgrounds of the War Its a Project for the Subject PaW (Group Project). Git currently not available
                    </div>
                </div>
                <div class="FutureProjectsDivider">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className="newProjects">
                    <div className="subtitleProjects FutureProjects">Future Projects</div>
                    <div className='flex-container FutureProjects' >
                        <div className='textbox textboxProjects' >

                            <div className="subtitle">Onlie shop</div>
                           I would like to create a personal online shop to learn how the finace part of coing works and how the validation and check is handeled. 

                        </div>

                        <div className='textbox textboxProjects'>
                            <div className="subtitle">Something New</div>
                            Maybe you have an idea for a new Project or even a Job oportunity for something completley new. Contact me <a className="fancyText" href= "mailto:bischof.david.db@gmail.com" target="_blank" rel="noopener noreferrer">Here</a>.
                        </div>
                    </div>
                    <div class="EndDivider">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

