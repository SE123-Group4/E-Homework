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
          state: 1,
        },
        {
          ID: 2,
          title: '作业 2',
          post: '2020-09-28',
          ddl: '2020-10-10',
          state: 0,
        },
        {
          ID: 3,
          title: '作业 3',
          post: '2020-09-28',
          ddl: '2020-10-10',
          state: 2,
        },
        {
          ID: 4,
          title: '作业 4',
          post: '2020-09-28',
          ddl: '2020-10-10',
          state: 0,
        },
        {
          ID: 5,
          title: '作业 5',
          post: '2020-09-28',
          ddl: '2020-10-10',
          state: 0,
        },
      ],
      searchValue: '',
    };
  }

  componentDidMount() {
    const callback = (res) => {
      if (res.status === 200) {
        this.setState({homework: res.data});
      }
    };
    if (this.props.courseID === null || this.props.courseID === undefined) {
      //getStuHomework(callback);
    } else {
      getCourseHomework(this.props.courseID, 'ROLE_STUDENT', callback);
    }
  }

  getState = (state) => {
    if (state === 0) {
      return (
        <Button rounded light>
          <Text style={{color: 'white'}}>未提交</Text>
        </Button>
      );
    }
    if (state === 1) {
      return (
        <Button rounded success>
          <Text>已提交</Text>
        </Button>
      );
    }
    if (state === 2) {
      return (
        <Button rounded warning>
          <Text>补交</Text>
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
    console.log(this.props.navigation);
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
              if (item.state !== 0) {
                this.props.navigation.navigate('StuHW', {homeworkID: item.ID});
              } else {
                this.props.navigation.navigate('AnswerHW', {
                  homeworkAssignID: item.ID,
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
          containerStyle={{backgroundColor: 'white'}}
          round
        />
        {this.renderHomework()}
        <Card>
          <CardItem
            style={{justifyContent: 'center'}}
            button
            onPress={() => {
              console.log('more');
            }}>
            <Icon type="FontAwesome" name="angle-double-right" />
            <Text>更多</Text>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
