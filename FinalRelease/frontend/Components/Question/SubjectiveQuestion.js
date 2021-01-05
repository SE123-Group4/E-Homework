import React, {Component} from 'react';
import {Textarea, Card, CardItem, Text, Button} from 'native-base';
import {Dimensions, StyleSheet, View} from 'react-native';
import {RichText} from '../RichText';
let {width} = Dimensions.get('window');

export default class SubjectiveQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '主观题1',
      answers: '',
      ifRichTextShow: false,
      richText: {text: '', fileList: []},
      /*richText: this.state.richText,*/
    };
  }
  render() {
    return (
      <Card style={styles.card}>
        <CardItem header bordered>
          <Text style={{fontSize: 20, color: 'black'}}>
            {this.state.question}
          </Text>
        </CardItem>
        {/*<Textarea rowSpan={5} bordered placeholder="Textarea" />*/}
        <RichText
          ifRichTextShow={this.state.ifRichTextShow}
          richText={this.state.richText}
          setShow={(value) => {
            this.setState({ifRichTextShow: value});
          }}
          setRichText={(value) => {
            console.log('setrichtext', value, 'state', this.state.richText);
            this.setState({richText: value});
            console.log('after', this.state.richText);
          }}
        />
        <Button
          /*bordered*/
          dark
          transparent={true}
          full
          large
          onPress={() => {
            /*analysis: {text: '', fileList: []},*/
            console.log('press', this.state.richText);
            this.setState({
              ifRichTextShow: true,
              richText: this.state.richText,
            });
          }}>
          <Text style={{fontSize: 14, color: 'grey'}}>点击输入答案…</Text>
        </Button>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
  },
});
