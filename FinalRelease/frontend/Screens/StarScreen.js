import React from 'react';
import {Button, Input} from 'react-native-elements';
import {Dimensions, StyleSheet, View, Text, Image} from 'react-native';
import {Card, CardItem} from 'native-base';
let {width, height} = Dimensions.get('window');

export class StarScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Button buttonStyle={styles.BtnStyle} title="收藏" />
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

  BtnStyle: {
    width: width * 0.5,
    height: 50,
    backgroundColor: '#0093fe',
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 10,
  },
});
