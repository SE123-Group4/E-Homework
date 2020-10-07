//courses management screen (for teachers)

import React from 'react';
import {Text, Icon, Button, Container} from 'native-base';
import {ScrollView, StyleSheet} from 'react-native';
import {CourseList} from '../Components/CourseList';

export class TeaCoursesScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <Container>
          <Button style={styles.AddButton} full rounded info icon>
            <Icon type="FontAwesome" name="plus" />
          </Button>
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
