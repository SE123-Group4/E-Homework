//login screen

import React from 'react';
import {Button} from 'native-base';
import {Text} from 'react-native';

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
        <Text>success</Text>
      </Button>
    );
  }
}
