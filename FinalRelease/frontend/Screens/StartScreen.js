import React from 'react';
import {Button, Input} from 'react-native-elements';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';
let {width, height} = Dimensions.get('window');

export class StartScreen extends React.Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.navigation.navigate('Login'); //2秒后进入登录页面
    }, 2000);
  }
  //卸载计时器
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer); //同时为真时执行卸载
  }
  render() {
    return (
      <ImageBackground style={{flex: 1}} source={require('../start.gif')} />
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
});
