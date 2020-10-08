//login screen

import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {View, TextInput, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {Item, Input, Header, Text} from 'native-base';
import {getBackgroundColor} from 'react-native/Libraries/LogBox/UI/LogBoxStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

let {width, height} = Dimensions.get('window');

export function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      {/*<Header>*/}
      {/*  <Text>Login</Text>*/}
      {/*</Header>*/}
      <View style={styles.container}>
        <Item
          rounded
          style={{
            backgroundColor: '#CCCCCC',
            height: 60,
            width: width * 0.9,
          }}>
          <Input style={{textAlign: 'center'}} placeholder="手机号/邮箱" />
        </Item>
        <Item
          rounded
          style={{
            backgroundColor: '#CCCCCC',
            height: 60,
            width: width * 0.9,
            marginTop: 30,
          }}>
          <Input style={{textAlign: 'center'}} placeholder="密码" />
        </Item>
        <Button
          buttonStyle={styles.loginBtnStyle_1}
          onPress={() => {
            navigation.navigate('Home');
          }}
          icon={<Icon name="share" size={30} color="white" />}
        />
        <View style={styles.settingStyle}>
          <Button buttonStyle={styles.loginBtnStyle_2} title="忘记密码" />
          <Button
            buttonStyle={styles.loginBtnStyle_2}
            onPress={() => {
              navigation.navigate('Register_1');
            }}
            title="用户注册"
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
    backgroundColor: 'rgba(244,249,249,0.27)',
  },
  textInputStyle: {
    width: width * 0.8,
    height: 40,
    backgroundColor: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  loginBtnStyle_1: {
    width: width * 0.2,
    height: 80,
    backgroundColor: '#0093fe',
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 100,
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
    height: 10,
    marginTop: 80,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titleStyle: {
    fontSize: 40,
    alignItems: 'center',
    paddingBottom: 10,
  },
});
