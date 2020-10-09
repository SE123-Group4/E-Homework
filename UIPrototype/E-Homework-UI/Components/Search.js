import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Icon, Item, Button, Text, Input} from 'native-base';

export class Search extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Item rounded>
        <Icon type="FontAwesome" name="search" style={styles.icon} />
        <Input placeholder="搜索" />
      </Item>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    color: '#0093fe',
  },
});
