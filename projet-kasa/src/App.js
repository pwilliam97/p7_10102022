//Importation de REACT
import React from 'react';
import {Routes, Route} from 'react-router-dom'

//Importation des Pages
import Home from './pages/Home.jsx'
import FicheLogement from './pages/Fiche_Logement.jsx'
import Error from './pages/Error.jsx'
import Propos from './pages/A_Propos.jsx'

//Importation des components 
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

//Importation du CSS 
import './styles/Style/Style.css'
import './styles/Main/Main.css'

function App() {
  return (
    <div className="container">
        <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/fichelogement/:logementId" element={<FicheLogement/>}/>
          <Route path="/apropos" element={<Propos/>}/>     
          <Route path="/*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
