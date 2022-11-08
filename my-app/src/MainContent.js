
import image from "./airbndbg.jpg";
import memedata from "./memedata";
/* function MainContent(){
    return(
        <div className="main container">
            <h1>
                Fun facts about react
            </h1>
            <ul className="mainlist-items">
                <li>React is the open source JS library with great community support</li>
                <li>It si released in 2013 and still at the top</li>
                <li>It is maintained by Facebook</li>
            </ul>
        </div>
    )
}

export default MainContent; */

//simple emoplyee card project-completed

/* function MainContent(){
    return (
        <div className="maincontent">
            <h3>About</h3>
            <p>This is about section and contains about the employee</p>
        </div>
    )
}

export default MainContent; */

import bg_image from "./airbndbg.jpg"
import React from "react";

export default function MainContent(){

    const [meme,setMeme] = React.useState(
        {
            topText : "",
            bottomText : " ",
            randomImage : "https://i.imgflip.com/30b1gx.jpg"
        }
    )
    
    
    const [allMemeImages,setallMemeImages] = React.useState(
        memedata
    )
    
    
    
    
    function getMemeImage(){
        const memearray = allMemeImages.data.memes;
        const random = Math.floor(Math.random() * 99)

        setMeme(prev => {
            return {
                ...prev,
                randomImage : memearray[random].url
            }
        })
    }
    

    return (
        <div className="maincontent">
          <div className="form-content">
                <div className="input-fields">
                    <input type="text" 
                           className="input1" 
                           placeholder="top text field"></input>
                    <input type="text" 
                           className="input2" 
                           placeholder="bottom text field"></input>
                </div>
                <button onClick={getMemeImage} type="submit" className="btn">{"Get a new meme image"}</button>
                <img src={meme.randomImage} className="meme-image"></img>
          </div>
        </div>
    )
}

