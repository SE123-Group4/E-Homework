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
import {ScrollView, View} from 'react-native';
import {HomeworkList} from '../Components/HomeworkList';
import {SearchFilter} from '../Components/SearchFilter';

const Stack = createStackNavigator();

export class StuHomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'Home',
      name: '五条悟',
      class: '大三(4)班',
      month: new Date().getMonth(),
      date: new Date().getDate(),
    };
  }
  render() {
    const {month} = this.state;
    const {date} = this.state;
    return (
      <ScrollView>
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
                    {this.state.name}
                  </Text>
                  <Text style={{fontSize: 20, color: 'white'}}>
                    {this.state.class}
                  </Text>
                </Right>
              </CardItem>
            </Card>
            <SearchFilter />
            <HomeworkList />
          </Content>
        </Container>
      </ScrollView>
    );
  }
}
