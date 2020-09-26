//students courses screen

import React from 'react';
import {ScrollView} from 'react-native';
import {CourseList} from '../Components/CourseList';

export class StuCoursesScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <CourseList />
      </ScrollView>
    );
  }
}
