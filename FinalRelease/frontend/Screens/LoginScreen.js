//login screen

import React from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  StyleSheet,
  Dimensions,
  Alert,
  TextInput,
  Text,
} from 'react-native';
import {Item, Input, Form, Label, Container, Content} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
let {width} = Dimensions.get('window');
import {loginAjax} from '../Util/Ajax';
import {getUser} from '../Service/LoginService';

export class LoginScreen extends React.Component {
  constructor(props) {
    //props.navigation.navigate('Start');
    super(props);
    this.state = {
      account: '',
      password: '',
      token: '',
    };
  }

  componentDidMount() {
    this.props.navigation.navigate('Start');
  }

  _onLoginSuccess = (auth, role) => {
    if (auth === 'ROLE_TEACHER') {
      this.props.navigation.navigate('TeaHome', {userInfo: role});
    } else if (auth === 'ROLE_STUDENT') {
      this.props.navigation.navigate('StuHome', {userInfo: role});
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
          var principal = data.principal;
          //var role = data.principal.role;
          console.log(auth, principal);
          // var keys = [
          //   ['auth', auth],
          //   ['userInfo', role.toString()],
          //   ['roleID', role.ID.toString()],
          // ];
          // await AsyncStorage.multiSet(keys);
          await AsyncStorage.setItem('auth', auth);
          //await AsyncStorage.setItem('roleID', principal.role.id.toString());
          await AsyncStorage.setItem('principal', JSON.stringify(principal));
          this._onLoginSuccess(auth, principal.role);
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              right: 10,
            }}>
            <Icon name="mixcloud" size={60} color="#CCCCCC" />
            <Text style={{fontSize: 40, color: '#CCCCCC', left: 20}}>
              云作业
            </Text>
          </View>
          <Item
            rounded
            style={{
              backgroundColor: '#CCCCCC',
              height: 60,
              width: width * 0.9,
              justifyContent: 'center',
              marginTop: 50,
            }}>
            <TextInput
              keyboardType={'email-address'}
              textContentType="emailAddress"
              style={{textAlign: 'center', fontSize: 20}}
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
              justifyContent: 'center',
            }}>
            <TextInput
              secureTextEntry={true}
              textContentType="password"
              style={{textAlign: 'center', fontSize: 20}}
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
            // onPress={() => this._clickLoginBtn()}
            //路由用
            onPress={() => {
              this.props.navigation.navigate('TeaHome');
            }}
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
