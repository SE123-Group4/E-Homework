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
import {MyImage} from '../MyImage';
const {width} = Dimensions.get('window');

export class SubjectiveCorrection extends React.Component {
  constructor() {
    super();
    this.state = {
      subjectiveAnswer: {
        ID: 3,
        question: {
          stem: '题目3主观题',
          image: null,
        },
        totalScore: 10,
        stuScore: null,
        type: 'SUBJECTIVE',
        refAnswer: {
          content: '参考答案的主观题回答',
          image: null,
        },
        stuAnswer: {
          content: '学生的主观题回答',
          image: null,
        },
      },
      stuScore: 0,
    };
  }

  render() {
    return (
      <Card style={styles.card}>
        <CardItem bordered>
          <Text>{this.props.answer.question.stem}</Text>
        </CardItem>
        <CardItem>
          <MyImage
            sourse={this.props.answer.question.image}
            width={width * 0.9}
            height={200}
          />
        </CardItem>
        <CardItem>
          <Label>
            <Text>学生回答：</Text>
          </Label>
        </CardItem>
        <CardItem>
          <Label>
            <Text>{this.props.answer.stuAnswer.content}</Text>
            <MyImage
              source={this.props.answer.stuAnswer.image}
              width={width * 0.9}
              height={200}
            />
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
