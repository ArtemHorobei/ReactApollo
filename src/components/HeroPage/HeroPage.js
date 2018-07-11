import './HeroPage.scss';
import Hero from './Hero';
import React from 'react';
import { withRouter } from 'react-router-dom';

const HeroPage = ({ match: { params } }) => {
    return <div><Hero id={params.id}/></div>
}

export default withRouter(HeroPage);
