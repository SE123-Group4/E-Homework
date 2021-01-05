import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Text,
  Body,
  Card,
  CardItem,
} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
let {width} = Dimensions.get('window');

export default class ChoiceQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '多选题1',
      answers: [],
      pick: [false, false, false, false],
      choices: [
        {
          id: 0,
          content: '选项1',
        },
        {
          id: 1,
          content: '选项2',
        },
        {
          id: 2,
          content: '选项3',
        },
        {
          id: 3,
          content: '选项4',
        },
      ],
    };
  }
  clickBox = (props) => {
    var p = this.state.pick;
    var a = [];
    var l = p.length;
    var ip = p[props];
    p[props] = !ip;
    for (var i = 0; i < l; i++) {
      if (p[props] === true) {
        a.push(props);
      }
    }
    this.setState({pick: p, answers: a});
  };
  renderChoices = () => {
    return this.state.choices.map((item) => {
      return (
        <ListItem>
          <CheckBox
            checked={this.state.pick[item.id]}
            onPress={() => this.clickBox(item.id)}
          />
          <Body>
            <Text>{item.content}</Text>
          </Body>
        </ListItem>
      );
    });
  };
  render() {
    return (
      <Card style={styles.card}>
        <CardItem header bordered>
          <Text style={{fontSize: 20, color: 'black'}}>
            {this.state.question}
          </Text>
        </CardItem>
        {this.renderChoices()}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
  },
});
