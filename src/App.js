import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import "./styles/App.scss";
import Modelos from './components/Modelos/Modelos';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={(
              <CSSTransition classNames="fade-out" timeout={500}>
                <Header />
              </CSSTransition>
            )}
          />
          <Route path="/Modelos" element={<Modelos />} />
        </Routes>
       
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;
