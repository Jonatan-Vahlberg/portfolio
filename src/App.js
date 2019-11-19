import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';

const App = () => {
    return (
        <div className='App'>
            <Navbar />;
            <div className='App-Header'>
                <Header />
                <About />
                <Projects />
                <Contact />
            </div>
        </div>
    );
};

export default App;
