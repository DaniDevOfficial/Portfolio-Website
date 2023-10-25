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
                            Created by: David Bischof
                        </div>
                        <div className="ReleaseDate">
                            Release Date: Soon
                        </div>
                    </div>
                    <div className="RightSection">
                        <div className="GitHubLink">
                            <a href="https://github.com/David21092/WishChat" target="_blank" className="LinkIcon"><FaGithub className="Icon" /> </a>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nam fuga placeat maiores cupiditate quis sunt mollitia soluta culpa repellat beatae cum, odio blanditiis! Maiores perspiciatis non beatae nulla cumque odio laboriosam qui saepe aperiam, sunt quibusdam delectus minus. A maiores, molestias voluptates molestiae quod, aut odio, ad voluptas obcaecati pariatur aliquam reprehenderit libero culpa enim. Placeat ratione laudantium repellendus earum accusantium illo aspernatur mollitia iure ex quia perferendis natus voluptatum, quidem quisquam error expedita illum animi, iste distinctio eius? Officia eos sunt illum quam sit porro quae incidunt possimus, error ab quis, a quasi aspernatur maxime eius facere voluptas?
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