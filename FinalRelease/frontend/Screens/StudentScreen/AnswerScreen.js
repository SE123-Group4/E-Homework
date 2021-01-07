//students answer homework screen

import React from 'react';
import {
  Card,
  CardItem,
  Container,
  Left,
  Right,
  Icon,
  Button,
  Content,
  Text,
} from 'native-base';
import SimpleChoiceQuestion from '../../Components/Question/SimpleChoiceQuestion';
import ChoiceQuestion from '../../Components/Question/ChoiceQuestion';
import TruthOrFalseQuestion from '../../Components/Question/TruthOrFalseQuestion';
import SubjectiveQuestion from '../../Components/Question/SubjectiveQuestion';
import FillInBlankQuestion from '../../Components/Question/FillInBlankQuestion';
import {Alert, Dimensions, ScrollView, StyleSheet} from 'react-native';
import {RichText} from '../../Components/RichText';
import {commitAnswer, getStuQuestion} from '../../Service/HomeworkService';

let {width} = Dimensions.get('window');

export class AnswerScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [
        {ID: 1, title: '问题 1', type: 'ONE_CHOICE'},
        {ID: 2, title: '问题 2', type: 'MULTIPLE_CHOICE'},
        {ID: 3, title: '问题 3', type: 'TRUE_OR_FALSE'},
        {ID: 5, title: '问题 5', type: 'SUBJECTIVE'},
      ],
      handsonID: null,
      ifRichTextShow: false,
      richText: {text: '', fileList: []},
      SimpleChoiceAnswer: [],
      ChoiceAnswer: [],
      TorFAnswer: [],
      SubAnswer: [],
    };
  }

  componentDidMount() {
    const callback = (res) => {
      if (res.status === 200) {
        this.setState({
          quetions: res.data.questionList,
          handsonID: res.data.handsonID,
        });
      }
    };
    //getStuQuestion(this.props.route.params.handsonID, callback);
  }

  getType = (type, ID) => {
    if (type === 'ONE_CHOICE') {
      return (
        <SimpleChoiceQuestion
          setSimpleChoiceAnswer={(option) => {
            var flag = false;
            var newSimpleChoiceAnswer = this.state.SimpleChoiceAnswer;
            for (var i = 0; i < newSimpleChoiceAnswer.length; i++) {
              if (newSimpleChoiceAnswer[i].ID === ID) {
                newSimpleChoiceAnswer[i].option = [option];
                flag = true;
                break;
              }
            }
            if (!flag) {
              newSimpleChoiceAnswer.push({ID: ID, option: [option]});
            }
            this.setState({SimpleChoiceAnswer: newSimpleChoiceAnswer});
            console.log('simple', this.state.SimpleChoiceAnswer);
          }}
        />
      );
    }
    if (type === 'MULTIPLE_CHOICE') {
      return (
        <ChoiceQuestion
          setChoiceAnswer={(option) => {
            var flag = false;
            var newChoiceAnswer = this.state.ChoiceAnswer;
            for (var i = 0; i < newChoiceAnswer.length; i++) {
              if (newChoiceAnswer[i].ID === ID) {
                newChoiceAnswer[i].option = option;
                flag = true;
                break;
              }
            }
            if (!flag) {
              newChoiceAnswer.push({ID: ID, option: option});
            }
            this.setState({ChoiceAnswer: newChoiceAnswer});
            console.log('multi', this.state.ChoiceAnswer);
          }}
        />
      );
    }
    if (type === 'TRUE_OR_FALSE') {
      return (
        <TruthOrFalseQuestion
          setTrueOrFalse={(option) => {
            var flag = false;
            var newTorFAnswer = this.state.TorFAnswer;
            for (var i = 0; i < newTorFAnswer.length; i++) {
              if (newTorFAnswer[i].ID === ID) {
                newTorFAnswer[i].option = option;
                flag = true;
                break;
              }
            }
            if (!flag) {
              newTorFAnswer.push({ID: ID, option: option});
            }
            this.setState({TorFAnswer: newTorFAnswer});
            console.log('TF', this.state.TorFAnswer);
          }}
        />
      );
    }
    if (type === 'SUBJECTIVE') {
      // console.log(this.state.ifRichTextShow);
      // console.log(this.state.richText);
      return (
        <SubjectiveQuestion
          ifRichTextShow={this.state.ifRichTextShow}
          richText={this.state.richText}
          setRichText={(richText) => {
            var flag = false;
            var newSubAnswer = this.state.SubAnswer;
            for (var i = 0; i < newSubAnswer.length; i++) {
              if (newSubAnswer[i].ID === ID) {
                newSubAnswer[i].content = richText.text;
                newSubAnswer[i].image = richText.image;
                flag = true;
                break;
              }
            }
            if (!flag) {
              newSubAnswer.push({
                ID: ID,
                content: richText.text,
                image: richText.image,
              });
            }
            this.setState({TorFAnswer: newSubAnswer});
            console.log('sub', this.state.SubAnswer);
          }}
        />
      );
    }
  };

  renderQuestion = () => {
    return this.state.questions.map((item) => {
      return (
        <Card>
          {/*<CardItem header>*/}
          {/*  <Left>*/}
          {/*    <Text style={{fontSize: 20, fontWeight: 'bold'}}>*/}
          {/*      {' '}*/}
          {/*      {item.title}*/}
          {/*    </Text>*/}
          {/*  </Left>*/}
          {/*</CardItem>*/}
          <CardItem>{this.getType(item.type, item.ID)}</CardItem>
        </Card>
      );
    });
  };

  commitAnswer = () => {
    const callback = (res) => {
      if (res.status === 200) {
        Alert.alert('提交成功');
      }
    };
    var answers = {
      SimpleChoiceAnswer: this.state.SimpleChoiceAnswer,
      ChoiceAnswer: this.state.ChoiceAnswer,
      TorFAnswer: this.state.TorFAnswer,
      SubAnswer: this.state.SubAnswer,
    };
    //commitAnswer(answers, this.state.handsonID, callback);
  };

  render() {
    return (
      <Container>
        <Content style={styles.quetions}>
          {this.renderQuestion()}
          <Card>
            <CardItem>
              <Button
                rounded
                info
                style={styles.button}
                onPress={this.commitAnswer}>
                <Text style={styles.buttonText}>提交作业</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  quetions: {
    // bottom: 30,
  },
  button: {
    width: width * 0.4,
    //bottom: 10,
    left: width * 0.25,
    //position: 'absolute',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
});
