import React from 'react';
import {Container, Content} from 'native-base';
import {CourseIntroCard} from '../../Components/CourseIntroCard';
import {CourseFuncBtn} from '../../Components/CourseFuncBtn';
import {Search} from '../../Components/Search';
import {StuHomeworkList} from '../../Components/StuHomeworkList';

export class StuCourseScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <Content>
          <CourseIntroCard courseID={this.props.route.params.courseID} />
          {/*<CourseFuncBtn />*/}
          <Search />
          <StuHomeworkList
            navigation={this.props.navigation}
            courseID={this.props.route.params.courseID}
          />
        </Content>
      </Container>
    );
  }
}
