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
  query GetCharacter($id: ID!) {
    character(id: $id) {
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
