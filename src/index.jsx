// Dans ce fichier nous importons tout les composants ainsi que nos routes afin de lier sur notre application React
// Nous importons entre autre le Header et le Footer qui restera identique sur l'ensemble de notre application
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import Propos from './pages/a-propos/apropos';
import Logement from './pages/logement';
import Error from './pages/404'
import Header from './components/header'
import Footer from './components/footer'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <Header/>
      <Routes>
        <Route exact path="/" element={<><Home /> </>}/>
        <Route path="/apropos" element={<><Propos /> </>}/>
        <Route path="/logement/:id" element={<Logement />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
)
