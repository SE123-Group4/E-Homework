//teacher course details screen

import React from 'react';
import {CourseIntroCard} from '../Components/CourseIntroCard';
import {CourseFuncBtn} from '../Components/CourseFuncBtn';
import {Search} from '../Components/Search';
import {HomeworkList} from '../Components/HomeworkList';
import {ScrollView} from 'react-native';

export class TeaCourseScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <CourseIntroCard />
        <CourseFuncBtn />
        <Search />
        <HomeworkList />
      </ScrollView>
    );
  }
}
