//login screen

import React, {useState} from 'react';
import {Button, Input, Icon} from 'react-native-elements';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import {Item, Header, Text} from 'native-base';

let {width, height} = Dimensions.get('window');

export function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      {/*<Header>*/}
      {/*  <Text>Login</Text>*/}
      {/*</Header>*/}
      <View style={styles.container}>
        <Input placeholder="手机号/邮箱" />

        <Input placeholder="密码" />

        <Button
          buttonStyle={styles.loginBtnStyle_1}
          onPress={() => {
            navigation.navigate('Home');
          }}
          title="登录"
        />
        <View style={styles.settingStyle}>
          <Button buttonStyle={styles.loginBtnStyle_2} title="忘记密码" />
          <Button
            buttonStyle={styles.loginBtnStyle_2}
            onPress={() => {
              navigation.navigate('Register_1');
            }}
            title="注册"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // 侧轴的对齐方式
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(17,17,17,0.08)',
  },
  textInputStyle: {
    width: width * 0.8,
    height: 40,
    backgroundColor: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  loginBtnStyle_1: {
    width: width * 0.9,
    height: 50,
    backgroundColor: '#009658',
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 10,
  },
  loginBtnStyle_2: {
    width: width * 0.4,
    height: 20,
    backgroundColor: 'rgba(17,17,17,0.08)',
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 10,
  },
  settingStyle: {
    width: width * 0.85,
    height: 40,
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
