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
                        <div className="Paragraph">

                            The main idea behind WishChat was to create a chat app that allows users to send not only text messages but also images and possibly audio messages, making communication more versatile and expressive.
                        </div>
                        <div className="Paragraph">

                            Initially, I planned to use Firebase as the backend to handle real-time messaging and data storage. However, due to the given requirements changed it to use a custom backend using Express.js.
                        </div>
                        <div className="Paragraph">
                            I wanted the visual part to look like a familiar Layout, so i chose to look at other Chat App and get inspired by their GUI and UX aproaches.
                        </div>
                        <div className="Paragraph">

                            This approach aimed to provide a foundation for a dynamic chat platform that could support various media types and ensure smooth user interactions.

                        </div>
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
                <div className="Learned">
                    <div className="Subtitle">
                        What I Learned
                    </div>
                    <div className="Text">
                        <div className="Paragraph">
                            During the development of WishChat, I learned a lot of new thigns. I fist experimented with the usage of Firebase and the smart utalisation of JSON objects for clean data storage of messages. This experience taught me how to create a responsive and real-time messaging system, enhancing my understanding of Firebase's capabilities and where else it could be used.
                        </div>
                        <div className="Paragraph">
                            In addition, I leaned more about Express.js and its usefull API features. I discovered how to use Express.js to improve my ability to create a custom backend and manage server connections. This transition also led me to learn about Socket.io which enables real-time communication and data synchronization between the backend and the frontend.
                        </div>
                        <div className="Paragraph">
                            All in all, WishChat provided a important learning experience, helping to understand Firebase, JSON data storage, Express.js, and Socket.io, way better which are all important tools for creating realtime Apps in the Web. But the most i leaned about Express.js because i never really was interested in it before and i was kinda forced  in this project to learn it.
                        </div>
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