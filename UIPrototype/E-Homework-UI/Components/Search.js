import React from 'react';
import {SearchBar} from 'react-native-elements';
import {Container, Header, Icon, Item, Button, Text, Input} from 'native-base';

export class Search extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (

        <Item>
          <Icon type="FontAwesome" name="search" />
          <Input placeholder="Search" />
        </Item>

    );
  }
}
