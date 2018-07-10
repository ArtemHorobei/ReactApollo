import './Loader.css';
import React from 'react';

const Loader = () => {
    return (
        <div className="ball-loader">
            <span className="ball-loader-ball ball1"/>
            <span className="ball-loader-ball ball2"/>
            <span className="ball-loader-ball ball3"/>
        </div>
    );
};

export default Loader;
