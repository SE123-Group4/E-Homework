//teacher corrects homework screen
import React from 'react';
import {
  Container,
  Content,
  Button,
  Label,
  Text,
  Card,
  CardItem,
} from 'native-base';
import {getStuAnswer} from '../../Service/HomeworkService';
import {SimpleChoiceAnswer} from '../../Components/Answer/SimpleChoiceAnswer';
import {ChoiceAnswer} from '../../Components/Answer/ChoiceAnswer';
import {SubjectiveAnswer} from '../../Components/Answer/SubjectiveAnswer';

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
              {option: 'A', content: {content: '选项A', file: null}},
              {option: 'B', content: {content: '选项B', file: null}},
              {option: 'C', content: {content: '选项C', file: null}},
              {option: 'D', content: {content: '选项D', file: null}},
            ],
          },
          totalScore: 10,
          stuScore: 10,
          type: 'ONE_CHOICE',
          refAnswer: {option: 'A', content: {content: '选项A', file: null}},
          stuAnswer: {option: 'A', content: {content: '选项A', file: null}},
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
            {option: 'C', content: {content: '选项C', file: null}},
            {option: 'D', content: {content: '选项D', file: null}},
          ],
        },
        {
          ID: 3,
          question: {
            stem: {
              content: '题目3主观题',
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
            content: '学生的主观题回答',
            file: null,
          },
        },
      ],
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
      case 'SUBJECTIVE':
        return <SubjectiveAnswer answer={answer} />;
    }
  };

  renderAnswers = () => {
    return this.state.answer.map((item) => {
      return this.classify(item);
    });
  };

  render() {
    return (
      <Container>
        <Content>
          <Text>批改作业</Text>
          {/*<Card>*/}
          {/*  <CardItem header bordered>*/}
          {/*    <Text>批改作业</Text>*/}
          {/*  </CardItem>*/}
          {/*</Card>*/}
          {/*{this.renderAnswers}*/}
        </Content>
      </Container>
    );
  }
}
