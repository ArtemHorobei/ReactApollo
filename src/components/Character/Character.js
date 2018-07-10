import PropTypes from 'prop-types';
import React from 'react';
import Loader from '../Loader';
import luke from '../../images/luke.jpg';
import chewbacca from '../../images/chewbacca.jpg';

const propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    hero: PropTypes.object,
};

const Character = ({ loading, error, hero }) => {
    if (loading) return <Loader />;
    if (error) return <div><h1>ERROR</h1><img src={chewbacca} alt="error"/></div>;
    const heroFriends = hero && hero.friends && (
        hero.friends.map(
            friend => friend && (
                <h6 key={friend.id}>
                    {friend.name}
              :
                    {friend.appearsIn.map(item => item && item.toLowerCase()).join(', ')}
                </h6>
            ),
        )
    );
    const currentHero = hero && (
        <div>
            <h3>{hero.name}</h3>
            <img
                style={{
                    width: '90px', height: '90px', objectFit: 'cover', borderRadius: '50%',
                }}
                src={luke}
            />
        </div>
    );
    return (
        <div className="sw-character-wrap">
            {currentHero}
            {heroFriends}
        </div>
    );
};

Character.propTypes = propTypes;

export default Character;
