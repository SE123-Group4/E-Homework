import React, {Component} from 'react';
import {Textarea, Card, CardItem, Text, Button} from 'native-base';
import {Dimensions, StyleSheet, View} from 'react-native';
import {RichText} from '../RichText';
import {MyImage} from '../MyImage';
let {width} = Dimensions.get('window');

export default class SubjectiveQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {
        stem: '主观题',
        image: null,
      },
      answers: '',
      ifRichTextShow: false,
      richText: {text: '', fileList: []},
      /*richText: this.state.richText,*/
    };
  }

  renderText = () => {
    console.log('question state: ', this.state.richText);
    if (this.state.richText.text !== '') {
      return this.state.richText.text;
    } else {
      return '点击输入答案';
    }
  };

  render() {
    return (
      <Card style={styles.card}>
        <CardItem header bordered>
          <Text style={{fontSize: 20, color: 'black'}}>
            {this.state.question.stem}
          </Text>
        </CardItem>
        <CardItem>
          <MyImage
            source={this.state.question.image}
            width={width * 0.9}
            height={200}
          />
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
            this.props.setRichText(value);
            this.setState({richTex: value});
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
          <Text style={{fontSize: 14, color: 'grey'}}>{this.renderText()}</Text>
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
