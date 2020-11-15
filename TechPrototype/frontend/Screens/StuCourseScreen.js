import React from 'react';
import {ScrollView} from 'react-native';
import {CourseIntroCard} from '../Components/CourseIntroCard';
import {CourseFuncBtn} from '../Components/CourseFuncBtn';
import {Search} from '../Components/Search';
import {HomeworkList} from '../Components/HomeworkList';

export class StuCourseScreen extends React.Component {
  constructor() {
    super();
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
