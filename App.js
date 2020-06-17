import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/screen/main';
import Pin from './src/screen/pin';
import AccountDetail from './src/screen/account-detail';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={0x00000000} />
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Pin" headerMode="none">
        <Stack.Screen name='Pin' component={Pin} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="AccountDetail" component={AccountDetail} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
