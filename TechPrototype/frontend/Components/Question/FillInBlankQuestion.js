import React, {Component} from 'react';
import {Input, Card, CardItem, Text} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
let {width} = Dimensions.get('window');

export default class FillInBlankQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '填空题1',
      answers: '',
    };
  }
  render() {
    return (
      <Card style={styles.card}>
        <CardItem header bordered>
          <Text style={{fontSize: 20, color: 'black'}}>
            {this.state.question}
          </Text>
        </CardItem>
        <CardItem>
          <Input placeholder="请填写……" />
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
  },
});
