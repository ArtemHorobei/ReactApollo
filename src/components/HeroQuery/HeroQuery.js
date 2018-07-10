import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { HERO_QUERY } from '../../query/query';

const propTypes = {
    episode: PropTypes.string,
    children: PropTypes.func,
};

const HeroQuery = ({ episode, children }) => (
    <Query
        query={HERO_QUERY}
        variables={{ episode }}
    >
        {
            (result) => {
                const { loading, error, data } = result;
                return children({
                    loading,
                    error,
                    hero: data && data.hero,
                });
            }
        }
    </Query>
);

HeroQuery.propTypes = propTypes;

export default HeroQuery;
