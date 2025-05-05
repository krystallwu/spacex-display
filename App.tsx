import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloWrapper } from './src/ApolloProvider';
import LaunchList from './src/screens/LaunchList';
import LaunchDetails from './src/screens/LaunchDetails';

type RootStackParamList = {
  Launches: undefined;
  LaunchDetails: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ApolloWrapper>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Launches" component={LaunchList} />
          <Stack.Screen name="LaunchDetails" component={LaunchDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloWrapper>
  );
}
