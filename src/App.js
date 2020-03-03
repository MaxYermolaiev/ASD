import React from 'react';
import './App.css';
//import TopPart from './Top_part';
//import Filling from './Filling';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Header from './Components/Header';

const App = ()=>{
  return (
    <div className="general">
     <Header/>
     <Main/>
     <Footer/>

    </div>    
  );
}

export default App;
