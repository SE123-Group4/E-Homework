//home screen (for teacher)

import React from 'react';
import {Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from 'react-native-tab-navigator/TabNavigator';

import {TeaCourseScreen} from './TeaCourseScreen';
import {TeaProfileScreen} from './TeaProfileScreen';
import {View} from 'react-native';

const Stack = createStackNavigator();

export class TeaHomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'Home',
    };
  }

  BottomTabs() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Home'}
          title="Home"
          renderIcon={() => <Icon name="home" />}
          onPress={() => {
            this.setState({selectedTab: 'Home'});
          }}>
          <Icon name="rocket" size={300} />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Course'}
          title="Course"
          renderIcon={() => <Icon name="book" />}
          onPress={() => {
            this.setState({selectedTab: 'Course'});
          }}>
          <Text>Course</Text>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Profile'}
          title="Profile"
          renderIcon={() => <Icon name="star" />}
          onPress={() => {
            this.setState({selectedTab: 'Profile'});
          }}>
          <Text>Profile</Text>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }

  render() {
    return (
      <View>
        <Button
          title="Login"
          onPress={() => {
            this.props.navigation.push('Login');
          }}
        />
      </View>
    );
  }
}
