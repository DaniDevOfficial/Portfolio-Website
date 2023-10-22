import React from "react"
import Wishchat from '../../Images/ActualImages/WishchatWithBackground.png'
import "../../Css/Documentation.css"
export function WishChatDocumentation() {

    return (
                <div className="CenterContent"> {/* Added a new class for centering content */}
                    <div className="Title">WishChat</div>
                    <img className="LogoDocumentation" src={Wishchat} alt="wasd" />


                    <div className="ShortDescription">
                    <div className="Author">
                        Created by: David Bischof
                    </div>
                    </div>
                </div>

    );
}