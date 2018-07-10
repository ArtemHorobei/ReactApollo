import './Friend.scss';
import PropTypes from 'prop-types';
import React from 'react';
import avatarObject from '../../../helpers/avatarChooser';

const propTypes = {
    friend: PropTypes.object,
};

const Friend = ({ friend }) => {
    return (
        <div className="sw-character-friend-wrap" key={friend.id}>
            <img className="sw-character-friend-photo" src={avatarObject[friend.name]} />
            <span className="sw-character-name">{friend.name}:</span>
            {friend.appearsIn.map(item => item && item.toLowerCase().charAt(0).toUpperCase() + item.toLowerCase().slice(1)).join(', ')}
        </div>
    );
};

Friend.propTypes = propTypes;

export default Friend;
