import React from 'react';
import {Button} from 'react-native-elements';
import {Dimensions, StyleSheet, View, Text, Alert} from 'react-native';
import {Item, Input} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
let {width, height} = Dimensions.get('window');
import {apiUrl} from '../urlconfig';
const userInfo_URL = apiUrl + '/userInfo';

export class RegisterScreen_2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: this.state.account,
      name: null,
      school: null,
      userNumber: null,
      password: null,
    };
  }
  _clickNextBtn = () => {
    if (this.state.password === '') {
      Alert.alert('密码不能为空');
      return;
    }
    fetch(userInfo_URL, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        account: this.state.account,
        name: this.state.name,
        school: this.state.school,
        userNumber: this.state.userNumber,
        password: this.state.password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        this.navigation.navigate('RegisterChoose');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.infoStyle}>
            <Item>
              <Icon name="user-circle" size={20} color="#242123" />
              <Input
                style={{textAlign: 'center'}}
                onChangeText={(text) => {
                  this.setState({
                    name: text,
                  });
                }}
                value={this.state.name}
                placeholder="姓名"
              />
            </Item>
          </View>
          <View style={styles.infoStyle}>
            <Item>
              <Icon name="home" size={20} color="#242123" />
              <Input
                style={{textAlign: 'center'}}
                onChangeText={(text) => {
                  this.setState({
                    school: text,
                  });
                }}
                value={this.state.school}
                placeholder="学校"
              />
            </Item>
          </View>
          <View style={styles.infoStyle}>
            <Item>
              <Icon name="address-book-o" size={20} color="#242123" />
              <Input
                style={{textAlign: 'center'}}
                onChangeText={(text) => {
                  this.setState({
                    userNumber: text,
                  });
                }}
                value={this.state.userNumber}
                placeholder="学号/工号"
              />
            </Item>
          </View>
          <View style={styles.infoStyle}>
            <Item>
              <Icon name="key" size={20} color="#242123" />
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
          </View>

          <Button
            buttonStyle={styles.registerBtnStyle}
            /*onPress={() => {
              this.navigation.navigate('RegisterChoose');
            }}*/
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
  textInputStyle: {
    width: width * 0.8,
    height: 40,
    backgroundColor: 'white',
    textAlign: 'left',
    marginBottom: 5,
  },

  registerBtnStyle: {
    width: width * 0.5,
    height: 50,
    backgroundColor: '#0093fe',
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 10,
  },

  infoStyle: {
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
