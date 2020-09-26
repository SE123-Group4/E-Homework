//login screen

import React from 'react';
import {Button} from 'react-native-elements';

export class LoginScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Button
        onPress={() => {
          this.props.navigation.push('Home');
        }}
        title="Login"
      />
    );
  }
}
