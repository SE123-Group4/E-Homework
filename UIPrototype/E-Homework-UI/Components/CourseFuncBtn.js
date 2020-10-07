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
    return (
      <Card>
        <CardItem style={styles.buttonCard}>
          <Button
            icon
            bordered
            vertical
            dark
            style={styles.button}
            onPress={() => {
              console.log('文件管理');
            }}>
            <Icon
              type="FontAwesome"
              name="folder-o"
              style={styles.buttonIcon}
            />
          </Button>
          <Button
            icon
            bordered
            vertical
            dark
            style={styles.button}
            onPress={() => {
              console.log('文件管理');
            }}>
            <Icon type="FontAwesome" name="users" style={styles.buttonIcon} />
          </Button>
          <Button
            icon
            bordered
            vertical
            dark
            style={styles.button}
            onPress={() => {
              console.log('文件管理');
            }}>
            <Icon type="FontAwesome" name="check" style={styles.buttonIcon} />
          </Button>
          <Button
            icon
            bordered
            vertical
            dark
            style={styles.button}
            onPress={() => {
              console.log('文件管理');
            }}>
            <Icon
              type="FontAwesome"
              name="user-plus"
              style={styles.buttonIcon}
            />
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  buttonCard: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 15,
  },
  buttonIcon: {
    fontSize: 40,
  },
});
