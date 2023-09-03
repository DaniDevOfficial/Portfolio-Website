// Pages and Comps
import '../Css/Projects.css'

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
                    wasd
                </div>
                <div class="WaveNaturalWishlingo">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className="NaturalAquaticsPart">
                    wasd
                </div>
                <div class="custom-shape-divider-top-1693778535">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className='QuotaMatePart'>
                    asd
                </div>


            </div>
        </div>
    );
}

