import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Card, CardItem, Label, Left, Text, Textarea} from 'native-base';
import {MyImage} from '../MyImage';
import {Input} from 'react-native-elements';

let {width} = Dimensions.get('window');

export class SubjectiveAnswer extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: {
        ID: 3,
        question: {
          stem: '题目3主观题',
          image: null,
        },
        totalScore: 10,
        stuScore: 8,
        type: 'SUBJECTIVE',
        refAnswer: {
          content: '参考答案的主观题回答',
          image: null,
        },
        stuAnswer: {
          content: '学生的主观题回答',
          image: null,
        },
        comment: {content: '老师的评论', image: null},
      },
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Card style={styles.card}>
        <CardItem bordered>
          <Text>{this.props.answer.question.stem}</Text>
        </CardItem>
        <CardItem>
          <MyImage
            sourse={this.props.answer.question.image}
            width={width * 0.8}
            height={200}
          />
        </CardItem>
        <CardItem>
          <Label>
            <Text style={styles.label}>参考答案：</Text>
          </Label>
        </CardItem>
        <CardItem>
          <Label>
            <Text>{this.props.answer.refAnswer.content}</Text>
            <MyImage
              source={this.props.answer.refAnswer.image}
              width={width * 0.8}
              height={200}
            />
          </Label>
        </CardItem>
        <CardItem>
          <Label>
            <Text style={styles.label}>我的回答：</Text>
          </Label>
        </CardItem>
        <CardItem>
          <Label>
            <Text>{this.props.answer.stuAnswer.content}</Text>
            <MyImage
              source={this.props.answer.stuAnswer.image}
              width={width * 0.8}
              height={200}
            />
          </Label>
        </CardItem>
        <CardItem>
          <Left>
            <Label>
              <Text style={styles.label}>
                得分：
                {this.props.answer.stuScore === null
                  ? '-'
                  : this.props.answer.stuScore}
                /{this.props.answer.totalScore}
              </Text>
            </Label>
          </Left>
        </CardItem>
        <CardItem>
          <Label>
            <Text style={styles.label}>老师评价：</Text>
          </Label>
          <Text>
            {this.props.answer.comment.content === null
              ? '-'
              : this.props.answer.comment.content}
          </Text>
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
  label: {
    color: '#0093fe',
  },
});
