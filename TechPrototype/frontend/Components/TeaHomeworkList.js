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

export class TeaHomeworkList extends React.Component {
  constructor() {
    super();
    this.state = {
      homework: [
        {
          title: '作业 1',
          post: '2020-09-28',
          ddl: '2020-10-10',
          finished: 20,
          unfinished: 24,
        },
        {
          title: '作业 2',
          post: '2020-09-28',
          ddl: '2020-10-10',
          finished: 21,
          unfinished: 23,
        },
        {
          title: '作业 3',
          post: '2020-09-28',
          ddl: '2020-10-10',
          finished: 22,
          unfinished: 22,
        },
        {
          title: '作业 4',
          post: '2020-09-28',
          ddl: '2020-10-10',
          finished: 23,
          unfinished: 21,
        },
        {
          title: '作业 5',
          post: '2020-09-28',
          ddl: '2020-10-10',
          finished: 24,
          unfinished: 20,
        },
      ],
    };
  }

  renderHomework = () => {
    return this.state.homework.map((item) => {
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
            <Left>
              <Text style={{fontSize: 17}}>已完成：{item.finished}</Text>
            </Left>
            <Right>
              <Text style={{fontSize: 17}}>未完成：{item.unfinished}</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left />
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
