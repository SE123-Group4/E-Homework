import React from 'react';
import {Card, ListItem, Button, Avatar, Text} from 'react-native-elements';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
let {width, height} = Dimensions.get('window');
import {Component} from 'react';
import {
  Container,
  Header,
  Content,
  CardItem,
  Right,
  Left,
  Badge,
  Thumbnail,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export function TeaProfileScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Container>
        <Card>
          <CardItem>
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
            <Icon name="folder-open" size={30} color="#52C0FE" />
            <Icon name="star" size={30} color="#52C0FE" />
            <Icon name="pencil" size={30} color="#52C0FE" />
            <Icon name="paper-plane" size={30} color="#52C0FE" />
          </CardItem>
        </Card>

        <View style={styles.logoutStyle}>
          <Button buttonStyle={styles.logoutBtnStyle} title="退出账号" />
        </View>
      </Container>
    </View>

    /*<Button
         title="Solid Button"
      />*/
  );
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
    height: 60,
    backgroundColor: 'rgba(3,94,150,0.08)',
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 20,
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
