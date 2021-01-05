import React from 'react';
import {CardItem, Card, ListItem, Text, Label, Textarea} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

export class SubjectiveAnswer extends React.Component {
  constructor() {
    super();
    this.state = {
      subjectiveAnswer: {
        ID: 3,
        question: {
          stem: {
            content: '题目3主观题',
            file: null,
          },
        },
        totalScore: 10,
        stuScore: null,
        type: 'SUBJECTIVE',
        refAnswer: {
          content: '参考答案的主观题回答',
          file: null,
        },
        stuAnswer: {
          content: '学生的主观题回答',
          file: null,
        },
      },
    };
  }

  render() {
    return (
      <Card style={styles.card}>
        <CardItem header bordered>
          <Text>{this.props.answer.question.stem.content}</Text>
        </CardItem>
        <CardItem>
          <Label>
            <Text>学生回答：</Text>
          </Label>
          <Textarea
            rowSpan={5}
            bordered={false}
            underline={false}
            value={this.props.answer.stuAnswer.content}
          />
        </CardItem>
        <CardItem>
          <Label>
            <Text>评价：</Text>
          </Label>
          <Textarea
            rowSpan={5}
            bordered={false}
            underline={false}
            placeholder="请输入评价"
          />
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
