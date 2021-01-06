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
import {MyImage} from '../MyImage';
let {width} = Dimensions.get('window');
export default class TruthOrFalseQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {
        stem: '题目4是非题',
        image: null,
      },
      stuAnswer: null,
    };
  }

  render() {
    return (
      <Card style={styles.card}>
        <CardItem header bordered>
          <Text style={{fontSize: 20, color: 'black'}}>
            {this.state.question.stem}
          </Text>
        </CardItem>
        <CardItem>
          <MyImage
            source={this.state.question.image}
            width={width * 0.9}
            height={200}
          />
        </CardItem>
        <ListItem>
          <CheckBox
            checked={this.state.stuAnswer === true}
            color="green"
            onPress={() => {
              this.setState({stuAnswer: true});
              this.props.setTrueOrFalse(true);
            }}
          />
          <Body>
            <Text>正确</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox
            checked={this.state.stuAnswer === false}
            color="red"
            onPress={() => {
              this.setState({stuAnswer: false});
              this.props.setTrueOrFalse(false);
            }}
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
