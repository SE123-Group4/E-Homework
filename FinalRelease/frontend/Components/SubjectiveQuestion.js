import React, {Component} from 'react';
import {Textarea, Card, CardItem, Text} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
let {width} = Dimensions.get('window');

export default class SubjectiveQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '主观题1',
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
        <Textarea rowSpan={5} bordered placeholder="Textarea" />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
  },
});
