import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import Feed from './pages/Feed';
import New from './pages/New';
import logo from './assets/logo.png';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: true}}>
        <AppStack.Screen
          name="Feed"
          component={Feed}
          options={{
            headerTitle: <Image style={{marginHorizontal: 20}} source={logo} />,
            headerTitleAlign: 'center',
            headerBackTitle: null,
          }}
          mode="modal"
        />
        <AppStack.Screen name="New" component={New} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
