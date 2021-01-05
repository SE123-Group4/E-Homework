//teacher corrects homework screen
import React from 'react';
import {Alert, Dimensions, StyleSheet} from 'react-native';
let {width} = Dimensions.get('window');
import {
  Container,
  Content,
  Button,
  Label,
  Text,
  Card,
  CardItem,
  Grid,
} from 'native-base';
import {commitCorrection, getStuAnswer} from '../../Service/HomeworkService';
import {SimpleChoiceAnswer} from '../../Components/Answer/SimpleChoiceAnswer';
import {ChoiceAnswer} from '../../Components/Answer/ChoiceAnswer';
import {SubjectiveAnswer} from '../../Components/Answer/SubjectiveAnswer';
import {TruthOrFalseAnswer} from '../../Components/Answer/TruthOrFalseAnswer';

export class CorrectHwScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: [
        {
          ID: 1,
          question: {
            stem: {
              content: '题目1单项选择题',
              file: null,
            },
            options: [
              {option: 'A', content: {content: 'Alice', file: null}},
              {option: 'B', content: {content: 'Bob', file: null}},
              {option: 'C', content: {content: 'Cris', file: null}},
              {option: 'D', content: {content: 'Darius', file: null}},
            ],
          },
          totalScore: 10,
          stuScore: 10,
          type: 'ONE_CHOICE',
          refAnswer: {option: 'A', content: {content: 'Alice', file: null}},
          stuAnswer: {option: 'A', content: {content: 'Alice', file: null}},
        },
        {
          ID: 2,
          question: {
            stem: {
              content: '题目2多项选择题',
              file: null,
            },
            options: [
              {option: 'A', content: {content: '选项A', file: null}},
              {option: 'B', content: {content: '选项B', file: null}},
              {option: 'C', content: {content: '选项C', file: null}},
              {option: 'D', content: {content: '选项D', file: null}},
            ],
          },
          totalScore: 10,
          stuScore: 0,
          type: 'MULTIPLE_CHOICE',
          refAnswer: [
            {option: 'A', content: {content: '选项A', file: null}},
            {option: 'B', content: {content: '选项B', file: null}},
          ],
          stuAnswer: [
            {option: 'A', content: {content: '选项A', file: null}},
            {option: 'D', content: {content: '选项D', file: null}},
          ],
        },
        {
          ID: 3,
          question: {
            stem: {
              content: '题目4是非题',
              file: null,
            },
          },
          totalScore: 10,
          stuScore: 0,
          type: 'TRUE_OR_FALSE',
          refAnswer: true,
          stuAnswer: false,
        },
        {
          ID: 4,
          question: {
            stem: {
              content: '题目4主观题',
              file: null,
            },
          },
          totalScore: 10,
          stuScore: null,
          type: 'SUBJECTIVE',
          refAnswer: {
            content: '参考答案的主观题回答',
            file: null,
          },
          stuAnswer: {
            content:
              '纹理单元的主要目的是让我们在着色器中可以使用多于一个的纹理。通过把纹理单元赋值给采样器，我们可以一次绑定多个纹理，只要我们首先激活对应的纹理单元。就像glBindTexture一样，我们可以使用glActiveTexture激活纹理单元，传入我们需要使用的纹理单元',
            file: null,
          },
        },
      ],
      subCorrection: [{ID: 4, stuScore: 5, comment: 'comment 4'}],
    };
  }

  componentDidMount() {
    const callback = (res) => {
      if (res.status === 200) {
        this.setState({answer: res.data});
      }
    };
    //getStuAnswer(this.props.homeworkAssignID, callback);
  }

  classify = (answer) => {
    switch (answer.type) {
      case 'ONE_CHOICE':
        return <SimpleChoiceAnswer answer={answer} />;
      case 'MULTIPLE_CHOICE':
        return <ChoiceAnswer answer={answer} />;
      case 'TRUE_OR_FALSE':
        return <TruthOrFalseAnswer answer={answer} />;
      case 'SUBJECTIVE':
        return (
          <SubjectiveAnswer
            answer={answer}
            setStuScore={(stuScore) => {
              // console.log('screen get score: ', stuScore);
              var flag = false;
              var newScore = this.state.subCorrection;
              for (var i = 0; i < newScore.length; i++) {
                if (newScore[i].ID === answer.ID) {
                  newScore[i].stuScore = stuScore;
                  flag = true;
                  break;
                }
              }
              if (!flag) {
                newScore.push({ID: answer.ID, stuScore: stuScore});
              }
              this.setState({subCorrection: newScore});
              //console.log('state: ', this.state.subCorrection);
            }}
            setComment={(comment) => {
              // console.log('screen get comment: ', comment);
              var flag = false;
              var newComment = this.state.subCorrection;
              for (var i = 0; i < newComment.length; i++) {
                if (newComment[i].ID === answer.ID) {
                  newComment[i].comment = comment;
                  flag = true;
                  break;
                }
              }
              if (!flag) {
                newComment.push({ID: answer.ID, comment: comment});
              }
              this.setState({subCorrection: newComment});
              //console.log('comment: ', this.state.subCorrection);
            }}
          />
        );
    }
  };

  renderAnswers = () => {
    return this.state.answer.map((item) => {
      return this.classify(item);
    });
  };

  commitCorrection = () => {
    const callback = (res) => {
      if (res.status === 200) {
        Alert.alert('批改已提交');
      }
    };
    //commitCorrection(this.state.subCorrection);
  };

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem bordered style={styles.header}>
              <Text style={styles.headerText}>批改作业</Text>
            </CardItem>
          </Card>
          {this.renderAnswers()}
        </Content>
        <Button
          rounded
          info
          style={styles.button}
          onPress={this.commitCorrection}>
          <Text style={styles.buttonText}>提交批改</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {},
  headerText: {
    fontSize: 20,
  },
  button: {
    width: width * 0.4,
    bottom: 20,
    left: width * 0.3,
    position: 'absolute',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
});
