
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

export default function MainContent(){
    
    let source;
    function handleClick(){
        let randomNumber  = Math.floor(Math.random() * 100);
        // console.log(memedata.data.memes[randomNumber].url)
        source = memedata.data.memes[randomNumber].url;
        console.log(source)
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
                <button onClick={handleClick} type="submit" className="btn">Get a new meme image</button>
                <img src={source} className="meme-image"></img>
          </div>
        </div>
    )
}

