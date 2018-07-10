import PropTypes from 'prop-types';
import React from 'react';
import Loader from '../Loader';

const propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    hero: PropTypes.object,
};

const Character = ({ loading, error, hero }) => {
    if (loading) {
        return <Loader />;
    }
    if (error) {
        return <h1>ERROR</h1>;
    }
    return (
        <div>
            {hero
                    && (
                        <div>
                            <h3>
                                {hero.name}
                            </h3>
                            {
                                hero.friends
                                    && hero.friends.map(
                                        friend => friend && (
                                            <h6 key={friend.id}>
                                                {friend.name}
:
                                                {friend.appearsIn.map(item => item && item.toLowerCase()).join(', ')}
                                            </h6>
                                        ),
                                    )
                            }
                        </div>
                    )
            }
        </div>
    );
};

Character.propTypes = propTypes;

export default Character;
