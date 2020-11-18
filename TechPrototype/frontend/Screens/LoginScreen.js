//login screen

import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {
  AsyncStorage,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  StatusBar,
  Alert,
} from 'react-native';
import {Item, Input, Header, Text} from 'native-base';
import {getBackgroundColor} from 'react-native/Libraries/LogBox/UI/LogBoxStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
let {width, height} = Dimensions.get('window');
import {apiUrl} from '../urlconfig';
import {loginAjax} from '../Util/Ajax';
import {getUser} from '../Service/LoginService';
const login_URL = apiUrl + '/login';
var isSuccess;

export class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
      token: '',
      identity: -1,
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
    // 判断密码是否为空
    if (this.state.account === '' || this.state.password === '') {
      Alert.alert('账号或密码不能为空');
      return;
    }
    const TokenCallback = (data) => {
      if (data.error === '400') {
        Alert.alert('登录失败');
      } else if (data.access_token != null) {
        let _storeToken = async () => {
          try {
            await AsyncStorage.setItem('token', data.access_token);
          } catch (e) {}
        };
        _storeToken();
      }
    };
    loginAjax(this.state.account, this.state.password, TokenCallback);

    const UserCallback = (data) => {
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
    getUser(UserCallback);
    //测试界面路由用
    /*else {
      this._onLoginSuccess();
    }*/

    // fetch(login_URL, {
    //   method: 'POST',
    //   credentials: 'include',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     account: this.state.account,
    //     password: this.state.password,
    //   }),
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((responseData) => {
    //     console.log(responseData);
    //     isSuccess = responseData.status == 0 ? true : false;
    //     isSuccess = true;
    //     if (isSuccess) {
    //       this.setState({identity: responseData.identity});
    //       this._onLoginSuccess(this.state.identity);
    //     } else {
    //       Alert.alert('账号或秘密错误！');
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  render() {
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
            <Input
              style={{textAlign: 'center'}}
              onChangeText={(text) => {
                this.setState({
                  account: text,
                });
              }}
              value={this.state.account}
              placeholder="手机号/邮箱"
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
              style={{textAlign: 'center'}}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
              value={this.state.password}
              placeholder="密码"
            />
          </Item>
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
