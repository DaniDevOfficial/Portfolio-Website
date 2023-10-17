import React from "react"
import Wishchat from '../../Images/ActualImages/WishchatWithBackground.png'
export function WishChatDocumentation() {

    return (
        <>
            <div className="DocumentationContainer">
                <div className="DocumentationWrapper">

                    <div className="Title">WishChat</div>
                    <img src={Wishchat} alt="wasd" />
                    <div className="LinksAndAuthorContainer">
                        <div className="Author">
                            Created by: David Bischof
                        </div>  
                        <div className="Links">

                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}