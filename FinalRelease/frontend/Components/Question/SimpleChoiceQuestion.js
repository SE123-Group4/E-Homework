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
import {Dimensions, View, StyleSheet} from 'react-native';
import {MyImage} from "../MyImage";
let {width} = Dimensions.get('window');

export default class SimpleChoiceQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {
        ID: 1,
        stem: '单选题 1',
        image: null,
        options: [
          {option: 'A', content: '选项A', image: null},
          {option: 'B', content: '选项B', image: null},
          {option: 'C', content: '选项C', image: null},
          {option: 'D', content: '选项D', image: null},
        ],
      },
      answer: -1,
      pick: [false, false, false, false],
      stuAnswer: null,
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

  check = (option) => {
    if (this.state.stuAnswer === null) {
      return false;
    }
    return this.state.stuAnswer.option === option;
  };

  clickBox = (props) => {
    var p = [false, false, false, false];
    p[props] = true;
    this.setState({pick: p, answer: props});
  };

  renderChoices = () => {
    return this.state.question.options.map((item) => {
      return (
        <ListItem>
          <CheckBox
            checked={this.check(item.option)}
            onPress={() => {
              this.setState({stuAnswer: item});
              this.props.setSimpleChoiceAnswer(item);
            }}
          />
          <Body>
            <Text>{item.content}</Text>
            <MyImage source={item.image} width={width * 0.9} height={200} />
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
            {this.state.question.stem}
          </Text>
        </CardItem>
        <CardItem>
          <MyImage
              source={this.state.question.image}
              width={width * 0.9}
              height={200}
          />
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
