import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {TeaHomeNavigator} from './TeaHomeNavigator';
import {TeaCourseNavigator} from './TeaCourseNavigator';
import {TeaProfileScreen} from '../Screens/TeaProfileScreen';
import {StuProfileScreen} from '../Screens/StuProfileScreen';
import {Container, Header, Content, Text, Icon} from 'native-base';
import TabNavigator from 'react-native-tab-navigator';
import TabBar from 'react-native-tab-navigator/TabBar';
import TabBarBottom from 'react-navigation';
import TabNavigatorItem from 'react-native-tab-navigator/TabNavigatorItem';
import {TeaCoursesScreen} from '../Screens/TeaCoursesScreen';
import {StuHomeScreen} from '../Screens/StuHomeScreen';
import {StuCoursesScreen} from '../Screens/StuCoursesScreen';
import {StuCourseNavigator} from './StuCourseNavigator';

const Stack = createStackNavigator();

export class StuMainNavigator extends React.Component {
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
          <StuHomeScreen navigation={this.props.navigation} />
        </TabNavigatorItem>
        <TabNavigatorItem
          renderIcon={() => <Icon type="MaterialIcons" name="bookmarks" />}
          title="课程"
          selected={this.state.selectedTab === 'Courses'}
          onPress={() => {
            this.setState({selectedTab: 'Courses'});
          }}>
          <StuCourseNavigator />
        </TabNavigatorItem>
        <TabNavigatorItem
          renderIcon={() => <Icon type="MaterialIcons" name="account-circle" />}
          title="我的"
          selected={this.state.selectedTab === 'Profile'}
          onPress={() => {
            this.setState({selectedTab: 'Profile'});
          }}>
          <StuProfileScreen navigation={this.props.navigation} />
        </TabNavigatorItem>
      </TabNavigator>
    );
  }
}
