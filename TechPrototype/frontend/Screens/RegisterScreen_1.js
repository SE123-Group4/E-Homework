//register screen

import React from 'react';
import {Button, Input} from 'react-native-elements';
import {Dimensions, StyleSheet, View, Text, Alert} from 'react-native';
import {getMailCode} from '../Service/RegisterService';
let {width, height} = Dimensions.get('window');

export class RegisterScreen_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      check_account: '',
      front_code: null,
      back_code: null,
    };
  }

  _clickGetCodeBtn = () => {
    if (this.state.account === '') {
      Alert.alert('账号或验证码不能为空');
      return;
    }
    const getCodeCallback = (data) => {
      this.setState({
        back_code: data.toString(),
        check_account: this.state.account,
      });
      Alert.alert('获取验证码成功');
    };
    getMailCode(this.state.account, getCodeCallback);
  };

  _clickNextBtn = () => {
    console.log(
      this.state.front_code,
      this.state.back_code,
      this.state.account,
      this.state.check_account,
    );
    if (
      this.state.front_code === this.state.back_code &&
      this.state.account === this.state.check_account
    ) {
      this.props.navigation.navigate('RegisterChoose', {
        account: this.state.account,
      });
    } else {
      Alert.alert('验证码错误');
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.container_1}>
            <View style={styles.emailStyle}>
              <Input
                onChangeText={(text) => {
                  this.setState({
                    account: text,
                  });
                }}
                value={this.state.account}
                placeholder="手机号/邮箱"
              />
            </View>

            <View style={styles.activationStyle}>
              <Input
                style={{alignItems: 'flex-start'}}
                onChangeText={(text) => {
                  this.setState({
                    front_code: text,
                  });
                }}
                value={this.state.front_code}
                placeholder="验证码"
              />
              <Button
                buttonStyle={styles.activationBtnStyle}
                onPress={() => this._clickGetCodeBtn()}
                title="获取验证码"
              />
            </View>
          </View>
          <Button
            buttonStyle={styles.registerBtnStyle}
            /*onPress={() => {
              this.navigation.navigate('Register_2')*/
            onPress={() => this._clickNextBtn()}
            title="下一步"
          />
        </View>
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
    backgroundColor: 'rgba(244,249,249,0.27)',
  },
  container_1: {
    flex: 0.5,
    // 侧轴的对齐方式
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textInputStyle: {
    width: width * 0.8,
    height: 40,
    backgroundColor: 'white',
    textAlign: 'left',
    marginBottom: 5,
  },
  activationBtnStyle: {
    width: width * 0.3,
    height: 30,
    backgroundColor: 'rgba(76,114,150,0.46)',
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
  },

  registerBtnStyle: {
    width: width * 0.5,
    height: 50,
    backgroundColor: '#0093fe',
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 10,
  },

  activationStyle: {
    width: width * 0.5,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  emailStyle: {
    width: width * 0.8,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 40,
    alignItems: 'center',
    paddingBottom: 10,
  },
});
