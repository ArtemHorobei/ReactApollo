import gql from 'graphql-tag';

export const HERO_QUERY = gql`
  query GetCharacter($episode: Episode!) {
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
