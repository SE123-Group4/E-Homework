import React from 'react';
import {CommitInfo} from '../Components/CommitInfo';
import {Search} from '../Components/Search';
import {ScrollView, View, StyleSheet} from 'react-native';
import {
  Card,
  CardItem,
  Button,
  Body,
  Icon,
  Right,
  Tab,
  Tabs,
  Text
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
              transparent
              onPress={() => {
                console.log('打电话');
              }}>
              <Icon
                type="FontAwesome"
                name="phone"
                style={{color: '#0093fe'}}
              />
            </Button>
          </Right>
        </CardItem>
      );
    });
  };

  render() {
    return (
      <Tabs>
        <Tab
          tabStyle={{backgroundColor: '#0093fe'}}
          textStyle={{color: 'white'}}
          activeTabStyle={{backgroundColor: '#0093fe'}}
          heading="已提交">
          {this.renderCommit()}
        </Tab>
        <Tab
          tabStyle={{backgroundColor: '#0093fe'}}
          textStyle={{color: 'white'}}
          activeTabStyle={{backgroundColor: '#0093fe'}}
          heading="未提交">
          <Card>
            <View>{this.renderUnCommit()}</View>
          </Card>
          <Button iconLeft rounded transparent>
            <Icon type="FontAwesome"
                  name="phone"
                  style={{color: '#0093fe'}}/>
            <Text style={{fontSize: 18,color:'black'}}>一键提醒</Text>
          </Button>
        </Tab>
      </Tabs>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  Button: {
    backgroundColor: '#0093fe',
    width: '40%',
  },
  ButtonText: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 18,
  },
});
