import './Character.scss';
import avatarObject from '../../helpers/avatarChooser';
import chewbacca from '../../images/chewbacca.jpg';
import { EPISODE_QUERY } from '../../query/query';
import episodeObject from '../../helpers/episodeChooser';
import Friends from './Friends';
import { graphql } from 'react-apollo';
import Loader from '../Loader';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    hero: PropTypes.object,
    episode: PropTypes.string,
};

const Character = ({
    getEpisode: { loading, error, hero }, episode,
}) => {
    if (loading) return <Loader />;
    if (error) return <div><h1>ERROR</h1><img src={chewbacca} alt="error"/></div>;
    const currentHero = hero && (
        <Link to={`hero/${hero.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className="sw-character-main">
                <img
                    src={avatarObject[hero.name]}
                    alt="characterPhoto"
                    className="sw-character-main-photo"
                />
                <h3>{hero.name}</h3>
            </div>
        </Link>
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

export default graphql(EPISODE_QUERY, { name: 'getEpisode' })(Character);
