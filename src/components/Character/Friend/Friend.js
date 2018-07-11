import './Friend.scss';
import avatarObject from '../../../helpers/avatarChooser';
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    friend: PropTypes.object,
};

const Friend = ({ friend }) => {
    return (
        <Link to={`hero/${friend.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className="sw-character-friend-wrap">
                    <img className="sw-character-friend-photo" src={avatarObject[friend.name]} alt="characterPhoto" />
                    <span className="sw-character-name">{friend.name}:</span>
                    {friend.appearsIn.map(item => item && item.toLowerCase().charAt(0).toUpperCase() + item.toLowerCase().slice(1)).join(', ')}
            </div>
        </Link>
    );
};

Friend.propTypes = propTypes;

export default Friend;
