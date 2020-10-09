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
} from 'native-base';
import {ButtonGroup} from 'react-native-elements';
//import Divide from 'react-native-divide';

export class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      courses: [
        {
          name: '课程 1',
          id: 1,
          introduction: '这是简介1',
          time: '2020-9-26',
          students: 100,
        },
        {
          name: '课程 2',
          id: 2,
          introduction: '这是简介2',
          time: '2020-9-26',
          students: 100,
        },
        {
          name: '课程 3',
          id: 3,
          introduction: '这是简介3',
          time: '2020-9-26',
          students: 100,
        },
        {
          name: '课程 4',
          id: 4,
          introduction: '这是简介4',
          time: '2020-9-26',
          students: 100,
        },
      ],
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex = (selectedIndex) => {
    this.setState({selectedIndex});
  };

  renderCourses = () => {
    return this.state.courses.map((item) => {
      return (
        <Card>
          <CardItem header>
            <Icon type="FontAwesome" name="bookmark" style={{color:'#0093fe'}}/>
            <Text style={styles.CardHeader}>{item.name}</Text>
          </CardItem>
          <CardItem
            button
            onPress={() => {
              console.log('sd');
              this.props.navigation.navigate('TeaCourse');
            }}>
            <Text>{item.introduction}</Text>
          </CardItem>
          <CardItem
            footer
            button
            onPress={() => {
              this.props.navigation.navigate('TeaCourse');
            }}>
            <Left>
              <Text>{item.time}</Text>
            </Left>
            <Right>
              <Icon type="FontAwesome" name="user-o" />
              <Text>{item.students}</Text>
            </Right>
          </CardItem>
        </Card>
      );
    });
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
    return (
      <View>
        {this.renderButtons()}
        <View style={styles.CardList}>{this.renderCourses()}</View>
      </View>
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
  CardList: {
    top: 20,
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
