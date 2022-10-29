
// import employee from "./images/employee.jpg"
import logo from "./airbnblogo.png"
/* function Header(){
    return (
        <nav className="nav-items">
            <img src={logo} className="logo" width="60px" alt=""></img>
            <h3 className="nav-title">ReactFacts</h3>
            <h4 className="nav-description">React Course - Project 1</h4>
        </nav>
    )
}

export default Header; */


//simple static employee card challenge 
/* function Header(){
    return (
        <div className="info">
            <img src={employee} className="personimage"></img>
            <h3 className="personname">Angel</h3>
            <small>Software engineer</small>
            <div className="moreinfo">
                <button className="Email btn">Email</button>
                <button className="LinkedIn btn">LinkedIn</button>
            </div>
        </div>
    )
}


export default Header; */


export default function Header(){
    return (
        <nav>
            <img src={logo} className="logo"></img>
        </nav>
    )
}
