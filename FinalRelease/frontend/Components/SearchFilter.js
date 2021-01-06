import React, {Component} from 'react';
import {
  Left,
  Right,
  Col,
  Icon,
  Grid,
  Picker,
  Radio,
  Form,
  DatePicker,
  Text,
} from 'native-base';
import {SearchBar, Overlay} from 'react-native-elements';
import {View} from 'react-native';
import {Search} from './Search';

export class SearchFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      selected1: undefined,
      selected2: undefined,
      chosenDate: new Date(),
    };
    this.setDate = this.setDate.bind(this);
  }
  onValueChange1(value: string) {
    this.setState({
      selected1: value,
    });
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value,
    });
  }
  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }
  render() {
    return (
      <View>
        {/*<Search />*/}
        <Grid>
          <Col>
            <Form>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="完成度"
                style={{width: undefined}}
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange1.bind(this)}>
                <Picker.Item label="全部" value="key0" />
                <Picker.Item label="未完成" value="key1" />
                <Picker.Item label="已完成" value="key2" />
              </Picker>
            </Form>
          </Col>
          <Col style={{width: 133}}>
            <Form>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}>
                <Picker.Item label="全部" value="key0" />
                <Picker.Item label="语文" value="key1" />
                <Picker.Item label="数学" value="key2" />
                <Picker.Item label="英语" value="key3" />
                <Picker.Item label="物理" value="key4" />
                <Picker.Item label="化学" value="key5" />
                <Picker.Item label="生物" value="key6" />
              </Picker>
            </Form>
          </Col>
          <Col style={{width: 133}}>
            <DatePicker
              defaultDate={new Date()}
              locale={'en'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'default'}
              placeHolderText="选择日期"
              textStyle={{color: '#0093fe'}}
              placeHolderTextStyle={{color: '#d3d3d3'}}
              onDateChange={this.setDate}
              disabled={false}
            />
          </Col>
        </Grid>
      </View>
    );
  }
}
