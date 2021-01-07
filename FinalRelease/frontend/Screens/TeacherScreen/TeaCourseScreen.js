//teacher course details screen

import React from 'react';
import {CourseIntroCard} from '../../Components/CourseIntroCard';
import {CourseFuncBtn} from '../../Components/CourseFuncBtn';
import {Search} from '../../Components/Search';
import {ScrollView} from 'react-native';
import {Container, Content} from 'native-base';
import {TeaHomeworkList} from '../../Components/TeaHomeworkList';
import {SearchFilter} from '../../Components/SearchFilter';

export class TeaCourseScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Content>
          <CourseIntroCard courseID={this.props.route.params.courseID} />
          <CourseFuncBtn
            navigation={this.props.navigation}
            courseID={this.props.route.params.courseID}
          />

          <TeaHomeworkList
            courseID={this.props.route.params.courseID}
            navigation={this.props.navigation}
          />
        </Content>
      </Container>
    );
  }
}
