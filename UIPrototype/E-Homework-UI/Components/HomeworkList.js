//the component of homework list which can be used by home screen and course screen

import React from 'react';
import {Text} from 'react-native';
import {Card, CardItem, Container, Left, Right, Icon} from 'native-base';

export class HomeworkList extends React.Component {
  constructor() {
    super();
    this.state = {
      homework: [
        {title: '作业 1', post: '2020-09-28', ddl: '2020-10-10', state: 0},
        {title: '作业 2', post: '2020-09-28', ddl: '2020-10-10', state: 0},
        {title: '作业 3', post: '2020-09-28', ddl: '2020-10-10', state: 0},
        {title: '作业 4', post: '2020-09-28', ddl: '2020-10-10', state: 0},
        {title: '作业 5', post: '2020-09-28', ddl: '2020-10-10', state: 0},
      ],
    };
  }

  renderHomework = () => {
    return this.state.homework.map((item) => {
      return (
        <Card>
          <CardItem header>
            <Left>
              <Text>{item.title}</Text>
            </Left>
            <Right>
              <Text>发布时间：{item.post}</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text>已提交</Text>
              <Text>{item.state}</Text>
            </Left>
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
