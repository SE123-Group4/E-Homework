import React from 'react';
import {Button} from 'react-native-elements';
import {Dimensions, StyleSheet, View, Text, Alert} from 'react-native';
import {Item, Input, Form, Container, Picker, Content} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
let {width, height} = Dimensions.get('window');
import {getSchoolList, register} from '../Service/RegisterService';

export class RegisterScreen_2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: this.props.route.params.account,
      name: null,
      school: '',
      school_list: [
        {id: 1, name: '北京大学'},
        {id: 2, name: '清华大学'},
        {id: 3, name: '上海交通大学'},
        {id: 4, name: '复旦大学'},
      ],
      user_number: null,
      password: null,
    };
  }
  componentDidMount() {
    console.log(this.props);
    const callback = (data) => {
      this.setState({school_list: data});
    };
    getSchoolList(callback);
  }

  _clickNextBtn = () => {
    if (this.state.password === '') {
      Alert.alert('密码不能为空');
      return;
    }
    const callback = (data) => {
      if (data.status === 200) {
        Alert.alert(data.msg);
        this.props.navigation.navigate('Login');
      } else {
        Alert.alert(data.msg);
      }
    };
    console.log(
      this.props.route.params.account,
      this.state.name,
      this.state.school,
      this.state.user_number,
      this.state.password,
      this.props.route.params.role,
    );

    register(
      this.props.route.params.account,
      this.state.name,
      this.state.school,
      this.state.user_number,
      this.state.password,
      this.props.route.params.role,
      callback,
    );
  };

  onValueChange2(value) {
    this.setState({
      school: value,
    });
  }

  render() {
    return (
      <Container style={{flex: 1}}>
        <View style={styles.container}>
          <Form>
            <Item style={styles.infoStyle}>
              <Icon name="user-circle" size={20} color="#242123" />
              <Input
                //style={{textAlign: 'center'}}
                onChangeText={(text) => {
                  this.setState({
                    name: text,
                  });
                }}
                value={this.state.name}
                placeholder="姓名"
              />
            </Item>
            <Item style={styles.infoStyle}>
              <Icon name="home" size={20} color="#242123" />
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{
                  width: undefined,
                  textAlign: 'center',
                  alignContent: 'center',
                }}
                prompt="选择学校"
                placeholder="选择学校"
                placeholderStyle={{color: '#bfc6ea', textAlign: 'center'}}
                placeholderIconColor="#007aff"
                //textStyle={{textAlign: 'center'}}
                selectedValue={this.state.school}
                onValueChange={this.onValueChange2.bind(this)}>
                <Picker.Item label="选择学校" value="key0" />
                {this.state.school_list.map((item, index) => {
                  return <Picker.Item label={item.name} value={item.id} />;
                })}
              </Picker>
            </Item>
            <Item style={styles.infoStyle}>
              <Icon name="address-book-o" size={20} color="#242123" />
              <Input
                //style={{textAlign: 'center'}}
                onChangeText={(text) => {
                  this.setState({
                    user_number: text,
                  });
                }}
                value={this.state.user_number}
                placeholder={
                  this.props.route.params.role === 0 ? '学号' : '工号'
                }
              />
            </Item>
            <Item style={styles.infoStyle}>
              <Icon name="key" size={20} color="#242123" />
              <Input
                //style={{textAlign: 'center'}}
                onChangeText={(text) => {
                  this.setState({
                    password: text,
                  });
                }}
                value={this.state.password}
                placeholder="密码"
              />
            </Item>
          </Form>
          <Button
            buttonStyle={styles.registerBtnStyle}
            onPress={() => this._clickNextBtn()}
            title="下一步"
          />
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
