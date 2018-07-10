import React from 'react';
import { HERO_QUERY } from '../../query/query';
import { Query } from 'react-apollo';

const HeroQuery = ({ episode, children }) => (
    <Query
        query={HERO_QUERY}
        variables={{ episode }}>
        {
            result => {
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

export default HeroQuery;
