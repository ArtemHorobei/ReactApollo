import './App.css';
import React from 'react';
import Character from '../Character';
import HeroQuery from '../HeroQuery';
import logo from '../../images/logo.png';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Star Wars university with React Apollo</h1>
            </header>
            <HeroQuery episode="EMPIRE">{result => <Character {...result} />}</HeroQuery>
        </div>
    );
};

export default App;
