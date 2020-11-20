import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Text,
  Body,
  Card,
  CardItem,
} from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';
let {width} = Dimensions.get('window');
export default class TruthOrFalseQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '是非题1',
      answer: -1,
      pick: [false, false],
    };
  }
  clickBox = (props) => {
    var p = [false, false];
    p[props] = true;
    this.setState({pick: p, answer: props});
  };
  render() {
    return (
      <Card style={styles.card}>
        <CardItem header bordered>
          <Text style={{fontSize: 20, color: 'black'}}>
            {this.state.question}
          </Text>
        </CardItem>
        <ListItem>
          <CheckBox
            checked={this.state.pick[0]}
            color="green"
            onPress={() => this.clickBox(0)}
          />
          <Body>
            <Text>正确</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox
            checked={this.state.pick[1]}
            color="red"
            onPress={() => this.clickBox(1)}
          />
          <Body>
            <Text>错误</Text>
          </Body>
        </ListItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
  },
});
