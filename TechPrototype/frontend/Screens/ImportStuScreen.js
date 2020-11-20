//invites user screen

import React from 'react';
import {Button, ButtonGroup} from 'react-native-elements';
import {Dimensions, StyleSheet, View, Text, ViewComponent} from 'react-native';
import {Card, CardItem, Icon, Left, Right, Item, Input} from 'native-base';
let {width, height} = Dimensions.get('window');

export class ImportStuScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
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
  render() {
    const buttons = ['添加学生', '删除学生'];
    const {selectedIndex} = this.state;

    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={styles.state}
          />

          <Item rounded style={styles.input}>
            <Input style={styles.text} placeholder="学号" />
          </Item>
          <Item rounded style={styles.input}>
            <Input style={styles.text} placeholder="学号" />
          </Item>
          <Item rounded style={styles.input}>
            <Input style={styles.text} placeholder="学号" />
          </Item>
          {/*<Button style={styles.BtnStyle} >*/}
          {/*    <Text>确定</Text>*/}
          {/*</Button>*/}
          <View style={styles.btn}>
            {this.getState(this.state.selectedIndex)}
            <Button buttonStyle={styles.BtnStyle} title={'确定'} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // 侧轴的对齐方式
    //justifyContent: 'center',
    alignItems: 'center',
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
    height: 50,
    backgroundColor: '#0093fe',
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  delBtnStyle: {
    width: width * 0.4,
    height: 50,
    backgroundColor: 'red',
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
