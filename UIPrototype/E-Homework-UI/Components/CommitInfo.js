import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, CardItem, Left, Button, Body, Icon, Right} from 'native-base';

export class CommitInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: '学生XXX',
      grade: 'A+',
      time: '10-10 00:00:00',
      content: '这是提交的内容',
      comments: [
        {
          name: '老师XXX',
          content: '留言1',
        },
        {
          name: '学生XXX',
          content: '留言2',
        },
      ],
    };
  }

  renderComments = () => {
    return this.state.comments.map((item) => {
      return (
        <Text style={styles.FootNoteGray}>
          {item.name}：{item.content}
        </Text>
      );
    });
  };

  renderButtons = () => {
    const type = this.props.type;
    if (type === 0) {
      return (
        <CardItem>
          <Button
            icon
            transparent
            vertical
            style={styles.Button}
            onPress={() => {
              console.log('留言');
            }}>
            <Icon
              type="FontAwesome"
              name="comment"
              style={{color: '#0093fe'}}
            />
            <Text>留言</Text>
          </Button>
          <Button
            icon
            transparent
            vertical
            style={styles.Button}
            onPress={() => {
              console.log('修改');
            }}>
            <Icon type="FontAwesome" name="adjust" style={{color: '#0093fe'}} />
            <Text>修改</Text>
          </Button>
        </CardItem>
      );
    }
    if (type === 1) {
      return (
        <CardItem>
          <Button
            icon
            transparent
            vertical
            style={styles.Button}
            onPress={() => {
              console.log('留言');
            }}>
            <Icon
              type="FontAwesome"
              name="comment"
              style={{color: '#0093fe'}}
            />
            <Text>留言</Text>
          </Button>
          <Button
            icon
            transparent
            vertical
            style={styles.Button}
            onPress={() => {
              console.log('评分');
            }}>
            <Icon type="FontAwesome" name="check" style={{color: '#0093fe'}} />
            <Text>评分</Text>
          </Button>
          <Button
            icon
            transparent
            vertical
            style={styles.Button}
            onPress={() => {
              console.log('批改');
            }}>
            <Icon type="FontAwesome" name="adjust" style={{color: '#0093fe'}} />
            <Text>批改</Text>
          </Button>
        </CardItem>
      );
    }
  };

  render() {
    return (
      <Card>
        <CardItem>
          <Body>
            <Text style={styles.Header}>{this.state.student}</Text>
            <Text style={styles.FootNoteGray}>于{this.state.time}提交</Text>
          </Body>
          <Right>
            <Text style={styles.Grade}>{this.state.grade}</Text>
          </Right>
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
            <View>{this.renderComments()}</View>
          </Body>
        </CardItem>
        {this.renderButtons()}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
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
  Button: {
    marginRight: 15,
  },
  Grade: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#0093fe',
  },
});
