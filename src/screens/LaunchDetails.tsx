import React from 'react';
import { View, Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_LAUNCH_DETAILS } from '../graphql/queries';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  LaunchDetails: { id: string };
};

type Props = {
  route: RouteProp<RootStackParamList, 'LaunchDetails'>;
};

export default function LaunchDetails({ route }: Props) {
  const { id } = route.params;

  const { loading, error, data } = useQuery(GET_LAUNCH_DETAILS, {
    variables: { id },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading launch details: {error.message}</Text>;

  const { mission_name, launch_date_utc, rocket, details } = data.launch;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{mission_name}</Text>
      <Text>Date: {new Date(launch_date_utc).toLocaleString()}</Text>
      <Text>Rocket: {rocket.rocket_name}</Text>
      <Text style={{ marginTop: 10 }}>{details || 'No details available'}</Text>
    </View>
  );
}
