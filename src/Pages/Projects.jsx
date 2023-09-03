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

            </div>
            <div className="Content">
                <div className="WishlingoPart">

                </div>
                <div className="NaturalAquaticsPart">

                </div>
                <div className='QuotaMatePart'>
                    
                </div>
                

            </div>
        </div>
    );
}

