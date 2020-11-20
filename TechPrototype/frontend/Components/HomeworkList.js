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
} from 'native-base';

export class HomeworkList extends React.Component {
  constructor() {
    super();
    this.state = {
      homework: [
        {title: '作业 1', post: '2020-09-28', ddl: '2020-10-10', state: 1},
        {title: '作业 2', post: '2020-09-28', ddl: '2020-10-10', state: 2},
        {title: '作业 3', post: '2020-09-28', ddl: '2020-10-10', state: 0},
        {title: '作业 4', post: '2020-09-28', ddl: '2020-10-10', state: 0},
        {title: '作业 5', post: '2020-09-28', ddl: '2020-10-10', state: 0},
      ],
    };
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
          <CardItem>
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
      <Container>
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
      </Container>
    );
  }
}
