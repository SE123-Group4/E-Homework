//login screen

import React from 'react';
import {Button} from 'react-native-elements';
import {View, StyleSheet, Dimensions, Alert} from 'react-native';
import {Item, Input, Form, Label, Container, Content} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
let {width} = Dimensions.get('window');
import {loginAjax} from '../Util/Ajax';
import {getUser} from '../Service/LoginService';

export class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
      token: '',
    };
  }
  _onLoginSuccess = (auth) => {
    if (auth === 'ROLE_TEACHER') {
      this.props.navigation.navigate('TeaHome');
    } else if (auth === 'ROLE_STUDENT') {
      this.props.navigation.navigate('StuHome');
    }
  };
  _clickLoginBtn = () => {
    //baidu();
    // 判断密码是否为空
    if (this.state.account === '' || this.state.password === '') {
      Alert.alert('账号或密码不能为空');
      return;
    }
    const UserCallback = (data) => {
      console.log('user callback');
      let _storeUser = async () => {
        try {
          var auth = data.authorities[0].authority;
          console.log(auth);
          await AsyncStorage.setItem('user', auth);
          this._onLoginSuccess(auth);
        } catch (e) {}
      };
      _storeUser();
    };

    const TokenCallback = (data) => {
      console.log(data.access_token);
      if (data.error === '400') {
        Alert.alert('登录失败');
      } else if (data.access_token != null) {
        let _storeToken = async () => {
          try {
            await AsyncStorage.setItem('token', data.access_token);
            getUser(UserCallback);
          } catch (e) {}
        };
        _storeToken();
      }
    };
    console.log(this.state.account, this.state.password);
    loginAjax(this.state.account, this.state.password, TokenCallback);
    console.log('login ajax');
  };

  render() {
    return (
      <Container style={{flex: 1}}>
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
            <Input
              textContentType="emailAddress"
              style={{textAlign: 'center'}}
              onChangeText={(text) => {
                this.setState({
                  account: text,
                });
              }}
              placeholder="邮箱"
            />
          </Item>
          <Item
            rounded
            style={{
              backgroundColor: '#CCCCCC',
              height: 60,
              width: width * 0.9,
              marginTop: 30,
            }}>
            <Input
              textContentType="password"
              style={{textAlign: 'center'}}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
              placeholder="密码"
            />
          </Item>
          {/*<Form>*/}
          {/*  <Item floatingLabel>*/}
          {/*    <Label>Username</Label>*/}
          {/*    <Input />*/}
          {/*  </Item>*/}
          {/*  <Item floatingLabel last>*/}
          {/*    <Label>Password</Label>*/}
          {/*    <Input />*/}
          {/*  </Item>*/}
          {/*</Form>*/}
          <Button
            buttonStyle={styles.loginBtnStyle_1}
            onPress={() => this._clickLoginBtn()}
            icon={<Icon name="share" size={30} color="white" />}
          />
          <View style={styles.settingStyle}>
            <Button buttonStyle={styles.loginBtnStyle_2} title="忘记密码" />
            <Button
              buttonStyle={styles.loginBtnStyle_2}
              onPress={() => {
                this.props.navigation.navigate('Register_1');
              }}
              title="用户注册"
            />
          </View>
        </View>
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
