import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {TeaCourseNavigator} from './TeaCourseNavigator';
import {TeaProfileScreen} from '../Screens/TeaProfileScreen';
import {Container, Header, Content, Text, Icon} from 'native-base';
import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorItem from 'react-native-tab-navigator/TabNavigatorItem';
import {TeaHomeScreen} from '../Screens/TeaHomeScreen';

const Stack = createStackNavigator();

export class TeaMainNavigator extends React.Component {
  constructor(props) {
    super(props);
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
          <TeaHomeScreen navigation={this.props.navigation} />
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
          <TeaProfileScreen navigation={this.props.navigation} />
        </TabNavigatorItem>
      </TabNavigator>
    );
  }
}
