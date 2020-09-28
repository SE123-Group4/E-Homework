import React from 'react';
import {Button, Input} from 'react-native-elements';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
let {width, height} = Dimensions.get('window');

export function RegisterScreen_2({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.infoStyle}>
          <Input placeholder="姓名" />
        </View>
        <View style={styles.infoStyle}>
          <Input placeholder="学校" />
        </View>
        <View style={styles.infoStyle}>
          <Input placeholder="学号" />
        </View>
        <View style={styles.infoStyle}>
          <Input placeholder="密码" />
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
    backgroundColor: 'rgba(17,17,17,0.08)',
  },
  textInputStyle: {
    width: width * 0.8,
    height: 40,
    backgroundColor: 'white',
    textAlign: 'left',
    marginBottom: 5,
  },
  activationBtnStyle: {
    width: width * 0.15,
    height: 30,
    backgroundColor: '#009658',
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
