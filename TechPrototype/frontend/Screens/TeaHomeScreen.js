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
  Button,
  Col,
  Row,
  Grid,
  Icon,
} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import {Avatar} from 'react-native-elements';
import {ScrollView, View} from 'react-native';
import {SearchFilter} from '../Components/SearchFilter';
import {TeaHomeworkList} from '../Components/TeaHomeworkList';

const Stack = createStackNavigator();

export class TeaHomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'Home',
      name: '五条悟',
      class: '大三(4)班',
    };
  }
  /*_onPressButton = () => {
    this.props.navigation.navigate('AssignHw');
  };*/
  render() {
    return (
      <ScrollView>
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
                      this.props.navigation.navigate('AssignHw');
                    }}
                    activeOpacity={0.7}
                    containerStyle={{marginTop: 6, marginLeft: 25}}
                  />
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
            <TeaHomeworkList />
          </Content>
        </Container>
      </ScrollView>
    );
  }
}
