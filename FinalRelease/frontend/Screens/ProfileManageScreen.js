import React from 'react';
import {StyleSheet, Dimensions, Alert} from 'react-native';
import {
  Container,
  Content,
  CardItem,
  Card,
  Input,
  Form,
  Button,
  Item,
  Label,
  Text,
  Textarea,
} from 'native-base';
import {loginAjax} from '../Util/Ajax';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {modifyPassword} from '../Service/RegisterService';
let {width} = Dimensions.get('window');

export default class ProfileManageScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: '用户',
        teaNumber: '123456',
        stuNumber: '123456789',
        schoolID: '123',
      },
      account: 'test@test',
      oldPassword: '',
      newPassword: '',
      checkPassword: '',
      role: 'ROLE_TEACHER',
    };
  }

  componentDidMount() {
    let _loadUserInfo = async () => {
      try {
        var principal = JSON.parse(await AsyncStorage.getItem('principal'));
        this.setState({
          userInfo: principal.role,
          account: principal.username,
          role: principal.authorities[0].authority,
        });
      } catch (e) {}
    };
    _loadUserInfo();
  }

  commitModify = () => {
    if (
      this.state.oldPassword === '' ||
      this.state.newPassword === '' ||
      this.state.checkPassword === ''
    ) {
      Alert.alert('请输入密码');
      return;
    }
    if (this.state.newPassword !== this.state.checkPassword) {
      Alert.alert('两次输入不一致！');
      return;
    }
    const checkCallback = (res) => {
      if (res.error === 400) {
        Alert.alert('旧密码错误！');
      } else if (res.access_token !== null) {
        const modifyCallback = (res) => {
          if (res.status === 200) {
            Alert.alert('密码修改成功！');
            this.props.navigation.navigate('TeaCourse', {
              courseID: this.props.route.params.courseID,
            });
          }
        };
        // modifyPassword(
        //   this.state.account,
        //   this.state.newPassword,
        //   modifyCallback,
        // );
      }
    };
    //loginAjax(this.state.account, this.state.oldPassword, callback);
  };

  renderNum = () => {
    if (this.state.role === 'ROLE_TEACHER') {
      return (
        <Text style={styles.labelText}>
          工号：{this.state.userInfo.teaNumber}
        </Text>
      );
    } else if (this.state.role === 'ROLE_STUDENT') {
      return (
        <Text style={styles.labelText}>
          学号：{this.state.userInfo.stuNumber}
        </Text>
      );
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Card>
            <CardItem header>
              <Text style={styles.header}>修改个人信息</Text>
            </CardItem>
          </Card>
          <Card style={styles.card}>
            <CardItem>
              <Label>
                <Text style={styles.labelText}>邮箱：{this.state.account}</Text>
              </Label>
            </CardItem>
          </Card>
          <Card style={styles.card}>
            <CardItem>
              <Label>
                <Text style={styles.labelText}>
                  姓名：{this.state.userInfo.name}
                </Text>
              </Label>
            </CardItem>
          </Card>
          <Card style={styles.card}>
            <CardItem>
              <Label>{this.renderNum()}</Label>
            </CardItem>
          </Card>
          <Card style={styles.card}>
            <CardItem>
              <Label>
                <Text style={styles.labelText}>旧密码：</Text>
              </Label>
              <Input
                secureTextEntry
                style={styles.introduction}
                value={this.state.oldPassword}
                onChangeText={(text) => this.setState({oldPassword: text})}
              />
            </CardItem>
          </Card>
          <Card style={styles.card}>
            <CardItem>
              <Label>
                <Text style={styles.labelText}>新密码：</Text>
              </Label>
              <Input
                secureTextEntry
                style={styles.introduction}
                value={this.state.newPassword}
                onChangeText={(text) => this.setState({newPassword: text})}
              />
            </CardItem>
          </Card>
          <Card style={styles.card}>
            <CardItem>
              <Label>
                <Text style={styles.labelText}>确认密码：</Text>
              </Label>
              <Input
                secureTextEntry
                style={styles.introduction}
                value={this.state.checkPassword}
                onChangeText={(text) => this.setState({checkPassword: text})}
              />
            </CardItem>
          </Card>

          <Button
            rounded
            info
            style={styles.button}
            onPress={this.commitModify}>
            <Text style={styles.buttonText}>确认修改</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  header: {
    fontSize: 23,
    color: '#0093fe',
  },
  card: {
    width: width * 0.96,
    alignSelf: 'center',
  },
  labelText: {
    fontSize: 20,
  },
  input: {
    width: width * 0.6,
  },
  introduction: {
    color: 'gray',
  },
  button: {
    width: width * 0.4,
    marginTop: 10,
    marginBottom: 10,
    left: width * 0.3,
    //position: 'absolute',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
});
