import './EpisodePage.scss';
import Character from '../Character';
import React from 'react';

class EpisodePage extends React.Component {
    constructor() {
        super();
        this.state = { episode: 'NEWHOPE' }
    }
    handleClickEpisode = episode => {
        this.setState({ episode: episode });
    }
    render() {
        return (
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
        )

    }

}

export default EpisodePage;
