import React from 'react';
import {Card, Text} from 'react-native-elements';

export class CourseIntroCard extends React.Component {
  constructor() {
    super();
    this.state = {
      CourseDetails: {
        name: '课程 1',
        teacher: '老师 1',
        introduction: '这是课程 1 的简介。',
        recommendBook: 'csapp',
      },
    };
  }

  render() {
    return (
      <Card>
        <Card.Title>{this.state.CourseDetails.name}</Card.Title>
        <Card.Divider />
        <Text>{this.state.CourseDetails.teacher}</Text>
        <Text>{this.state.CourseDetails.introduction}</Text>
        <Text>{this.state.CourseDetails.recommendBook}</Text>
      </Card>
    );
  }
}
