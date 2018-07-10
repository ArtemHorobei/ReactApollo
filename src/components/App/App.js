import './App.scss';
import EpisodePage from '../EpisodePage';
import HeroPage from '../HeroPage';
import logo from '../../images/logo.png';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Star Wars university with React Apollo</h1>
                </header>
                <Switch>
                    <Route path="/" component={EpisodePage} />
                    <Route path="/hero/:id" component={HeroPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
