import React from 'react';
import {CommitInfo} from '../Components/CommitInfo';
import {Search} from '../Components/Search';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import {
  Card,
  CardItem,
  Button,
  Body,
  Icon,
  Right,
  Tab,
  Tabs,
} from 'native-base';

export class CommitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unCommit: ['学生1', '学生2', '学生3'],
    };
  }

  renderCommit = () => {
    return (
      <ScrollView>
        <Search />
        <CommitInfo type={1} />
        <CommitInfo type={1} />
        <CommitInfo type={1} />
      </ScrollView>
    );
  };

  renderUnCommit = () => {
    return this.state.unCommit.map((item) => {
      return (
        <CardItem>
          <Body>
            <Text style={styles.Header}>{item}</Text>
          </Body>
          <Right>
            <Button
              icon
              bordered
              onPress={() => {
                console.log('打电话');
              }}>
              <Icon type="FontAwesome" name="phone" />
            </Button>
          </Right>
        </CardItem>
      );
    });
  };

  render() {
    return (
      <Tabs>
        <Tab heading="已提交">{this.renderCommit()}</Tab>
        <Tab heading="未提交">
          <Card>
            <View>{this.renderUnCommit()}</View>
          </Card>
          <Button bordered block>
            <Text style={styles.Button}>一键提醒</Text>
          </Button>
        </Tab>
      </Tabs>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  Button: {
    fontWeight: 'normal',
    fontSize: 20,
  },
});
