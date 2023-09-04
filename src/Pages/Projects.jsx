// Pages and Comps
import '../Css/Projects.css'
import Wishlingo from '../Images/Wishlingo.png'
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
                        <div className="subtitle">Wishlingo</div>
                        Wishlingo is a user-friendly language learning app that allows you to complete sentences in your chosen language by filling in missing words. Learn more by diving deeper below!
                    </div>

                    <div className='textbox textboxProjects'>
                        <div className="subtitle">Natural Aquatics</div>
                        Natural Aquatics is your online destination for premium water subscriptions, presented in a multimedia format with engaging animations and unique styling. Explore more about it below!
                    </div>
                    <div className='textbox textboxProjects'>
                        <div className="subtitle">QuoteMate</div>
                        QuoteMate simplifies insurance calculations. Quickly determine your damage costs and insurance coverage, making informed decisions effortlessly. Discover further details down below!

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
                    <div className="ProjectImage">
                        <img src={Wishlingo} alt="" />
                    </div>
                    <div className="ProjectText textbox textboxProjects">
                    <div className="subtitle">Wishlingo</div>
                        This is a Language Learn App where you can Learn any given Language and try to fill in the missing word in a sentence. The App has a backend which means the User can login and create his own tasks and can so learn them. This Project was made for a Coding Contest. You can visit it <a className="fancyText" href="https://wishlingode.web.app/" target="_blank" rel="noopener noreferrer">Here</a> and can also check out the code in the <a className="fancyText" href="https://github.com/David21092/Wishlingo" target="_blank" rel="noopener noreferrer">Git Repository</a>.
                    </div>
                </div>
                <div class="WaveNaturalWishlingo">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className="NaturalAquaticsPart">
                <div className="ProjectImage">
                        <img src={Wishlingo} alt="" />
                    </div>
                    <div className="ProjectText textbox textboxProjects">
                    <div className="subtitle">Natural Aquatics</div>
                        This is a Multimedia Page for which the main Focus was using Unique Stylings like Parallax or using Photoshop to create and edit my own images and Display the differences betweet them. This was a Project in the Prog1 Module
                         You can visit it <a className="fancyText" href="https://backend-multimediapage.web.app/" target="_blank" rel="noopener noreferrer">Here</a> and can also check out the code in the <a className="fancyText" href="https://github.com/David21092/NaturalAquatics" target="_blank" rel="noopener noreferrer">Git Repository</a>.
                    </div>
                </div>
                <div class="custom-shape-divider-top-1693778535">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className='QuotaMatePart'>
                <div className="ProjectImage">
                        <img src={Wishlingo} alt="" />
                    </div>
                    <div className="ProjectText textbox textboxProjects">
                    <div className="subtitle">QuoteMate</div>
                        This is a Site to calculate the coverage of the insurance in a case of Damages. The "Auftrag" was from the KBW to make a site where the user can calculate the coverage of House Damages. This was a Project in the Prog1 Module.
                         You can visit it <a className="fancyText" href="https://wishlingode.web.app/" target="_blank" rel="noopener noreferrer">Here</a> and can also check out the code in the <a className="fancyText" href="https://github.com/David21092/Wishlingo" target="_blank" rel="noopener  noreferrer">Git Repository</a>. /**Bilder und Links ändert */
                    </div>
                </div>


            </div>
        </div>
    );
}

