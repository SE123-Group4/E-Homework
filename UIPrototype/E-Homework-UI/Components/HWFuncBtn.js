import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Button, Text, CardItem, Card} from 'native-base';

export class HWFuncBtn extends React.Component {
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
              console.log('整体点评');
            }}>
            <Icon type="FontAwesome" name="comment" style={styles.buttonIcon} />
            <Text>整体点评</Text>
          </Button>
          <Button
            icon
            bordered
            vertical
            dark
            style={styles.button}
            onPress={() => {
              console.log('批量评价');
            }}>
            <Icon type="FontAwesome" name="server" style={styles.buttonIcon} />
            <Text>批量评价</Text>
          </Button>
          <Button
            icon
            bordered
            vertical
            dark
            style={styles.button}
            onPress={() => {
              console.log('修改作业');
            }}>
            <Icon type="FontAwesome" name="adjust" style={styles.buttonIcon} />
            <Text>修改作业</Text>
          </Button>
          <Button
            icon
            bordered
            vertical
            dark
            style={styles.button}
            onPress={() => {
              console.log('删除作业');
            }}>
            <Icon type="FontAwesome" name="trash" style={styles.buttonIcon} />
            <Text>删除作业</Text>
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
    marginLeft: 0,
  },
  buttonIcon: {
    fontSize: 40,
  },
});
