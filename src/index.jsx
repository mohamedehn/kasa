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
import Section from './components/banner'
import Card from './components/card'
import Banner from './components/banner-apropos'
import Collaps from './components/collaps'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <Header/>
      <Routes>
        <Route exact path="/" element={<><Home /> <Section /> <Card /></>}/>
        <Route path="/apropos" element={<><Propos /> <Banner /> <Collaps/></>}/>
        <Route path="/logement" element={<Logement />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
)
