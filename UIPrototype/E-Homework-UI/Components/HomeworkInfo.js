import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Card, CardItem, Left, Right, Body, Icon, Button} from 'native-base';

export class HomeworkInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: '这是班级名称',
      teacher: '老师XXX',
      start: '10-10 00:00:00',
      deadline: '10-10 12:00:00',
      content: '这是作业内容',
      answer: '这是参考答案',
      comment: '这是整体点评',
    };
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Body>
            <Text style={styles.Header}>{this.state.course}</Text>
            <Text style={styles.FootNoteGray}>
              {this.state.teacher}于{this.state.start}布置
            </Text>
            <Text style={styles.FootNoteRed}>
              截止时间 {this.state.deadline}
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.Body}>{this.state.content}</Text>
          </Body>
        </CardItem>
        <CardItem
          button
          onPress={() => {
            console.log('答题卡');
          }}>
          <Left>
            <Icon type="FontAwesome" name="book" style={{color: '#0093fe'}} />
            <Body>
              <Text style={styles.Body}>答题卡</Text>
              <Text style={styles.FootNoteGray}>点击查看答题结果</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text style={styles.FootNoteGray}>参考答案 提交后可见</Text>
            <Text style={styles.Body}>{this.state.answer}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.SmallHeader}>{this.state.teacher}</Text>
            <Text style={styles.Body}>{this.state.comment}</Text>
          </Body>
          <Right>
            <Button bordered small info>
              <Text style={styles.FootNoteBlue}>整体点评</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  SmallHeader: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  Body: {
    fontWeight: 'normal',
    fontSize: 18,
  },
  FootNoteGray: {
    fontWeight: '100',
    fontSize: 15,
    color: 'gray',
  },
  FootNoteRed: {
    fontWeight: '100',
    fontSize: 15,
    color: 'red',
  },
  FootNoteBlue: {
    fontWeight: '100',
    fontSize: 17,
    color: '#0093fe',
  },
});
