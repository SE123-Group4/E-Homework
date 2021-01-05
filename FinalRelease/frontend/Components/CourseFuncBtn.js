import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, Button, Text, CardItem, Card} from 'native-base';

export class CourseFuncBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 1,
    };
  }

  render() {
    console.log('btn', this.props);
    return (
      <Card>
        <CardItem style={styles.buttonCard}>
          <Button
            icon
            transparent
            vertical
            style={styles.button}
            onPress={() => {
              console.log('文件管理');
            }}>
            <Icon type="FontAwesome" name="folder" style={styles.buttonIcon} />
            <Text style={styles.text}>文件管理</Text>
          </Button>
          <Button
            icon
            transparent
            vertical
            style={styles.button}
            onPress={() => {
              console.log('文件管理');
            }}>
            <Icon type="FontAwesome" name="users" style={styles.buttonIcon} />
            <Text style={styles.text}>分组管理</Text>
          </Button>
          <Button
            icon
            transparent
            vertical
            style={styles.button}
            onPress={() => {
              console.log('Statistic');
              this.props.navigation.navigate('Statistic');
            }}>
            <Icon type="FontAwesome" name="check" style={styles.buttonIcon} />
            <Text style={styles.text}>作业统计</Text>
          </Button>
          <Button
            icon
            transparent
            vertical
            style={styles.button}
            onPress={() => {
              console.log('add');
              this.props.navigation.navigate('ImportStu');
            }}>
            <Icon
              type="FontAwesome"
              name="user-plus"
              style={styles.buttonIcon}
            />
            <Text style={styles.text}>添加学生</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  buttonCard: {
    flexDirection: 'row',
    marginLeft: -18,
  },
  button: {
    marginLeft: 8,
    color: '#0093fe',
  },
  buttonIcon: {
    fontSize: 40,
    color: '#0093fe',
  },
  text: {color: 'rgba(138,138,138,0.78)', fontSize: 15},
});
