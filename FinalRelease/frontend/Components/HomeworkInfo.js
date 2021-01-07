import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Icon,
  Button,
  Label,
  Text,
} from 'native-base';
import {getStatistics} from '../Service/HomeworkService';

export class HomeworkInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '软件工程原理及实践大作业',
      teacher: '老师XXX',
      start: '2020-10-10 00:00:00',
      deadline: '2020-10-10 12:00:00',
      courseName: '课程',
      //content: '这是作业内容',
      //answer: '这是参考答案',
      //comment: '这是整体点评',
      maxScore: 98,
      minScore: 61,
      averageScore: 80,
    };
  }

  componentDidMount() {
    const statisticCallback = (res) => {
      if (res.status === 200) {
        this.setState({
          maxScore: res.data.maxScore,
          minScore: res.data.minScore,
          averageScore: res.data.averageScore,
          teacher: res.data.teacher,
          title: res.data.title,
          start: res.data.start,
          deadline: res.data.deadline,
          courseName: res.data.courseName,
        });
      }
    };
    //getStatistics(this.props.homeworkID, statisticCallback);
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Body>
            <Text style={styles.Header}>{this.state.courseName}：{this.state.title}</Text>
            <Text style={styles.FootNoteGray}>
              {this.state.teacher}于{this.state.start}布置
            </Text>
            <Text style={styles.FootNoteRed}>
              截止时间 {this.state.deadline}
            </Text>
          </Body>
        </CardItem>
        {/*<CardItem>*/}
        {/*  <Body>*/}
        {/*    <Text style={styles.Body}>{this.state.content}</Text>*/}
        {/*  </Body>*/}
        {/*</CardItem>*/}
        {/*<CardItem*/}
        {/*  button*/}
        {/*  onPress={() => {*/}
        {/*    console.log('答题卡');*/}
        {/*  }}>*/}
        {/*  <Left>*/}
        {/*    <Icon type="FontAwesome" name="book" style={{color: '#0093fe'}} />*/}
        {/*    <Body>*/}
        {/*      <Text style={styles.Body}>答题卡</Text>*/}
        {/*      <Text style={styles.FootNoteGray}>点击查看答题结果</Text>*/}
        {/*    </Body>*/}
        {/*  </Left>*/}
        {/*</CardItem>*/}
        {/*<CardItem bordered>*/}
        {/*  <Body>*/}
        {/*    <Text style={styles.FootNoteGray}>参考答案 提交后可见</Text>*/}
        {/*    <Text style={styles.Body}>{this.state.answer}</Text>*/}
        {/*  </Body>*/}
        {/*</CardItem>*/}
        <CardItem style={{justifyContent: 'space-between'}}>
          <Label>
            <Text>最高分：</Text>
            <Text style={{color: 'green'}}>{this.state.maxScore}</Text>
          </Label>
          <Label>
            <Text>平均分：</Text>
            <Text style={{color: '#0093fe'}}>{this.state.averageScore}</Text>
          </Label>
          <Label>
            <Text>最低分：</Text>
            <Text style={{color: 'red'}}>{this.state.minScore}</Text>
          </Label>
        </CardItem>
        {/*<CardItem>*/}
        {/*  <Body>*/}
        {/*    <Text style={styles.SmallHeader}>{this.state.teacher}</Text>*/}
        {/*    <Text style={styles.Body}>{this.state.comment}</Text>*/}
        {/*  </Body>*/}
        {/*  <Right>*/}
        {/*    <Button bordered small info>*/}
        {/*      <Text style={styles.FootNoteBlue}>整体点评</Text>*/}
        {/*    </Button>*/}
        {/*  </Right>*/}
        {/*</CardItem>*/}
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
