import React from 'react';
import {
  CardItem,
  Card,
  Text,
  ListItem,
  CheckBox,
  Body,
  Left,
  Right,
} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
let {width} = Dimensions.get('window');

export class SimpleChoiceAnswer extends React.Component {
  constructor() {
    super();
    this.state = {
      simpleChoiceAnswer: {
        ID: 1,
        question: {
          stem: {
            content: '题目1单项选择题',
            file: null,
          },
          options: [
            {option: 'A', content: {content: '选项A', file: null}},
            {option: 'B', content: {content: '选项B', file: null}},
            {option: 'C', content: {content: '选项C', file: null}},
            {option: 'D', content: {content: '选项D', file: null}},
          ],
        },
        totalScore: 10,
        stuScore: 10,
        type: 'ONE_CHOICE',
        refAnswer: {option: 'A', content: {content: '选项A', file: null}},
        stuAnswer: {option: 'A', content: {content: '选项A', file: null}},
      },
    };
  }

  componentDidMount() {
    console.log(this.props.answer.question.options);
  }

  check = (option) => {
    return option === this.props.answer.stuAnswer.option;
  };

  renderChoices = () => {
    return this.props.answer.question.options.map((item) => {
      console.log(item);
      return (
        <ListItem>
          <CheckBox checked={this.check(item.option)} />
          <Body>
            <Text>
              {item.option}. {item.content.content}
            </Text>
          </Body>
        </ListItem>
      );
    });
  };

  render() {
    return (
      <Card style={styles.card}>
        <CardItem>
          <Text>csdvdfv</Text>
        </CardItem>
        <CardItem header bordered>
          <Text>{this.props.answer.question.stem.content}</Text>
        </CardItem>
        {this.renderChoices()}
        <CardItem footer>
          <Left>
            <Text>{this.props.answer.refAnswer.option}</Text>
          </Left>
          <Right>
            <Text>
              {this.props.answer.stuScore}/{this.props.answer.totalScore}
            </Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
  },
});
