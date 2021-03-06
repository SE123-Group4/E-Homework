import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {TeaCourseNavigator} from './TeaCourseNavigator';
import {StuProfileScreen} from '../Screens/StudentScreen/StuProfileScreen';
import {Container, Header, Content, Text, Icon} from 'native-base';
import TabNavigator from 'react-native-tab-navigator';
import TabBar from 'react-native-tab-navigator/TabBar';
import TabBarBottom from 'react-navigation';
import TabNavigatorItem from 'react-native-tab-navigator/TabNavigatorItem';
import {TeaCoursesScreen} from '../Screens/TeacherScreen/TeaCoursesScreen';
import {StuHomeScreen} from '../Screens/StudentScreen/StuHomeScreen';
import {StuCoursesScreen} from '../Screens/StudentScreen/StuCoursesScreen';
import {StuCourseNavigator} from './StuCourseNavigator';
import {TeaProfileScreen} from "../Screens/TeacherScreen/TeaProfileScreen";

const Stack = createStackNavigator();

export class StuMainNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
    };
  }

  render() {
    console.log(this.props);
    return (
      <TabNavigator>
        <TabNavigatorItem
          renderIcon={() => <Icon type="MaterialIcons" name="home" />}
          title="主页"
          selected={this.state.selectedTab === 'Home'}
          onPress={() => {
            this.setState({selectedTab: 'Home'});
          }}>
          <StuHomeScreen
            navigation={this.props.navigation}
            //userInfo={this.props.navigation.route.params.userInfo}
          />
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
