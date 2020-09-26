import React from 'react';
import {SearchBar} from 'react-native-elements';
import {Container, Header, Icon, Item, Button, Text, Input} from 'native-base';

export class Search extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Header searchBar>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    );
  }
}
