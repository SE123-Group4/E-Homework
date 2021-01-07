//teacher course details screen

import React from 'react';
import {CourseIntroCard} from '../../Components/CourseIntroCard';
import {CourseFuncBtn} from '../../Components/CourseFuncBtn';
import {Search} from '../../Components/Search';
import {ScrollView, StyleSheet} from 'react-native';
import {Body, Card, CardItem, Container, Content, Text} from 'native-base';
import {TeaHomeworkList} from '../../Components/TeaHomeworkList';
import {SearchFilter} from '../../Components/SearchFilter';
import {getCourseByID} from '../../Service/CourseService';

export class TeaCourseScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      refresh: false,
      CourseDetails: {
        name: '课程 1',
        teacher: '老师 1',
        introduction: '这是课程 1 的简介。',
        book: '参考书籍 1',
      },
    };
  }

  componentDidMount() {
    console.log('courseID: ', this.props.courseID);
    const callback = (data) => {
      this.setState({CourseDetails: data});
    };
    getCourseByID(this.props.route.params.courseID, callback);
  }

  render() {
    return (
      <Container>
        <Content>
          {/*<CourseIntroCard courseID={this.props.route.params.courseID} />*/}
          <Card>
            <CardItem header>
              <Body>
                <Text style={styles.name}>{this.state.CourseDetails.name}</Text>
                <Text note>{this.state.CourseDetails.teacher}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Text>{this.state.CourseDetails.introduction}</Text>
            </CardItem>
            <CardItem>
              <Text>参考书籍: {this.state.CourseDetails.book}</Text>
            </CardItem>
          </Card>
          <CourseFuncBtn
            navigation={this.props.navigation}
            infoRefresh={() => this.init()}
            listRefresh={this.props.route.params.refresh}
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

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
