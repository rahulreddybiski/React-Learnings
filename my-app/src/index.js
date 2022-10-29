import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import CardComponent from './Usercards';
import './main.css';
/* import jokesdata from './Jokesdata';
import Jokes from './jokes'; */
import AirbngData from './AirbngData';

/* function App(){
  return(
      <div className='container'>
        <Header />
        <MainContent />
      </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <App />
)
 */

// **********************************************

/* simple employee ecard challenge project-completed */
/* function App(){
  return (
    <div className='container'>
      <Header />
      <MainContent />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />) */

// **************************************************

function App(){
  const imagesData = AirbngData.map(data => {
    return <CardComponent key = {data.id}
                          /* mainimg = {data.mainimg}
                          secondaryimage = {data.secondaryimage}
                          rating_image = {data.rating_image}
                          openspots = {data.openspots} */
                          {...data}
                          />
  })
  return (
    <div>
    
      <Header />
      {/* <MainContent /> */}
      <div className='usercards'>
      {imagesData}
     {/*  <CardComponent 
          mainimg = "./images/card1.jpg"
          secondaryimage = "./images/soldout.png"
          rating_image = "./images/rating1.png"
          
      />
      <CardComponent 
          mainimg = "./images/card2.png"
          secondaryimage = "./images/soldout.png"
          rating_image = "./images/rating2.png"
          
      />
      <CardComponent 
          mainimg = "./images/card3.png"
          secondaryimage = "./images/soldout.png"
          rating_image = "./images/rating3.png"

      />  */}
      </div>

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />)



