import React from 'react';
import {
  CardItem,
  Card,
  Right,
  Left,
  Text,
  ListItem,
  CheckBox,
  Body,
} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
import {MyImage} from '../MyImage';
const {width} = Dimensions.get('window');

export class ChoiceAnswer extends React.Component {
  constructor() {
    super();
    this.state = {
      choiceAnswer: {
        ID: 2,
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
        totalScore: 10,
        stuScore: 0,
        type: 'MULTIPLE_CHOICE',
        refAnswer: {
          content: 'A,B',
          image: null,
        },
        stuAnswer: {
          content: 'C,B',
          image: null,
        },
      },
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     choiceAnswer: this.props.answer,
  //   });
  // }

  check = (option) => {
    var flag = false;
    var stuArray = this.props.answer.stuAnswer.content.split(',');
    console.log('stuArray', stuArray);
    //stuArray = stuArray.sort((a, b) => a > b);
    for (var i = 0; i < stuArray.length; i++) {
      //console.log(this.props.answer.stuAnswer[i].option, option);
      if (stuArray[i] === option) {
        flag = true;
      }
    }
    return flag;
    //return this.props.answer.stuAnswer.contains(option);
  };

  renderChoices = () => {
    return this.props.answer.options.map((item) => {
      return (
        <ListItem>
          <CheckBox
            color={this.getColor(item.option)}
            checked={this.check(item.option)}
          />
          <Body>
            <Text>
              {item.option}. {item.content}
            </Text>
            <MyImage source={item.image} width={width * 0.9} height={200} />
          </Body>
        </ListItem>
      );
    });
  };

  getRefAnswer = () => {
    //console.log('multi ref', this.props.answer.refAnswer);
    var ref = this.props.answer.refAnswer.content.split(',');
    ref = ref.sort((a, b) => a > b);
    // var s = '';
    // for (var i = 0; i < this.props.answer.refAnswer.content.length; i++) {
    //   s += this.props.answer.refAnswer[i].option;
    //   s += ' ';
    // }
    return ref;
  };

  getColor = (option) => {
    var flag = false;
    if (this.check(option)) {
      var refArray = this.props.answer.refAnswer.content.split(',');
      for (var i = 0; i < refArray.length; i++) {
        if (option === refArray[i]) {
          flag = true;
        }
      }
      if (flag) {
        return 'green';
      } else {
        return 'red';
      }
    } else {
      return 'blue';
    }
  };

  render() {
    return (
      <Card style={styles.card}>
        <CardItem bordered>
          <Text>{this.props.answer.stem}</Text>
        </CardItem>
        <CardItem>
          <MyImage
            source={this.props.answer.image}
            width={width * 0.9}
            height={200}
          />
        </CardItem>
        {this.renderChoices()}
        <CardItem footer>
          <Left>
            <Text>正确答案：{this.getRefAnswer()}</Text>
          </Left>
          <Right>
            <Text>
              得分：
              {this.props.answer.stuScore === null
                ? '-'
                : this.props.answer.stuScore}{' '}
              /{this.props.answer.totalScore}
            </Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: width,
  },
});
