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
import {Dimensions, StyleSheet} from 'react-native';
import {MyImage} from '../MyImage';
let {width} = Dimensions.get('window');

export default class ChoiceQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {
        stem: '题目2多项选择题',
        image: null,
        options: [
          {option: 'A', content: '选项A', image: null},
          {option: 'B', content: '选项B', image: null},
          {option: 'C', content: '选项C', image: null},
          {option: 'D', content: '选项D', image: null},
        ],
      },
      stuAnswers: [],
    };
  }

  check = (option) => {
    var flag = false;
    for (var i = 0; i < this.state.stuAnswers.length; i++) {
      //console.log(this.props.answer.stuAnswer[i].option, option);
      if (this.state.stuAnswers[i].option === option) {
        flag = true;
      }
    }
    return flag;
    //return this.props.answer.stuAnswer.contains(option);
  };

  click = (item) => {
    var newAnswers = this.state.stuAnswers;
    if (this.check(item.option)) {
      newAnswers = newAnswers.filter(function (answer) {
        return answer.option !== item.option;
      });
      console.log('new multi', newAnswers);
      this.setState({stuAnswers: newAnswers});
      this.props.setChoiceAnswer(newAnswers);
    } else {
      newAnswers.push(item);
      this.setState({stuAnswers: newAnswers});
      this.props.setChoiceAnswer(newAnswers);
    }
  };

  renderChoices = () => {
    return this.state.question.options.map((item) => {
      return (
        <ListItem>
          <CheckBox
            checked={this.check(item.option)}
            onPress={() => this.click(item)}
          />
          <Body>
            <Text>{item.content}</Text>
            <MyImage source={item.image} width={width * 0.9} height={200} />
          </Body>
        </ListItem>
      );
    });
  };
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
        {this.renderChoices()}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
  },
});
