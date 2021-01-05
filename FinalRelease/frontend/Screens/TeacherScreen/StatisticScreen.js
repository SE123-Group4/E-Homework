//WrongCollectScreen

import React from 'react';
import {Card, Input} from 'react-native-elements';
import {Dimensions, StyleSheet, View, Text, TextInput} from 'react-native';
import {
  Container,
  Header,
  Content,
  CardItem,
  Right,
  Left,
  Button,
  Item,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
let {width, height} = Dimensions.get('window');

export class StatisticScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseID: '',
      homeworkName: '',
      maxScore: '95',
      minScore: '85',
      averageScore: '90',
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Container>
          <Item
            rounded
            style={{
              backgroundColor: '#CCCCCC',
              height: 60,
              width: width * 0.8,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              marginTop: 80,
              marginBottom: 40,
              left: 40,
              right: 40,
            }}>
            <TextInput
              style={{textAlign: 'center', fontSize: 20}}
              onChangeText={(text) => {
                this.setState({
                  homeworkName: text,
                });
              }}
              placeholder="请输入作业名称"
            />
          </Item>
          <View style={styles.StatisticStyle}>
            <Button style={styles.StatisticBtnStyle} full rounded>
              <Text style={{color: '#f5f1f0', fontSize: 15}}>查询</Text>
            </Button>
          </View>

          <Card>
            <CardItem>
              <Left>
                <Text style={{color: '#0073e9', fontSize: 17}} h5>
                  最高分
                </Text>
              </Left>
              <Text style={{color: '#e97091', fontSize: 18}}>{this.state.maxScore}</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Text style={{color: '#0073e9', fontSize: 17}} h5>
                  最低分
                </Text>
              </Left>
              <Text style={{color: '#e97091', fontSize: 18}}>{this.state.minScore}</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Text style={{color: '#0073e9', fontSize: 17}} h5>
                  平均分
                </Text>
              </Left>
              <Text style={{color: '#e97091', fontSize: 18}}>{this.state.averageScore}</Text>
            </CardItem>
          </Card>
        </Container>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // 侧轴的对齐方式
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(17,17,17,0.08)',
  },

  StatisticStyle: {
    width: width * 1,
    height: 80,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  StatisticBtnStyle: {
    width: width * 0.5,
    height: 50,
    left: 0,
    top: 20,
    color: 'rgba(17,17,17,0.08)',
    backgroundColor: '#0093fe',
  },
});
