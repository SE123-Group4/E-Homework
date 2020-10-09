import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {TeaHomeScreen} from '../Screens/TeaHomeScreen';
import {TeaCourseNavigator} from './TeaCourseNavigator';
import {TeaProfileScreen} from '../Screens/TeaProfileScreen';
import {Container, Header, Content, Text, Icon} from 'native-base';
import TabNavigator from 'react-native-tab-navigator';
import TabBar from 'react-native-tab-navigator/TabBar';
import TabBarBottom from 'react-navigation';
import TabNavigatorItem from 'react-native-tab-navigator/TabNavigatorItem';
import {TeaCoursesScreen} from '../Screens/TeaCoursesScreen';

const Stack = createStackNavigator();

export class MainNavigator extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'Home',
    };
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigatorItem
          renderIcon={() => <Icon type="MaterialIcons" name="home" />}
          title="主页"
          selected={this.state.selectedTab === 'Home'}
          onPress={() => {
            this.setState({selectedTab: 'Home'});
          }}>
          <TeaHomeScreen />
        </TabNavigatorItem>
        <TabNavigatorItem
          renderIcon={() => <Icon type="MaterialIcons" name="bookmarks" />}
          title="课程"
          selected={this.state.selectedTab === 'Courses'}
          onPress={() => {
            this.setState({selectedTab: 'Courses'});
          }}>
          <TeaCourseNavigator />
        </TabNavigatorItem>
        <TabNavigatorItem
          renderIcon={() => <Icon type="MaterialIcons" name="account-circle" />}
          title="我的"
          selected={this.state.selectedTab === 'Profile'}
          onPress={() => {
            this.setState({selectedTab: 'Profile'});
          }}>
          <TeaProfileScreen />
        </TabNavigatorItem>
      </TabNavigator>
    );
  }
}
