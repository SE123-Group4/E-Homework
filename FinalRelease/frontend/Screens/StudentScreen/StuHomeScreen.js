// stu. home screen

import React from 'react';
import {
  Container,
  Text,
  Icon,
  Left,
  Right,
  Content,
  Card,
  CardItem,
  Button,
  Col,
  Row,
  Grid,
} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView, View} from 'react-native';
import {StuHomeworkList} from '../../Components/StuHomeworkList';
import {SearchFilter} from '../../Components/SearchFilter';

const Stack = createStackNavigator();

export class StuHomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
      userInfo: {
        name: '用户',
        classname: '大三(4)班',
      },

      month: new Date().getMonth(),
      date: new Date().getDate(),
    };
  }

  componentDidMount() {
    console.log(this.props);
    let _loadUserInfo = async () => {
      try {
        var userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'));
        console.log('userInfo: ', userInfo);
        this.setState({userInfo: userInfo});
      } catch (e) {}
    };
    _loadUserInfo();

    //var userInfo = AsyncStorage.getItem('userInfo');
    //console.log('userInfo: ', userInfo);
    //this.setState({userInfo: this.props.route.params.userInfo});
  }

  render() {
    const {month} = this.state;
    const {date} = this.state;
    return (
      <Container>
        <Content>
          <Card style={{marginLeft: 10, marginRight: 10, marginTop: 8}}>
            <CardItem style={{backgroundColor: '#1FA0FC', height: 120}}>
              <Left>
                <Button iconLeft rounded style={{backgroundColor: 'white'}}>
                  <Icon name="calendar" style={{color: '#0786E0'}} />
                  <Text style={{fontSize: 30, color: '#0786E0'}}>
                    {month}月{date}日
                  </Text>
                </Button>
              </Left>
              <Right>
                <Text
                  style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                  {/*{this.state.userInfo.name}*/}
                </Text>
                <Text style={{fontSize: 20, color: 'white'}}>
                  {/*{this.state.userInfo.classname}*/}
                </Text>
              </Right>
            </CardItem>
          </Card>
          <SearchFilter />
          <StuHomeworkList navigation={this.props.navigation} />
        </Content>
      </Container>
    );
  }
}
