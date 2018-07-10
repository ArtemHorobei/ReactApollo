import React from 'react';

const Character = ({ loading, error, hero }) => {
    if (loading) {
        return <div>Loading</div>;
    }
    if (error) {
        return <h1>ERROR</h1>;
    }
    return (
        <div>
            {hero &&
                    (
                        <div>
                            <h3>{hero.name}</h3>
                            {
                                hero.friends &&
                                    hero.friends.map(
                                    friend => friend && (
                                        <h6 key={friend.id}>
                                            {friend.name}: {friend.appearsIn.map(x => x && x.toLowerCase()).join(', ')}
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

export default Character;
