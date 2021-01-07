//the component of homework list which can be used by home screen and course screen

import React from 'react';
import {
  Card,
  CardItem,
  Container,
  Left,
  Right,
  Icon,
  Button,
  Text,
  Content,
} from 'native-base';
import {getCourseHomework, getTeaHomework} from '../Service/HomeworkService';

export class TeaHomeworkList extends React.Component {
  constructor() {
    super();
    this.state = {
      homework: [
        {
          ID: 1,
          title: '作业 1',
          post: '2020-10-28',
          ddl: '2020-10-10',
          finished: 20,
          unfinished: 24,
          correct: 0,
        },
        {
          ID: 2,
          title: '作业 2',
          post: '2020-09-27',
          ddl: '2020-10-10',
          finished: 21,
          unfinished: 23,
          correct: 0,
        },
        {
          ID: 3,
          title: '作业 3',
          post: '2020-09-28',
          ddl: '2020-10-10',
          finished: 22,
          unfinished: 22,
          correct: 12,
        },
        {
          ID: 4,
          title: '作业 4',
          post: '2020-09-29',
          ddl: '2020-10-10',
          finished: 23,
          unfinished: 21,
          correct: 12,
        },
        {
          ID: 5,
          title: '作业 5',
          post: '2020-06-28',
          ddl: '2020-10-10',
          finished: 24,
          unfinished: 20,
          correct: 12,
        },
      ],
    };
  }

  componentDidMount() {
    const sort = (a, b) => {
      return a.post < b.post;
    };
    var hw = this.state.homework;
    this.setState({homework: hw.sort(sort)});
    const callback = (res) => {
      if (res.status === 200) {
        var homeWork = res.data;
        const sort = (a, b) => {
          return a.post < b.post;
        };
        homeWork = homeWork.sort(sort);
        this.setState({homework: homeWork});
      }
    };
    if (this.props.courseID === null || this.props.courseID === undefined) {
      //getTeaHomework(callback);
    } else {
      //getCourseHomework(this.props.courseID, 'ROLE_TEACHER', callback);
    }
  }

  renderCorrections = (corrections) => {
    if (corrections === null || corrections === undefined) {
      return;
    } else if (corrections === 0) {
      return <Text style={{color: 'green'}}>已批改</Text>;
    } else {
      return <Text style={{color: 'red'}}>未批改：{corrections}</Text>;
    }
  };

  search = () => {
    const callback = (res) => {
      if (res.status === 200) {
        this.setState({homework: res.data});
      }
    };
    //search(this.state.searchValue, callback);
  };

  renderHomework = () => {
    return this.state.homework.map((item, index) => {
      return (
        <Card>
          <CardItem header>
            <Left>
              <Icon name="book" style={{size: 20, color: '#1FA0FC'}} />
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {' '}
                {item.title}
              </Text>
            </Left>
            <Right>
              <Text style={{color: 'gray'}}>发布时间：{item.post}</Text>
            </Right>
          </CardItem>
          <CardItem
            button
            onPress={() => {
              this.props.navigation.navigate('TeaHW', {homeworkID: item.ID});
            }}>
            <Left>
              <Text style={{fontSize: 17}}>
                已完成：{item.finished + item.correct}
              </Text>
            </Left>
            <Right>
              <Text style={{fontSize: 17}}>未完成：{item.unfinished}</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>{this.renderCorrections(item.finished)}</Left>
            <Right>
              <Text style={{color: '#1FA0FC'}}>截止时间：{item.ddl}</Text>
            </Right>
          </CardItem>
        </Card>
      );
    });
  };

  render() {
    return (
      <Content>
        {this.renderHomework()}
        {/*<Card>*/}
        {/*  <CardItem*/}
        {/*    style={{justifyContent: 'center'}}*/}
        {/*    button*/}
        {/*    onPress={() => {*/}
        {/*      console.log('more');*/}
        {/*    }}>*/}
        {/*    <Icon fontSize={20} type="FontAwesome" name="angle-double-right" />*/}
        {/*    <Text>更多</Text>*/}
        {/*  </CardItem>*/}
        {/*</Card>*/}
      </Content>
    );
  }
}
