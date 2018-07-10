import './Friends.scss';
import PropTypes from 'prop-types';
import React from 'react';
import Friend from '../Friend';

const propTypes = {
    friends: PropTypes.array,
};

const Friends = ({ friends }) => {
    const heroFriends = friends && friends.map(friend => <Friend friend={friend} />);
    return (
        <div className="sw-character-friends-wrap">
            <span className="sw-character-friends-title">Friends</span>
            <div className="sw-character-friends">{heroFriends}</div>
        </div>
    );
};

Friends.propTypes = propTypes;

export default Friends;
