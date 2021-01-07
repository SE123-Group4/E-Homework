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
  Content,
  Text,
} from 'native-base';
import {SearchBar} from 'react-native-elements';
import {getCourseHomework} from '../Service/HomeworkService';

export class StuHomeworkList extends React.Component {
  constructor() {
    super();
    this.state = {
      homework: [
        {
          ID: 1,
          title: '作业 1',
          post: '2020-09-28',
          ddl: '2020-10-10',
          state: 'UNSUBMITTED',
        },
        {
          ID: 2,
          title: '作业 2',
          post: '2020-09-28',
          ddl: '2020-10-14',
          state: 'SUBMITTED',
        },
        {
          ID: 3,
          title: '作业 3',
          post: '2020-09-28',
          ddl: '2020-10-17',
          state: 'LATE',
        },
        {
          ID: 4,
          title: '作业 4',
          post: '2020-09-28',
          ddl: '2020-12-10',
          state: 'CORRECTED',
        },
        {
          ID: 5,
          title: '作业 5',
          post: '2020-09-28',
          ddl: '2021-10-10',
          state: 'SUBMITTED',
        },
      ],
      searchValue: '',
    };
  }

  componentDidMount() {
    const callback = (res) => {
      if (res.status === 200) {
        var homeWork = res.data;
        const sort = (a, b) => {
          return a.ddl < b.ddl;
        };
        homeWork = homeWork.sort(sort);
        this.setState({homework: homeWork});
      }
    };
    if (this.props.courseID === null || this.props.courseID === undefined) {
      //getStuHomework(callback);
    } else {
      //getCourseHomework(this.props.courseID, 'ROLE_STUDENT', callback);
    }
  }

  getState = (state) => {
    if (state === 'UNSUBMITTED') {
      return (
        <Button rounded light>
          <Text style={{color: 'white'}}>未提交</Text>
        </Button>
      );
    }
    if (state === 'SUBMITTED') {
      return (
        <Button rounded success>
          <Text>已提交</Text>
        </Button>
      );
    }
    if (state === 'LATE') {
      return (
        <Button rounded warning>
          <Text>补交</Text>
        </Button>
      );
    }
    if (state === 'CORRECTED') {
      return (
        <Button rounded info>
          <Text>已批改</Text>
        </Button>
      );
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
    if (this.state.homework.length === 0) {
      return (
        <Card>
          <CardItem style={{justifyContent: 'center'}}>
            <Text>暂无作业</Text>
          </CardItem>
        </Card>
      );
    } else {
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
                if (item.state !== 'UNSUBMITTED') {
                  this.props.navigation.navigate('StuHW', {
                    handsonID: item.ID,
                    //state: item.state,
                  });
                } else {
                  this.props.navigation.navigate('AnswerHW', {
                    handsonID: item.ID,
                  });
                }
              }}>
              <Left style={{marginLeft: 8}}>{this.getState(item.state)}</Left>
              <Right>
                <Text style={{color: '#1FA0FC'}}>截止时间：{item.ddl}</Text>
              </Right>
            </CardItem>
          </Card>
        );
      });
    }
  };
  render() {
    return (
      <Content>
        <SearchBar
          placeholder="搜索"
          onChangeText={(text) => this.setState({searchValue: text})}
          onSubmitEditing={this.search()}
          value={this.state.searchValue}
          lightTheme
          inputContainerStyle={{backgroundColor: '#f0f2f3'}}
          containerStyle={{backgroundColor: 'white'}}
          round
        />
        {this.renderHomework()}
        {/*<Card>*/}
        {/*  <CardItem*/}
        {/*    style={{justifyContent: 'center'}}*/}
        {/*    button*/}
        {/*    onPress={() => {*/}
        {/*      console.log('more');*/}
        {/*    }}>*/}
        {/*    <Icon type="FontAwesome" name="angle-double-right" />*/}
        {/*    <Text>更多</Text>*/}
        {/*  </CardItem>*/}
        {/*</Card>*/}
      </Content>
    );
  }
}
