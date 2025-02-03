import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './screens/log_in/Log_in';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: false }} // Hide the header for the login screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
