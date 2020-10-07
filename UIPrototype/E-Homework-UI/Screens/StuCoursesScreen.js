//students courses screen

import React from 'react';
import {Text, Icon, Button, Container} from 'native-base';
import {ScrollView, StyleSheet} from 'react-native';
import {CourseList} from '../Components/CourseList';

export class StuCoursesScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <Container>
          <CourseList navigation={this.props.navigation} />
        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  AddButton: {
    width: 390,
    height: 60,
    left: 13,
    top: 10,
  },
});
