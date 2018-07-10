import './App.scss';
import React from 'react';
import Character from '../Character';
import logo from '../../images/logo.png';

class App extends React.Component {
    constructor() {
        super();
        this.state = { episode: 'NEWHOPE' }
    }
    handleClickEpisode = episode => {
        this.setState({ episode: episode });
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Star Wars university with React Apollo</h1>
                </header>
                <div className="container">
                    <div className="left-area">
                        <h2>Choose episode</h2>
                        <div className={`sw-sidebar-episode ${this.state.episode === 'NEWHOPE' && 'choose'}`} onClick={() => this.handleClickEpisode('NEWHOPE')}>Episode IV</div>
                        <div className={`sw-sidebar-episode ${this.state.episode === 'EMPIRE' && 'choose'}`} onClick={() => this.handleClickEpisode('EMPIRE')}>Episode V</div>
                        <div className={`sw-sidebar-episode ${this.state.episode === 'JEDI' && 'choose'}`} onClick={() => this.handleClickEpisode('JEDI')}>Episode VI</div>
                    </div>
                    <div className="center-area"><Character episode={this.state.episode} /></div>
                    <div className="right-area"/>
                </div>
            </div>
        );
    }
}

export default App;
