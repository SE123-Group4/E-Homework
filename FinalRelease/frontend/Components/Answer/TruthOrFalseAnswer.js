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

export class TruthOrFalseAnswer extends React.Component {
  constructor() {
    super();
    this.state = {
      truthOrFalseAnswer: {
        ID: 4,
        question: {
          stem: {
            content: '题目4是非题',
            file: null,
          },
        },
        totalScore: 10,
        stuScore: 0,
        type: 'TRUTH_OR_FALSE',
        refAnswer: true,
        stuAnswer: false,
      },
    };
  }

  componentDidMount() {
    //console.log(this.props.answer.question.options);
  }

  getColor = (flag) => {
    if (this.props.answer.refAnswer === flag) {
      return 'green';
    } else {
      return 'red';
    }
  };

  renderChoices = () => {
    return (
      <ListItem>
        <CheckBox
          color={this.getColor(true)}
          checked={this.props.answer.stuAnswer === true}
        />
        <Body>
          <Text>√</Text>
        </Body>
        <CheckBox
          color={this.getColor(false)}
          checked={this.props.answer.stuAnswer === false}
        />
        <Body>
          <Text>×</Text>
        </Body>
      </ListItem>
    );
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
            <Text>正确答案：{this.props.answer.refAnswer ? '√' : '×'}</Text>
          </Left>
          <Right>
            <Text>
              得分：{this.props.answer.stuScore}/{this.props.answer.totalScore}
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
