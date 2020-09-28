//register screen

import React from 'react';
import {Button, Input} from 'react-native-elements';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
let {width, height} = Dimensions.get('window');

export function RegisterScreen_1({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container_1}>
          <View style={styles.emailStyle}>
            <Input placeholder="手机号/邮箱" />
          </View>

          <View style={styles.activationStyle}>
            <Input style={{alignItems: 'flex-start'}} placeholder="验证码" />
            <Button
              buttonStyle={styles.activationBtnStyle}
              title="获取验证码"
            />
          </View>
        </View>
        <Button
          buttonStyle={styles.registerBtnStyle}
          onPress={() => {
            navigation.navigate('Register_2');
          }}
          title="下一步"
        />
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
    backgroundColor: '#5a9683',
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
  },

  registerBtnStyle: {
    width: width * 0.5,
    height: 50,
    backgroundColor: '#009658',
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
