import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StuCoursesScreen} from '../Screens/StudentScreen/StuCoursesScreen';
import {StuCourseScreen} from '../Screens/StudentScreen/StuCourseScreen';

const Stack = createStackNavigator();

export class StuCourseNavigator extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Stack.Navigator initialRouteName="StuCourses">
        <Stack.Screen
          name="StuCourses"
          component={StuCoursesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StuCourse"
          component={StuCourseScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}
