//login screen

import React from 'react';
import {Button, Container} from 'native-base';
import {ScrollView, Text} from 'react-native';
import {HomeworkList} from '../Components/HomeworkList';

export class LoginScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Button
        full
        success
        onPress={() => this.props.navigation.navigate('Home')}>
        <Text>login</Text>
      </Button>
    );
  }
}
