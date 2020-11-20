//teacher course details screen

import React from 'react';
import {CourseIntroCard} from '../Components/CourseIntroCard';
import {CourseFuncBtn} from '../Components/CourseFuncBtn';
import {Search} from '../Components/Search';
import {ScrollView} from 'react-native';
import {Container} from 'native-base';
import {TeaHomeworkList} from '../Components/TeaHomeworkList';

export class TeaCourseScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <Container>
          <CourseIntroCard courseID={this.props.route.params.courseID} />
          <CourseFuncBtn navigation={this.props.navigation} />
          <Search />
          <TeaHomeworkList courseID={this.props.route.params.courseID} />
        </Container>
      </ScrollView>
    );
  }
}
