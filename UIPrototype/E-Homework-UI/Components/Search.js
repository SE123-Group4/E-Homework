import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Icon, Item, Button, Text, Input} from 'native-base';
import {SearchBar} from 'react-native-elements';

export class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }
  updateSearch = (search) => {
    this.setState({search:search});
  };
  render() {
    const { search } = this.state;
    return (
        <SearchBar
            placeholder="搜索"
            onChangeText={this.updateSearch}
            value={search}
            lightTheme
            containerStyle={{backgroundColor:'white'}}
            round
        />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    color: '#0093fe',
  },
});
