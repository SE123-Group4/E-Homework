import React from 'react';
import {HomeworkInfo} from '../../Components/HomeworkInfo';
import {CommitInfo} from '../../Components/CommitInfo';
import {ScrollView} from 'react-native';

export class StuHWScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <HomeworkInfo />
        <CommitInfo type={0} />
      </ScrollView>
    );
  }
}
