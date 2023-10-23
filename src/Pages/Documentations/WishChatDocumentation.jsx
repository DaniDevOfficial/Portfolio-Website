import React from "react"
import Wishchat from '../../Images/ActualImages/WishchatWithBackground.png'
import "../../Css/Documentation.css"
export function WishChatDocumentation() {

    return (
        <div className="CenterContent">
            <div className="FirstDocumentContainer">
                <div className="Title">WishChat</div>
                <img className="LogoDocumentation" src={Wishchat} alt="wasd" />


                <div className="ShortDescription">
                    <div className="Author">
                        Created by: David Bischof
                    </div>
                </div>
            </div>
            <div className="DescriptionAndWhyContainer">
                <div className="DescriptionContainer">
                    <div className="Subtitle">
                        Description
                    </div>
                    <div className="Text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vero saepe tempore recusandae adipisci delectus aperiam? Veniam aliquid praesentium saepe, sequi, consequuntur quidem nam nesciunt voluptatem sapiente rem blanditiis nisi!
                    </div>
                </div>
            </div>
        </div>

    );
}