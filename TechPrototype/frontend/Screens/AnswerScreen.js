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
  Text,
} from 'native-base';
import SimpleChoiceQuestion from '../Components/SimpleChoiceQuestion';
import ChoiceQuestion from '../Components/ChoiceQuestion';
import TruthOrFalseQuestion from '../Components/TruthOrFalseQuestion';
import SubjectiveQuestion from '../Components/SubjectiveQuestion';
import FillInBlankQuestion from '../Components/FillInBlankQuestion';

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
      return <SubjectiveQuestion />;
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
    return <Container>{this.renderQuestion()}</Container>;
  }
}
