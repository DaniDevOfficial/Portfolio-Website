import React from "react"
import Wishchat from '../../Images/ActualImages/WishchatWithBackground.png'
import { FaGithub, FaLink } from 'react-icons/fa';
import WishChatSketch from '../../Images/ActualImages/WishChatSketch.png'
import "../../Css/Documentation.css"
export function WishChatDocumentation() {

    return (
        <div className="CenterContent">
            <div className="FirstDocumentContainer">
                <div className="Title">WishChat</div>
                <img className="LogoDocumentation" src={Wishchat} alt="wasd" />


                <div className="ShortDescription">
                    <div className="LeftSection">

                        <div className="Author">
                            Created by: <a href="https://github.com/DaniDevOfficial" target="_blank" className="LinkIcon">David Bischof </a>

                        </div>
                        <div className="ReleaseDate">
                            Release Date: Soon
                        </div>
                    </div>
                    <div className="RightSection">
                        <div className="GitHubLink">
                            <a href="https://github.com/DaniDevOfficial/WishChat" target="_blank" className="LinkIcon"><FaGithub className="Icon" /> </a>
                        </div>
                        <div className="HostedSiteLink">
                            <a FaGithuba href="https://wishchatprog2.web.app/" target="_blank" className="LinkIcon"><FaLink className="Icon" /> </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="DescriptionAndWhyContainer">
                <div className="DescriptionContainer">
                    <div className="Subtitle">
                        Description
                    </div>
                    <div className="Text">
                        WishChat is a messaging app that allows you to send text messages and images to others. It uses Firebase for storage and hosting, ensuring your messages and images are safely stored and easily accessible. With WishChat, you can have real-time conversations with your friends and family, making it a convenient and reliable way to stay connected.
                    </div>
                </div>
            </div>
            <div className="PlaningAndIdea">
                <div className="Idea">
                    <div className="Subtitle">
                        Idea
                    </div>
                    <div className="Text">
                        <img src={WishChatSketch} alt="Image" className="ImageInText" />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nam fuga placeat maiores cupiditate quis sunt mollitia soluta culpa repellat beatae cum, odio blanditiis! Maiores perspiciatis non beatae nulla cumque odio laboriosam qui saepe aperiam, sunt quibusdam delectus minus. A maiores, molestias voluptates molestiae quod, aut odio, ad voluptas obcaecati pariatur aliquam reprehenderit libero culpa enim. Placeat ratione laudantium repellendus earum accusantium illo aspernatur mollitia iure ex quia perferendis natus voluptatum, quidem quisquam error expedita illum animi, iste distinctio eius? Officia eos sunt illum quam sit porro quae incidunt possimus, error ab quis, a quasi aspernatur maxime eius facere voluptas?
                    </div>
                </div>
                <div className="Planing">
                    <div className="Subtitle">
                        Planing and Development
                    </div>
                    <div className="Text">
                        <div className="Paragraph">
                        I started on the development of WishChat due to a task in school of creating a simple messaging application, working on it solo. I began by setting up the foundation using Firebase for data storage and real-time messaging. This initial phase was essential for building a dynamic platform for seamless user interaction.
                        </div>
                        <div className="Paragraph">
                        As the project progressed, I wanted to switch from the firebase given backend to something i created myself. Following that, I decided to transition to an Express.js backend, allowing me to have more control over server connections and data handling.

                        </div>
                        <div className="Paragraph">
                        During the development journey, I found myself constantly switching  between two key aspects of the project: the app's visual design and its functionality. This approach enabled me to maintain a good balance between creating an appealing and user-friendly interface and ensuring the app worked correctly.

                        </div>
                        <div className="Paragraph">
                        Developing WishChat has been a leghty process, where I adapted to changing requirements and developed new features as needed. This solo project has been an exciting, using different technologies together with a creative GUI-design for a real-time messaging app.
                        </div>
                    </div>
                </div>
            </div>
            <div className="LearntAndTechStack">
                <div className="Leant">
                    <div className="Subtitle">
                        What I learnt
                    </div>
                    <div className="Text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nam fuga placeat maiores cupiditate quis sunt mollitia soluta culpa repellat beatae cum, odio blanditiis! Maiores perspiciatis non beatae nulla cumque odio laboriosam qui saepe aperiam, sunt quibusdam delectus minus. A maiores, molestias voluptates molestiae quod, aut odio, ad voluptas obcaecati pariatur aliquam reprehenderit libero culpa enim. Placeat ratione laudantium repellendus earum accusantium illo aspernatur mollitia iure ex quia perferendis natus voluptatum, quidem quisquam error expedita illum animi, iste distinctio eius? Officia eos sunt illum quam sit porro quae incidunt possimus, error ab quis, a quasi aspernatur maxime eius facere voluptas?
                    </div>
                </div>
                <div className="TechStack">
                    <div className="Subtitle">
                        TechStack
                    </div>
                    <div className="Text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem id ullam ex temporibus qui fuga perferendis esse, eligendi reiciendis. Ullam, ad? Similique quas nemo vel animi laudantium, non numquam vero cumque rem aliquid neque doloremque consequatur dolores eligendi? Quidem nihil aliquid, aliquam illo harum sunt incidunt voluptatem quae esse. Dolore similique, ab error autem ut a tempore itaque. Excepturi, molestias culpa? Blanditiis, error exercitationem! Vel ullam tenetur optio! Nam neque maiores nostrum veritatis asperiores. Sit doloremque ad facere similique cumque, quasi incidunt rerum tenetur, repellat, voluptatibus vel? Laboriosam ipsa voluptatem recusandae distinctio, harum quas nemo nesciunt, iste explicabo et in!
                    </div>
                </div>
            </div>
        </div>

    );
}