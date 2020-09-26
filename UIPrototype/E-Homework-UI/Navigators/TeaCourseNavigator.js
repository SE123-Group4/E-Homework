import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TeaCoursesScreen} from '../Screens/TeaCoursesScreen';
import {TeaCourseScreen} from '../Screens/TeaCourseScreen';

const Stack = createStackNavigator();

export class TeaCourseNavigator extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Stack.Navigator initialRouteName="TeaCourses">
        <Stack.Screen name="TeaCourses" component={TeaCoursesScreen} />
        <Stack.Screen name="TeaCourse" component={TeaCourseScreen} />
      </Stack.Navigator>
    );
  }
}
