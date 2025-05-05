import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_utc
    }
  }
`;

export const GET_LAUNCH_DETAILS = gql`
  query GetLaunchDetails($id: ID!) {
    launch(id: $id) {
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
      details
    }
  }
`;
