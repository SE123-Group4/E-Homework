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
import {Dimensions, StyleSheet, Image} from 'react-native';
import {MyImage} from '../MyImage';
let {width} = Dimensions.get('window');

export class SimpleChoiceAnswer extends React.Component {
  constructor() {
    super();
    this.state = {
      simpleChoiceAnswer: {
        ID: 1,
        question: {
          stem: '题目1单项选择题',
          image: null,
          options: [
            {option: 'A', content: '选项A', image: null},
            {option: 'B', content: '选项B', image: null},
            {option: 'C', content: '选项C', image: null},
            {option: 'D', content: '选项D', image: null},
          ],
        },
        totalScore: 10,
        stuScore: 10,
        type: 'ONE_CHOICE',
        refAnswer: {content: 'A', image: null},
        stuAnswer: {content: 'A', image: null},
      },
    };
  }

  componentDidMount() {
    //console.log(this.props.answer.question.options);
  }

  check = (option) => {
    return option === this.props.answer.stuAnswer.content;
  };

  getColor = (option) => {
    if (option === this.props.answer.stuAnswer.content) {
      if (option === this.props.answer.refAnswer.content) {
        return 'green';
      } else {
        return 'red';
      }
    }
    return 'blue';
  };

  renderChoices = () => {
    return this.props.answer.question.options.map((item) => {
      console.log(item);
      return (
        <ListItem>
          <CheckBox
            color={this.getColor(item.option)}
            checked={this.check(item.option)}
          />
          <Body>
            <Text>
              {item.option}. {item.content}
            </Text>
            <MyImage source={item.image} width={width * 0.9} height={200} />
          </Body>
        </ListItem>
      );
    });
  };

  render() {
    console.log(this.props.answer.question.image);
    return (
      <Card style={styles.card}>
        <CardItem bordered>
          <Text>{this.props.answer.question.stem}</Text>
        </CardItem>
        <CardItem>
          <MyImage
            source={this.props.answer.question.image}
            width={width * 0.9}
            height={300}
          />
        </CardItem>
        {this.renderChoices()}
        <CardItem footer>
          <Left>
            <Text>正确答案：{this.props.answer.refAnswer.content}</Text>
          </Left>
          <Right>
            <Text>
              得分：
              {this.props.answer.stuScore === null
                ? '-'
                : this.props.answer.stuScore}
              /{this.props.answer.totalScore}
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
