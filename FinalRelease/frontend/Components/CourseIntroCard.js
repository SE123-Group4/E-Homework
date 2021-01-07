import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text, CardItem, Body} from 'native-base';
import {getCourseByID} from '../Service/CourseService';

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export class CourseIntroCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    //getCourseByID(this.props.courseID, callback);
  }

  render() {
    return (
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
    );
  }
}
