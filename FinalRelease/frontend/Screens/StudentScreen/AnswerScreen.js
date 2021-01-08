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
        {
          ID: 1,
          title: '问题 1',
          stem: '',
          type: 'ONE_CHOICE',
          options: [
            {
              option: 'A',
              content: 'TO THE A',
              image: null,
            },
            {
              option: 'B',
              content: 'TO THE A',
              image: null,
            },
            {
              option: 'C',
              content: 'TO THE A',
              image: null,
            },
            {
              option: 'D',
              content: 'TO THE A',
              image: null,
            },
          ],
        },
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
    console.log('answer screen init');
    const callback = (res) => {
      if (res.status === 200) {
        console.log('get stu question res', res.data);
        this.setState({
          questions: res.data.question,
          handsonID: res.data.handsonID,
        });
      }
    };
    getStuQuestion(this.props.route.params.handsonID, callback);
  }

  getType = (type, item) => {
    console.log('item', item);
    if (type === 'ONE_CHOICE') {
      return (
        <SimpleChoiceQuestion
          question={item}
          setSimpleChoiceAnswer={(option) => {
            var flag = false;
            var newSimpleChoiceAnswer = this.state.SimpleChoiceAnswer;
            for (var i = 0; i < newSimpleChoiceAnswer.length; i++) {
              if (newSimpleChoiceAnswer[i].ID === item.ID) {
                newSimpleChoiceAnswer[i].option = [option];
                flag = true;
                break;
              }
            }
            if (!flag) {
              newSimpleChoiceAnswer.push({ID: item.ID, option: [option]});
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
          question={item}
          setChoiceAnswer={(option) => {
            var flag = false;
            var newChoiceAnswer = this.state.ChoiceAnswer;
            for (var i = 0; i < newChoiceAnswer.length; i++) {
              if (newChoiceAnswer[i].ID === item.ID) {
                newChoiceAnswer[i].option = option;
                flag = true;
                break;
              }
            }
            if (!flag) {
              newChoiceAnswer.push({ID: item.ID, option: option});
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
          question={item}
          setTrueOrFalse={(option) => {
            var flag = false;
            var newTorFAnswer = this.state.TorFAnswer;
            for (var i = 0; i < newTorFAnswer.length; i++) {
              if (newTorFAnswer[i].ID === item.ID) {
                newTorFAnswer[i].option = option;
                flag = true;
                break;
              }
            }
            if (!flag) {
              newTorFAnswer.push({ID: item.ID, option: option});
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
          question={item}
          ifRichTextShow={this.state.ifRichTextShow}
          richText={this.state.richText}
          setRichText={(richText) => {
            var flag = false;
            this.setState({richText: richText})
            var newSubAnswer = this.state.SubAnswer;
            for (var i = 0; i < newSubAnswer.length; i++) {
              if (newSubAnswer[i].ID === item.ID) {
                newSubAnswer[i].content = richText.content;
                newSubAnswer[i].image = richText.image;
                flag = true;
                break;
              }
            }
            if (!flag) {
              newSubAnswer.push({
                ID: item.ID,
                content: richText.content,
                image: richText.image,
              });
            }
            this.setState({SubAnswer: newSubAnswer});
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
          <CardItem>{this.getType(item.type, item)}</CardItem>
        </Card>
      );
    });
  };

  commitAnswer = () => {
    const callback = (res) => {
      if (res.status === 200) {
        Alert.alert('提交成功');
        this.props.route.params.refresh();
        this.props.navigation.navigate('StuHome');
      }
    };
    var answers = {
      SimpleChoiceAnswer: this.state.SimpleChoiceAnswer,
      ChoiceAnswer: this.state.ChoiceAnswer,
      TorFAnswer: this.state.TorFAnswer,
      SubAnswer: this.state.SubAnswer,
    };
    commitAnswer(answers, this.state.handsonID, callback);
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
