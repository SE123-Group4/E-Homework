import React from 'react';
import {
  CardItem,
  Card,
  ListItem,
  Text,
  Label,
  Textarea,
  Left,
  Right,
} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
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
      stuScore: 0,
    };
  }

  render() {
    return (
      <Card style={styles.card}>
        <CardItem bordered>
          <Text>{this.props.answer.question.stem.content}</Text>
        </CardItem>
        <CardItem>
          <Label>
            <Text>学生回答：</Text>
          </Label>
        </CardItem>
        <CardItem>
          <Label>
            <Text>{this.props.answer.stuAnswer.content}</Text>
          </Label>
        </CardItem>
        <CardItem>
          <Left>
            <Label>
              <Text>得分：</Text>
            </Label>
            <Input
              inputContainerStyle={styles.input}
              onChangeText={(text) => {
                console.log('stuScore: ', parseInt(text, 10));
                this.props.setStuScore(parseInt(text, 10));
              }}
            />
          </Left>
          <Label>
            <Text>/{this.props.answer.totalScore}</Text>
          </Label>
        </CardItem>
        <CardItem>
          <Label>
            <Text>*评价：</Text>
          </Label>
        </CardItem>
        <CardItem>
          <Textarea
            rowSpan={5}
            bordered
            underline
            style={styles.textarea}
            placeholder="请输入评价"
            onChangeText={(text) => this.props.setComment(text)}
          />
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: width,
  },
  textarea: {
    width: width * 0.9,
  },
  input: {
    width: width * 0.5,
  },
});
