//home screen (for teacher)

import React from 'react';
import {Container, Text, Icon, Header, Content} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';

import {TeaCoursesScreen} from './TeaCoursesScreen';
import {TeaProfileScreen} from './TeaProfileScreen';
import {ScrollView, View} from 'react-native';
import {HomeworkList} from '../Components/HomeworkList';

const Stack = createStackNavigator();

export class TeaHomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'Home',
    };
  }

  render() {
    return (
      <ScrollView>
        <Container>
          <Text>Home</Text>
        </Container>
      </ScrollView>
    );
  }
}
