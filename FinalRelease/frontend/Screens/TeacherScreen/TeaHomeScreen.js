//home screen (for teacher)

import React from 'react';
import {
  Container,
  Text,
  Left,
  Right,
  Content,
  Card,
  CardItem,
} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Avatar} from 'react-native-elements';
import {ScrollView, View} from 'react-native';
import {SearchFilter} from '../../Components/SearchFilter';
import {TeaHomeworkList} from '../../Components/TeaHomeworkList';
import {getCourseHomework, getTeaHomework} from '../../Service/HomeworkService';

const Stack = createStackNavigator();

export class TeaHomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'Home',
      userInfo: {
        name: '五条悟',
        teaNumber: '大三(4)班',
      },
      homeworkList: [],
    };
  }
  /*_onPressButton = () => {
    this.props.navigation.navigate('AssignHw');
  };*/

  componentDidMount() {
    let _loadUserInfo = async () => {
      try {
        var principal = JSON.parse(await AsyncStorage.getItem('principal'));
        this.setState({userInfo: principal.role});
      } catch (e) {}
    };
    _loadUserInfo();
    // const sort = (a, b) => {
    //   return a.post < b.post;
    // };
    // var hw = this.state.homework;
    // this.setState({homework: hw.sort(sort)});
    const callback = (res) => {
      if (res.status === 200) {
        var homeWork = res.data;
        const sort = (a, b) => {
          return a.post < b.post;
        };
        homeWork = homeWork.sort(sort);
        console.log('hw list', homeWork);
        this.setState({homeworkList: homeWork});
      }
    };
    //if (this.props.courseID === null || this.props.courseID === undefined) {
    getTeaHomework(callback);
    //} else {
    // getCourseHomework(this.props.courseID, 'ROLE_TEACHER', callback);
    //}
  }

  render() {
    return (
      <Container>
        <Content>
          <Card style={{marginLeft: 10, marginRight: 10, marginTop: 10}}>
            <CardItem style={{backgroundColor: '#0093fe', height: 120}}>
              <Left>
                <Avatar
                  size="large"
                  rounded
                  icon={{
                    name: 'plus',
                    color: '#0093fe',
                    type: 'font-awesome',
                  }}
                  overlayContainerStyle={{backgroundColor: 'white'}}
                  onPress={() => {
                    this.props.navigation.navigate('AssignHw', {
                      hwId: 0,
                      refresh: () => this.componentDidMount(),
                    });
                  }}
                  activeOpacity={0.7}
                  containerStyle={{marginTop: 6, marginLeft: 25}}
                />
              </Left>
              <Right>
                <Text
                  style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                  {/*{this.state.userInfo.name}*/}
                </Text>
                <Text style={{fontSize: 20, color: 'white'}}>
                  {/*{this.state.userInfo.teaNumber}*/}
                </Text>
              </Right>
            </CardItem>
          </Card>
          {/*<SearchFilter />*/}
          <TeaHomeworkList
            navigation={this.props.navigation}
            homework={this.state.homeworkList}
          />
        </Content>
      </Container>
    );
  }
}
