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
import {ScrollView} from 'react-native';
import {RichText} from '../../Components/RichText';

export class AnswerScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      question: [
        {title: '问题 1', type: 'SimpleChoice'},
        {title: '问题 2', type: 'MultiChoice'},
        {title: '问题 3', type: 'TruthOrFalseQuestion'},
        {title: '问题 4', type: 'FillInBlankQuestion'},
        {title: '问题 5', type: 'SubjectiveQuestion'},
      ],
      ifRichTextShow: false,
      richText: {text: '', fileList: []},
    };
  }

  getType = (type) => {
    if (type === 'SimpleChoice') {
      return <SimpleChoiceQuestion />;
    }
    if (type === 'MultiChoice') {
      return <ChoiceQuestion />;
    }
    if (type === 'TruthOrFalseQuestion') {
      return <TruthOrFalseQuestion />;
    }
    if (type === 'FillInBlankQuestion') {
      return <FillInBlankQuestion />;
    }
    if (type === 'SubjectiveQuestion') {
      console.log(this.state.ifRichTextShow);
      console.log(this.state.richText);
      return (
        <SubjectiveQuestion
          ifRichTextShow={this.state.ifRichTextShow}
          richText={this.state.richText}
        />
      );
    }
  };

  renderQuestion = () => {
    return this.state.question.map((item) => {
      return (
        <Card>
          <CardItem header>
            <Left>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {' '}
                {item.title}
              </Text>
            </Left>
          </CardItem>
          <CardItem>{this.getType(item.type)}</CardItem>
        </Card>
      );
    });
  };
  render() {
    return (
      <Container>
        <Content>{this.renderQuestion()}</Content>
      </Container>
    );
  }
}
