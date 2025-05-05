import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GET_LAUNCHES } from '../graphql/queries';

type RootStackParamList = {
  Launches: undefined;
  LaunchDetails: { id: string };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Launches'>;

export default function LaunchList() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  const navigation = useNavigation<NavigationProp>();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <FlatList
        data={data.launchesPast}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('LaunchDetails', { id: item.id })}
            style={{ padding: 16, borderBottomWidth: 1 }}
          >
            <Text style={{ fontWeight: 'bold' }}>{item.mission_name}</Text>
            <Text>{new Date(item.launch_date_utc).toLocaleString()}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
