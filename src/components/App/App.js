import './App.scss';
import { Switch, Route } from 'react-router-dom';
import EpisodePage from '../EpisodePage';
import HeroPage from '../HeroPage';
import logo from '../../images/logo.png';
import React from 'react';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Star Wars university with React Apollo</h1>
            </header>
            <div style={{ padding: '15px' }}>
                <Switch>
                    <Route exact path="/" component={EpisodePage} />
                    <Route exact path="/hero/:id" component={HeroPage} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
