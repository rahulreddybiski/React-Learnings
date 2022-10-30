import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import MainContent from './MainContent';
import './main.css';


function App(){
  return (
    <div>
        <Header />
        <MainContent />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />)




