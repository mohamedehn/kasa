import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import Propos from './pages/apropos';
import Logement from './pages/logement';
import Error from './pages/404'
import Header from './components/header'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/apropos" element={<Propos />}/>
        <Route path="/logement" element={<Logement />}/>
        <Route path="/error" element={<Error />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
