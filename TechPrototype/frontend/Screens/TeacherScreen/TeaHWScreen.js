import React from 'react';
import {HomeworkInfo} from '../../Components/HomeworkInfo';
import {HWFuncBtn} from '../../Components/HWFuncBtn';
import {CommitList} from '../../Components/CommitList';
import {ScrollView} from 'react-native';

export class TeaHWScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <HomeworkInfo />
        <HWFuncBtn />
        <CommitList />
      </ScrollView>
    );
  }
}
