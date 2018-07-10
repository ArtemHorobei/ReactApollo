import './Character.scss';
import PropTypes from 'prop-types';
import React from 'react';
import Friends from './Friends';
import Loader from '../Loader';
import avatarObject from '../../helpers/avatarChooser';
import episodeObject from '../../helpers/episodeChooser';
import chewbacca from '../../images/chewbacca.jpg';

const propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    hero: PropTypes.object,
    episode: PropTypes.string,
};

const Character = ({
    loading, error, hero, episode,
}) => {
    if (loading) return <Loader />;
    if (error) return <div><h1>ERROR</h1><img src={chewbacca} alt="error"/></div>;
    const currentHero = hero && (
        <div className="sw-character-main">
            <img
                src={avatarObject[hero.name]}
                className="sw-character-main-photo"
            />
            <h3>{hero.name}</h3>
        </div>
    );
    return (
        <div>
            <h2>{episodeObject[episode]}</h2>
            <div className="sw-character-wrap">
                {currentHero}
                {hero && hero.friends && <Friends friends={hero.friends} />}
            </div>
        </div>
    );
};

Character.propTypes = propTypes;

export default Character;
