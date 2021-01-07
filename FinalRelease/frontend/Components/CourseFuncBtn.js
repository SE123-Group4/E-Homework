import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Icon, Button, Text, CardItem, Card} from 'native-base';
import {deleteCourse} from '../Service/CourseService';

export class CourseFuncBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 1,
    };
  }

  deleteCourse = () => {
    const callback = (res) => {
      if (res.status === 200) {
        Alert.alert('删除成功');
        this.props.listRefresh();
        this.props.navigation.navigate('TeaCourses');
      }
    };
    callback({status: 200});
    deleteCourse(this.props.courseID, callback);
  };

  render() {
    console.log('btn', this.props);
    return (
      <Card>
        <CardItem style={styles.buttonCard}>
          {/*<Button*/}
          {/*  icon*/}
          {/*  transparent*/}
          {/*  vertical*/}
          {/*  style={styles.button}*/}
          {/*  onPress={() => {*/}
          {/*    console.log('文件管理');*/}
          {/*  }}>*/}
          {/*  <Icon type="FontAwesome" name="folder" style={styles.buttonIcon} />*/}
          {/*  <Text style={styles.text}>文件管理</Text>*/}
          {/*</Button>*/}
          <Button
            icon
            transparent
            vertical
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('CourseManage', {
                courseID: this.props.courseID,
                refresh: this.props.infoRefresh,
              });
            }}>
            <Icon type="FontAwesome" name="fa-info" style={styles.buttonIcon} />
            <Text style={styles.text}>修改信息</Text>
          </Button>
          <Button
            icon
            transparent
            vertical
            style={styles.button}
            onPress={() => {
              console.log('check students');
              this.props.navigation.navigate('CheckStu');
            }}>
            <Icon type="FontAwesome" name="users" style={styles.buttonIcon} />
            <Text style={styles.text}>查看学生</Text>
          </Button>
          <Button
            icon
            transparent
            vertical
            style={styles.button}
            onPress={() => {
              console.log('add');
              this.props.navigation.navigate('ImportStu', {
                courseID: this.props.courseID,
                refresh: this.props.listRefresh,
              });
            }}>
            <Icon
              type="FontAwesome"
              name="user-plus"
              style={styles.buttonIcon}
            />
            <Text style={styles.text}>管理学生</Text>
          </Button>
          <Button
            icon
            transparent
            vertical
            style={styles.button}
            onPress={() => {
              Alert.alert('确认删除？', '', [
                {
                  text: '确认',
                  onPress: () => this.deleteCourse(),
                  style: 'cancel',
                },
                {text: '取消', onPress: () => console.log('cancel')},
              ]);
              //console.log('文件管理');
            }}>
            <Icon type="FontAwesome" name="trash" style={styles.deleteButton} />
            <Text style={styles.text}>删除课程</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  buttonCard: {
    flexDirection: 'row',
    marginLeft: -18,
  },
  button: {
    marginLeft: 8,
    color: '#0093fe',
  },
  buttonIcon: {
    fontSize: 40,
    color: '#0093fe',
  },
  deleteButton: {
    fontSize: 40,
    color: 'red',
  },
  text: {color: 'rgba(138,138,138,0.78)', fontSize: 15},
});
