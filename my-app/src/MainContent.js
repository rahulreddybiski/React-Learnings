
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
    const title = "Online Experiences";
    return (
        <div className="maincontent">
            <div className="maincontent-image">
                <img src={bg_image} className="bg-image"></img>
            </div>
            <div className="maincontent-body">
                <h1 className="main-title">{title}</h1>
                <p>join unique interactive activities led by one-of-a-kind-hosts--all thout leaving home.</p>
            </div>

        </div>
    )
}

