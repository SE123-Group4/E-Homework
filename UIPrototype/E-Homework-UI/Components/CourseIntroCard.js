import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text, CardItem, Body} from 'native-base';

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

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
          <Text>Recommend Books: {this.state.CourseDetails.recommendBook}</Text>
        </CardItem>
      </Card>
    );
  }
}
