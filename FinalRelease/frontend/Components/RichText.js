import React from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Textarea,
  Button,
  Icon,
} from 'native-base';
import {Image, Overlay} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

export class RichText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Overlay isVisible={this.props.ifRichTextShow} fullScreen>
        <Container>
          <Content
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Textarea
              rowSpan={8}
              bordered
              style={{width: '100%', fontSize: 18, color: 'black'}}
              value={this.props.richText.text}
              placeholder="请输入文本内容                                         "
              onChangeText={(value) => {
                let richText = this.props.richText;
                richText.text = value;
                this.props.setRichText(richText);
              }}
            />
            <Content
              contentContainerStyle={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                width: '100%',
                marginTop: 10,
              }}>
              {this.props.richText.fileList.map((item, index) => {
                let baseImg = 'data:' + item.type + ';base64,' + item.data;
                return (
                  <Image
                    style={{resizeMode: 'contain', height: 100, width: 100}}
                    source={{uri: baseImg}}
                    onPress={() => {
                      let richText = this.props.richText;
                      richText.fileList.splice(index, 1);
                      this.props.setRichText(richText);
                    }}
                  />
                );
              })}
            </Content>
            <Card style={{width: '100%', marginTop: 10}}>
              <CardItem bordered>
                <Content
                  contentContainerStyle={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <Button
                    transparent
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      const options = {
                        quality: 1.0,
                        maxWidth: 500,
                        maxHeight: 500,
                        includeBase64: true,
                      };
                      ImagePicker.showImagePicker(options, (response) => {
                        if (response.data) {
                          let richText = this.props.richText;
                          richText.fileList.push(response);
                          this.props.setRichText(richText);
                        }
                      });
                    }}>
                    <Icon
                      name="camera"
                      type="FontAwesome5"
                      style={{color: '#0093fe'}}
                    />
                    <Text style={{fontSize: 13, color: '#0093fe'}}>
                      添加图片
                    </Text>
                  </Button>
                  <Button
                    transparent
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {}}>
                    <Icon
                      name="file"
                      type="FontAwesome"
                      style={{color: '#0093fe'}}
                    />
                    <Text style={{fontSize: 13, color: '#0093fe'}}>
                      添加文件
                    </Text>
                  </Button>
                  <Button
                    transparent
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {}}>
                    <Icon
                      name="microphone"
                      type="FontAwesome"
                      style={{color: '#0093fe'}}
                    />
                    <Text style={{fontSize: 13, color: '#0093fe'}}>
                      语音识别
                    </Text>
                  </Button>
                  <Button
                    transparent
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {}}>
                    <Icon
                      name="font"
                      type="FontAwesome5"
                      style={{color: '#0093fe'}}
                    />
                    <Text style={{fontSize: 13, color: '#0093fe'}}>
                      文字识别
                    </Text>
                  </Button>
                </Content>
              </CardItem>
            </Card>
            <Button
              style={{
                marginTop: 10,
                alignSelf: 'center',
                backgroundColor: '#0093fe',
              }}
              onPress={() => {
                this.props.setShow(false);
                this.props.setRichText({text: '', fileList: []});
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                确 定
              </Text>
            </Button>
          </Content>
        </Container>
      </Overlay>
    );
  }
}
