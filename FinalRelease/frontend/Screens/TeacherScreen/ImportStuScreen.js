//invites user screen

import React from 'react';
import {Button, ButtonGroup} from 'react-native-elements';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ViewComponent,
  Alert,
} from 'react-native';
import {
  Card,
  CardItem,
  Icon,
  Left,
  Right,
  Item,
  Input,
  Content,
  Container,
} from 'native-base';
import {addStudent, deleteStudent} from '../../Service/CourseService';
let {width, height} = Dimensions.get('window');

export class ImportStuScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      studentIDs: [],
      index: [0],
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
  }

  getState = (state) => {
    if (state === 0) {
      return <Button buttonStyle={styles.BtnStyle} title={'Excel导入'} />;
    }
    if (state === 1) {
      return <Button buttonStyle={styles.delBtnStyle} title={'Excel删除'} />;
    }
  };

  addIndex = () => {
    var newIndex = this.state.index;
    newIndex.push(newIndex.length);
    console.log(newIndex);
    this.setState({index: newIndex});
  };

  deleteIndex = () => {
    var newIndex = this.state.index;
    newIndex.pop();
    var newIDs = this.state.studentIDs;
    newIDs.pop();
    this.setState({index: newIndex, studentIDs: newIDs});
  };

  addStudents = () => {
    console.log('add');
    const callback = (res) => {
      if (res.status === 200) {
        Alert.alert('添加成功！');
        this.setState({index: [0], studentIDs: []});
      } else if (res.status === 400) {
        Alert.alert('有不存在的学号');
      }
    };
    //addStudent(this.state.studentIDs, this.props.courseID, callback);
  };

  deleteStudents = () => {
    console.log('delete');
    const callback = (res) => {
      if (res.status === 200) {
        Alert.alert('删除成功！');
        this.setState({index: [0], studentIDs: []});
      } else if (res.status === 400) {
        Alert.alert('有不存在的学号！');
      }
    };
    //deleteStudent(this.state.studentIDs, this.props.courseID, callback);
  };

  commit = () => {
    console.log('commit');
    if (this.state.studentIDs.length === 0) {
      Alert.alert('请输入学号');
      return;
    }
    for (var ID in this.state.studentIDs) {
      if (ID === null || ID === undefined || ID === '') {
        Alert.alert('请输入学号');
        return;
      }
    }
    if (this.state.selectedIndex === 0) {
      this.addStudents();
    } else {
      this.deleteStudents();
    }
  };

  renderInput = () => {
    return this.state.index.map((item) => {
      return (
        <Item rounded style={styles.input}>
          <Input
            keyboardType="numeric"
            style={styles.text}
            placeholder="学号"
            value={this.state.studentIDs[item]}
            onChangeText={(text) => {
              var newIDs = this.state.studentIDs;
              newIDs[item] = text;
              this.setState({studentIDs: newIDs});
            }}
          />
        </Item>
      );
    });
  };

  render() {
    const buttons = ['添加学生', '删除学生'];
    const {selectedIndex} = this.state;

    return (
      <Container style={{flex: 1}}>
        <Content style={styles.container}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={styles.state}
          />
          {this.renderInput()}
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Button
              onPress={() => this.addIndex()}
              type="clear"
              icon={
                <Icon
                  type="FontAwesome"
                  name="plus"
                  style={{color: '#0093fe'}}
                />
              }
            />
            <Button
              onPress={() => this.deleteIndex()}
              type="clear"
              icon={
                <Icon type="FontAwesome" name="minus" style={{color: 'red'}} />
              }
            />
          </View>

          {/*<Item rounded style={styles.input}>*/}
          {/*  <Input style={styles.text} placeholder="学号" />*/}
          {/*</Item>*/}
          {/*<Item rounded style={styles.input}>*/}
          {/*  <Input style={styles.text} placeholder="学号" />*/}
          {/*</Item>*/}
          {/*<Item rounded style={styles.input}>*/}
          {/*  <Input style={styles.text} placeholder="学号" />*/}
          {/*</Item>*/}
          {/*<Button style={styles.BtnStyle} >*/}
          {/*    <Text>确定</Text>*/}
          {/*</Button>*/}
        </Content>
        <View style={styles.btn}>
          {this.getState(this.state.selectedIndex)}
          <Button
            buttonStyle={styles.BtnStyle}
            title={'确定'}
            onPress={() => this.commit()}
          />
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // 侧轴的对齐方式
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'rgba(244,249,249,0.27)',
  },
  state: {
    //position: 'absolute',
    //top: 5,
    height: 50,
  },
  btn: {
    position: 'absolute',
    bottom: 10,
    left: width * 0.05,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: 'white',
    height: 80,
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    textAlign: 'center',
  },
  BtnStyle: {
    width: width * 0.4,
    height: 40,
    backgroundColor: '#0093fe',
    marginTop: 60,
    marginBottom: 10,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  delBtnStyle: {
    width: width * 0.4,
    height: 40,
    backgroundColor: 'red',
    marginTop: 60,
    marginBottom: 10,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
