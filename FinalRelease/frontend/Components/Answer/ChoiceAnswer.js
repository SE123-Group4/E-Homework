import React from 'react';
import {
  CardItem,
  Card,
  Right,
  Left,
  Text,
  ListItem,
  CheckBox,
  Body,
} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get();

export class ChoiceAnswer extends React.Component {
  constructor() {
    super();
    this.state = {
      choiceAnswer: {
        ID: 2,
        question: {
          stem: {
            content: '题目2多项选择题',
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
        stuScore: 0,
        type: 'MULTIPLE_CHOICE',
        refAnswer: [
          {option: 'A', content: {content: '选项A', file: null}},
          {option: 'B', content: {content: '选项B', file: null}},
        ],
        stuAnswer: [
          {option: 'C', content: {content: '选项C', file: null}},
          {option: 'D', content: {content: '选项D', file: null}},
        ],
      },
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     choiceAnswer: this.props.answer,
  //   });
  // }

  check = (option) => {
    return this.props.answer.stuAnswer.contains(option);
  };

  renderChoices = () => {
    return this.props.answer.options.map((item) => {
      return (
        <ListItem>
          <CheckBox checked={this.check(item.option)} />
          <Body>
            <Text>{item.content.content}</Text>
          </Body>
        </ListItem>
      );
    });
  };

  renderRefAnswer = () => {
    return this.props.answer.refAnswer.map((item) => {
      return <Text>{item.option}</Text>;
    });
  };

  render() {
    return (
      <Card style={styles.card}>
        <CardItem header bordered>
          <Text>{this.props.answer.question.stem.content}</Text>
        </CardItem>
        <CardItem>{this.renderChoices()}</CardItem>
        <CardItem footer>
          <Left>{this.renderRefAnswer}</Left>
          <Right>
            <Text>
              {this.props.answer.stuScore} /{this.props.answer.totalScore}
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
