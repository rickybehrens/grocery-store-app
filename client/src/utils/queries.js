import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      }
    }
  }
`;

export const QUERY_ITEM = gql`
query item($itemname: String!) {
  _id
  itemname
}
`