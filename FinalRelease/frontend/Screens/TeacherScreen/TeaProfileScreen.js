import React from 'react';
import {Card, ListItem, Avatar, Text} from 'react-native-elements';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import {Component} from 'react';
import {
  Container,
  Header,
  Content,
  CardItem,
  Right,
  Left,
  Button,
  Badge,
  Thumbnail,
  Body,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {logout} from "../../Service/LoginService";
let {width, height} = Dimensions.get('window');

export class TeaProfileScreen extends React.Component {
  constructor() {
    super();
  }

  logout = () => {
    const callback = (res) => {
      if (res === 200) {
        this.props.navigation.navigate('Login');
        // const resetAction = StackActions.reset({
        //   index: 0,
        //   actions: [
        //     NavigationActions.navigate({routeName: 'Login'}), //Login 要跳转的路由
        //   ],
        // });
        // this.props.navigation.dispatch(resetAction);
      }
    };
    logout(callback);
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Container>
          <Card>
            <CardItem
              button
              onPress={() => this.props.navigation.navigate('ProfileManage')}>
              <Icon name="user-circle" size={80} color="#242123" />

              <Right>
                <Text h4>name</Text>
                <Text />

                <Text h5>teacherID</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={styles.profileIconStyle}>
              <Button
                vertical
                transparent
                onPress={() => {
                  this.props.navigation.navigate('File');
                }}>
                <Icon name="folder-open" size={30} style={{color: '#0093fe'}} />
                <Text style={{color: 'gray', fontSize: 15}}>文件</Text>
              </Button>
              <Button
                vertical
                transparent
                onPress={() => {
                  this.props.navigation.navigate('Star');
                }}>
                <Icon name="star" size={30} style={{color: '#0093fe'}} />
                <Text style={{color: 'gray', fontSize: 15}}>收藏</Text>
              </Button>
              <Button
                vertical
                transparent
                onPress={() => {
                  this.props.navigation.navigate('Draft');
                }}>
                <Icon name="pencil" size={30} style={{color: '#0093fe'}} />
                <Text style={{color: 'gray', fontSize: 15}}>草稿</Text>
              </Button>
              <Button
                vertical
                transparent
                onPress={() => {
                  this.props.navigation.navigate('Question');
                }}>
                <Icon name="paper-plane" size={30} style={{color: '#0093fe'}} />
                <Text style={{color: 'gray', fontSize: 15}}>常见问题</Text>
              </Button>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Text style={{color: '#0073e9', fontSize: 15}} h5>
                  版本更新
                </Text>
              </Left>
              <Icon name="angle-right" size={20} color="#52C0FE" />
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Text style={{color: '#0073e9', fontSize: 15}} h5>
                  联系我们
                </Text>
              </Left>
              <Icon name="angle-right" size={20} color="#52C0FE" />
            </CardItem>
          </Card>
          <View style={styles.logoutStyle}>
            <Button danger style={styles.logoutBtnStyle} full rounded onPress={() => this.logout()}>
              <Text style={{color: '#f5f1f0', fontSize: 15}}>退出登录</Text>
            </Button>
          </View>
        </Container>
      </View>

      /*<Button
             title="Solid Button"
          />*/
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // 侧轴的对齐方式
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(17,17,17,0.08)',
  },
  logoutStyle: {
    width: width * 1,
    height: 400,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutBtnStyle: {
    width: width * 0.8,
    height: 50,
    left: 0,
    top: 20,
    color: 'rgba(17,17,17,0.08)',
  },
  profileIconStyle: {
    width: width * 0.85,
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
