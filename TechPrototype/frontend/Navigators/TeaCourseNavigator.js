import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TeaCoursesScreen} from '../Screens/TeacherScreen/TeaCoursesScreen';
import {TeaCourseScreen} from '../Screens/TeacherScreen/TeaCourseScreen';
import {AddCourseScreen} from '../Screens/TeacherScreen/AddCourseScreen';
import {ImportStuScreen} from '../Screens/TeacherScreen/ImportStuScreen';

const Stack = createStackNavigator();

export class TeaCourseNavigator extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Stack.Navigator initialRouteName="TeaCourses">
        <Stack.Screen
          name="TeaCourses"
          component={TeaCoursesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TeaCourse"
          component={TeaCourseScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddCourse"
          component={AddCourseScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ImportStu"
          component={ImportStuScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}
