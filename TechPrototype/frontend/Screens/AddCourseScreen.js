//AddCourse screen

import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import {Dimensions, StyleSheet, View, Text, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
let {width, height} = Dimensions.get('window');
import {
  Container,
  Header,
  Content,
  Textarea,
  Form,
  Label,
  Item,
  Input,
  Left,
  Right,
  DatePicker,
  CardItem,
} from 'native-base';
import {addCourse} from '../Service/CourseService';
import {dateFormat} from '../Util/DateUtil';

export class AddCourseScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      teacher: null,
      startTime: null,
      endTime: null,
      introduction: null,
      book: null,
      takes: null,
    };
  }

  addCourse = () => {
    const callback = (data) => {
      if (data.status === 200) {
        Alert.alert('添加课程成功');
        this.props.navigation.navigate('TeaCourses');
      }
    };
    let _loadTeacher = async () => {
      try {
        var teacher = JSON.parse(await AsyncStorage.getItem('userInfo')).id;
        console.log(teacher);
        addCourse(
          teacher,
          this.state.name,
          this.state.introduction,
          this.state.book,
          this.state.startTime,
          this.state.endTime,
          1,
          callback,
        );
      } catch (e) {}
    };
    _loadTeacher();
  };

  render() {
    return (
      <Container>
        {/*<Header />*/}
        <Content padder>
          <Item floatingLabel style={{height: 120}}>
            <Label style={{fontSize: 20, fontWeight: 'bold'}}>课程名称</Label>
            <Input onChangeText={(text) => this.setState({name: text})} />
          </Item>
          <Item floatingLabel last style={styles.label}>
            <Label style={styles.input}>所需教材</Label>
            <Input onChangeText={(text) => this.setState({book: text})} />
          </Item>
          <Item floatingLabel last style={styles.label}>
            <Label>人数上限</Label>
            <Input onChangeText={(text) => this.setState({takes: text})} />
          </Item>
          <Item last style={styles.label}>
            <Label style={{left: 14}}>开课时间</Label>
            <Right>
              <DatePicker
                defaultDate={new Date()}
                locale={'en'}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={'fade'}
                androidMode={'default'}
                placeHolderText="选择日期"
                textStyle={{color: '#0093fe'}}
                placeHolderTextStyle={{color: '#d3d3d3'}}
                onDateChange={(date) =>
                  this.setState({startTime: dateFormat(date)})
                }
                disabled={false}
              />
            </Right>
          </Item>
          <Item last style={styles.label}>
            <Label style={{left: 14}}>结课日期</Label>
            <Right>
              <DatePicker
                defaultDate={new Date()}
                locale={'en'}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={'fade'}
                androidMode={'default'}
                placeHolderText="选择日期"
                textStyle={{color: '#0093fe'}}
                placeHolderTextStyle={{color: '#d3d3d3'}}
                onDateChange={(date) =>
                  this.setState({endTime: dateFormat(date)})
                }
                disabled={false}
              />
            </Right>
          </Item>
          <Item floatingLabel last style={styles.label}>
            <Label>课程简介</Label>
            <Input
              onChangeText={(text) => this.setState({introduction: text})}
            />
          </Item>
          <Item style={{justifyContent: 'center'}}>
            <Button
              onPress={this.addCourse}
              buttonStyle={styles.BtnStyle}
              title="提交"
            />
          </Item>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // 侧轴的对齐方式
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(244,249,249,0.27)',
  },

  BtnStyle: {
    width: width * 0.5,
    height: 50,
    backgroundColor: '#0093fe',
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 10,
  },
  label: {
    height: 80,
  },
  input: {
    //fontSize: 20
  },
});
