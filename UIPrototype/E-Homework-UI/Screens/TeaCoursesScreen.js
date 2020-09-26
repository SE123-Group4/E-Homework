//courses management screen (for teachers)

import React from 'react';
import {Text, Icon, Button} from 'native-base';
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
        <Button style={styles.AddButton} full rounded info icon>
          <Icon type="FontAwesome" name="plus" />
        </Button>
        <CourseList navigation={this.props.navigation} />
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
