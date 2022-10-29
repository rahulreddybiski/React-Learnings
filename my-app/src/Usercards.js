import React from "react";
/* import card1 from "./images/card1.jpg";
import soldout from "./images/soldout.png";
import rating1 from "./images/rating1.png" */

export default function CardComponent(props){ 

    let badge = false;
    if(props.openspots === 0){
        badge = true
    }
       /*  const {mainimg:mainImage} = props;
        const {secondaryimage : subImage} = props;
        const {rating_image : ratingImage} = props; */
    return (
        
        <div className="usercards">
            <div className="card1">
                <div className="card-images">
                <img src={props.mainimg} alt="mypic" className="main-image"></img>
                {badge && <img src={props.secondaryimage} className="soldout-image"></img>}
                </div>
                <div className="raings">
                    <img src={props.rating_image} className="rating1"></img>
                </div>
            </div>
            
        </div>

        
    )
}