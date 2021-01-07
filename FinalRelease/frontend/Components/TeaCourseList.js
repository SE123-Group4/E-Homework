//list of courses cards

import React from 'react';
//import {Card, Text} from 'native-base';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import {
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Content,
  Icon,
  Button,
  Segment,
  Tabs,
  Tab,
  Header,
} from 'native-base';
import {ButtonGroup} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getTeaCourses} from '../Service/CourseService';
//import Divide from 'react-native-divide';

export class TeaCourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      courses: [
        {
          name: '课程 1',
          id: 1,
          introduction: '这是简介1',
          startTime: '2020-9-26',
          takes: 100,
          state: 3,
        },
        {
          name: '课程 2',
          id: 2,
          introduction: '这是简介2',
          startTime: '2020-9-26',
          takes: 100,
          state: 3,
        },
        {
          name: '课程 3',
          id: 3,
          introduction: '这是简介3',
          startTime: '2020-9-26',
          takes: 100,
          state: 4,
        },
        {
          name: '课程 4',
          id: 4,
          introduction: '这是简介4',
          startTime: '2020-9-26',
          takes: 100,
          state: 4,
        },
      ],
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex = (selectedIndex) => {
    this.setState({selectedIndex});
  };

  componentDidMount() {
    const callback = (data) => {
      this.setState({courses: data});
    };
    const _loadCourses = async () => {
      try {
        var roleID = JSON.parse(await AsyncStorage.getItem('userInfo')).id;
        console.log(roleID);
        getTeaCourses(roleID, callback);
      } catch (e) {}
    };
    _loadCourses();
  }

  renderCourses = (state) => {
    if (this.state.courses.length === 0) {
      return (
        <Card>
          <CardItem header>
            <Icon
              type="FontAwesome"
              name="bookmark"
              style={{color: '#0093fe'}}
            />
            <Text style={styles.CardHeader}>暂无课程</Text>
          </CardItem>
        </Card>
      );
    } else {
      return this.state.courses.map((item, index) => {
        if (item.state === state) {
          return (
            <Card>
              <CardItem header>
                <Icon
                  type="FontAwesome"
                  name="bookmark"
                  style={{color: '#0093fe'}}
                />
                <Text style={styles.CardHeader}>{item.name}</Text>
              </CardItem>
              <CardItem
                button
                onPress={() => {
                  console.log('sd');
                  this.props.navigation.navigate('TeaCourse', {
                    courseID: item.id,
                  });
                }}>
                <Text>{item.introduction}</Text>
              </CardItem>
              <CardItem
                footer
                button
                onPress={() => {
                  this.props.navigation.navigate('TeaCourse', {
                    courseID: item.id,
                  });
                }}>
                <Left>
                  <Text>{item.startTime}</Text>
                </Left>
                <Right>
                  <Icon type="FontAwesome" name="user-o" />
                  <Text>{item.takes}</Text>
                </Right>
              </CardItem>
            </Card>
          );
        }
      });
    }
  };

  renderButtons = () => {
    const buttons = ['未结课', '已结课'];
    const {selectedIndex} = this.state;

    return (
      <ButtonGroup
        buttons={buttons}
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        containerStyle={styles.ButtonGroup}
        selectedButtonStyle={styles.button}
      />
    );
  };

  render() {
    console.log('list', this.props);
    return (
      <Content>
        <Tabs>
          <Tab
            heading="进行中"
            tabStyle={styles.negativeTab}
            activeTabStyle={styles.activeTab}>
            {this.renderCourses(3)}
          </Tab>
          <Tab
            heading="已结课"
            tabStyle={styles.negativeTab}
            activeTabStyle={styles.activeTab}>
            {this.renderCourses(4)}
          </Tab>
        </Tabs>
        {/*<View style={styles.CardList}>{this.renderCourses()}</View>*/}
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  ButtonGroup: {
    height: 25,
    top: 20,
  },
  button: {
    backgroundColor: '#0093fe',
  },
  activeTab: {
    color: '#0093fe',
    backgroundColor: '#0093fe',
  },
  negativeTab: {
    backgroundColor: 'white',
  },
  CardList: {
    top: 0,
  },
  CardHeader: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  CardFooter: {
    flexDirection: 'row',
  },
  CardStu: {},
  DetailButton: {},
});
