import './Hero.scss';
import avatarObject from '../../../helpers/avatarChooser';
import chewbacca from '../../../images/chewbacca.jpg';
import { graphql } from 'react-apollo';
import { CHARACTER_QUERY } from '../../../query/query';
import Loader from '../../Loader';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    hero: PropTypes.object,
};

const Hero = ({
    getCharacter: { loading, error, character },
}) => {
    if (loading) return <Loader />;
    if (error) return <div><h1>ERROR</h1><img src={chewbacca} alt="error"/></div>;
    const currentHero = character && (
            <div className="sw-character-main">
                <img
                    src={avatarObject[character.name]}
                    alt="characterPhoto"
                    className="sw-character-main-photo"
                />
                <h3>{character.name}</h3>
            </div>
        );
    return (
        <div>
            <div className="sw-character-wrap">
                {currentHero}
            </div>
        </div>
    );
};

Hero.propTypes = propTypes;

export default graphql(CHARACTER_QUERY, { name: 'getCharacter' })(Hero);
