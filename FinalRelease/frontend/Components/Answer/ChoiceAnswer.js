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
const {width} = Dimensions.get('window');

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
    var flag = false;
    for (var i = 0; i < this.props.answer.stuAnswer.length; i++) {
      //console.log(this.props.answer.stuAnswer[i].option, option);
      if (this.props.answer.stuAnswer[i].option === option) {
        flag = true;
      }
    }
    return flag;
    //return this.props.answer.stuAnswer.contains(option);
  };

  renderChoices = () => {
    return this.props.answer.question.options.map((item) => {
      return (
        <ListItem>
          <CheckBox
            color={this.getColor(item.option)}
            checked={this.check(item.option)}
          />
          <Body>
            <Text>
              {item.option}. {item.content.content}
            </Text>
          </Body>
        </ListItem>
      );
    });
  };

  getRefAnswer = () => {
    //console.log('multi ref', this.props.answer.refAnswer);
    var s = '';
    for (var i = 0; i < this.props.answer.refAnswer.length; i++) {
      s += this.props.answer.refAnswer[i].option;
      s += ' ';
    }
    return s;
  };

  getColor = (option) => {
    var flag = false;
    if (this.check(option)) {
      for (var i = 0; i < this.props.answer.refAnswer.length; i++) {
        if (option === this.props.answer.refAnswer[i].option) {
          flag = true;
        }
      }
      if (flag) {
        return 'green';
      } else {
        return 'red';
      }
    } else {
      return 'blue';
    }
  };

  render() {
    return (
      <Card style={styles.card}>
        <CardItem bordered>
          <Text>{this.props.answer.question.stem.content}</Text>
        </CardItem>
        {this.renderChoices()}
        <CardItem footer>
          <Left>
            <Text>正确答案：{this.getRefAnswer()}</Text>
          </Left>
          <Right>
            <Text>
              得分：{this.props.answer.stuScore} /{this.props.answer.totalScore}
            </Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: width,
  },
});
