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
    fragment additionalFieldsHuman on Human {
        height
        mass
        starships {
            id
            name
            length
        }
    }
    fragment additionalFieldsDroid on Droid {
        primaryFunction
    }
    query GetCharacter($id: ID!) {
        character(id: $id) {
            ...additionalFieldsHuman
            ...additionalFieldsDroid
            name
            id
            appearsIn
            friends {
                ...additionalFieldsHuman
                ...additionalFieldsDroid
                name
                id
                appearsIn
            }
        }
    }
`;
