import React from 'react';
import './App.css';
//import TopPart from './Top_part';
//import Filling from './Filling';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Dialogs from './Components/Dialogs/Dialogs';
const App = ()=>{
  return (
    <div className="general">
     <Header/>
     <Navigation/>
     {/*<Main>*/}
     <div className="WrapContent">
     <Dialogs/>
     </div>
     <Footer/>
     

    </div>    
  );
}

export default App;
