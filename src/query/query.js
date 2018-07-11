import gql from 'graphql-tag';

export const EPISODE_QUERY = gql`
    query GetEpisode($episode: Episode) {
        hero(episode: $episode) {
            name
            id
            friends {
                name
                id
                appearsIn
            }
        }
    }
`;

export const CHARACTER_QUERY = gql`
    fragment additionalFields on Human {
        height
        mass
        starships {
            id
        }
    }
    query GetCharacter($id: ID!) {
        character(id: $id) {
            ...additionalFields
            name
            id
            friends {
                name
                id
                appearsIn
            }
        }
    }
`;
