//courses management screen (for teachers)

import React from 'react';
import {Text, Icon, Button, Container} from 'native-base';
import {ScrollView, StyleSheet} from 'react-native';
import {TeaCourseList} from '../Components/TeaCourseList';

export class TeaCoursesScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Button
          style={styles.AddButton}
          full
          rounded
          onPress={() => {
            this.props.navigation.navigate('AddCourse');
          }}>
          <Icon type="FontAwesome" name="plus" />
        </Button>
        <TeaCourseList navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  AddButton: {
    width: 390,
    height: 60,
    left: 13,
    top: 10,
    backgroundColor: '#0093fe',
  },
});
