import React from 'react';
import {Button} from 'react-native-elements';
import {Alert, Dimensions, StyleSheet, View} from 'react-native';
import {Item, Input, Text} from 'native-base';
let {width, height} = Dimensions.get('window');

export class RegisterChoose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: this.props.route.params.account,
      role: null,
    };
  }
  componentDidMount() {
    console.log(this.props);
  }

  _clickTeacherBtn = () => {
    //this.setState({role: 'ROLE_TEACHER'});
    this.props.navigation.navigate('Register_2', {
      account: this.props.route.params.account,
      role: 1,
    });
  };

  _clickStudentBtn = () => {
    this.props.navigation.navigate('Register_2', {
      account: this.props.route.params.account,
      role: 0,
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text
            style={{fontSize: 30, height: 150, marginTop: 20, color: 'black'}}>
            身份选择
          </Text>
          <View style={styles.ChooseStyle}>
            <Button
              buttonStyle={styles.chooseBtnStyle}
              onPress={() => {
                /*this.navigation.navigate('TeaHome');*/
                this._clickTeacherBtn();
              }}
              title={'我是老师'}
            />
            <Button
              buttonStyle={styles.chooseBtnStyle}
              onPress={() => {
                /*this.navigation.navigate('StuHome');*/
                this._clickStudentBtn();
              }}
              title={'我是学生'}
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
    textAlign: 'left',
    marginBottom: 5,
  },
  ChooseStyle: {
    width: width * 0.6,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chooseBtnStyle: {
    width: width * 0.25,
    height: width * 0.25,
    backgroundColor: '#0093fe',
    marginTop: 0,
    marginBottom: 20,
    borderRadius: 100,
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
