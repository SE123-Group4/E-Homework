import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TeaHomeScreen} from '../Screens/TeaHomeScreen';
import {AssignHwScreen} from '../Screens/AssignHwScreen';

const Stack = createStackNavigator();

export class TeaHomeNavigator extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Stack.Navigator initialRouteName="TeaHome">
        <Stack.Screen
          name="TeaHome"
          component={TeaHomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AssignHw"
          component={AssignHwScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}
