import React from 'react';
import {Button} from 'react-native-elements';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import {Item, Input} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
let {width, height} = Dimensions.get('window');

export function RegisterScreen_2({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.infoStyle}>
          <Item>
            <Icon name="user-circle" size={20} color="#242123" />
            <Input style={{textAlign: 'center'}} placeholder="姓名" />
          </Item>
        </View>
        <View style={styles.infoStyle}>
          <Item>
            <Icon name="home" size={20} color="#242123" />
            <Input style={{textAlign: 'center'}} placeholder="学校" />
          </Item>
        </View>
        <View style={styles.infoStyle}>
          <Item>
            <Icon name="address-book-o" size={20} color="#242123" />
            <Input style={{textAlign: 'center'}} placeholder="学号" />
          </Item>
        </View>
        <View style={styles.infoStyle}>
          <Item>
            <Icon name="key" size={20} color="#242123" />
            <Input style={{textAlign: 'center'}} placeholder="密码" />
          </Item>
        </View>

        <Button
          buttonStyle={styles.registerBtnStyle}
          onPress={() => {
            navigation.navigate('Home');
          }}
          title="完成"
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
