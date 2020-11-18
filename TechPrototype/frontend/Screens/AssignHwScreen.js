//teacher assigns homework screen
import React from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Right,
  Textarea,
  Form,
  Button,
  Icon,
  Switch,
  DatePicker,
} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import {ScrollView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputcard: {},
  multiinput: {},
  buttoncontainer: {},
  iconbutton: {},
  iconname: {},
});

const additems = [
  {name: '添加图片', icon: 'camera'},
  {name: '添加文件', icon: 'file'},
  {name: '添加链接', icon: 'link'},
  {name: '答题卡', icon: 'book'},
  {name: '文字识别', icon: 'font'},
  {name: '语音识别', icon: 'microphone'},
];
const classes = [{name: '全部勾选'}, {name: '三年二班'}, {name: '三年四班'}];
export class AssignHwScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chosenDate: new Date(),
      ifshow: false,
    };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }
  setShow(flag) {
    this.setState({ifshow: flag});
  }
  render() {
    return (
      <ScrollView>
        <Container style={{height: 'auto'}}>
          <Content
            style={{height: 'auto'}}
            contentContainerStyle={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Card style={{width: '95%', height: 320}}>
              <CardItem header style={{backgroundColor: '#0093fe'}}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                  布置作业
                </Text>
              </CardItem>
              <CardItem>
                <Form style={{width: '100%'}}>
                  <Textarea
                    rowSpan={5}
                    bordered={true}
                    placeholder="请填写作业内容"
                  />
                </Form>
              </CardItem>
              <CardItem>
                <Container style={{height: 80}}>
                  <Content
                    contentContainerStyle={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}>
                    {additems.map((u, i) => {
                      return (
                        <Container key={i}>
                          <Content
                            contentContainerStyle={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Button transparent light icon={true} key={i}>
                              <Icon name={u.icon} type="FontAwesome" />
                            </Button>
                            <Text style={{fontSize: 12, color: 'grey'}}>
                              {u.name}
                            </Text>
                          </Content>
                        </Container>
                      );
                    })}
                  </Content>
                </Container>
              </CardItem>
            </Card>
            <Card style={{width: '95%', marginTop: 10, height: 250}}>
              <CardItem header style={{backgroundColor: '#0093fe'}}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                  添加答案
                </Text>
              </CardItem>
              <CardItem>
                <Form style={{width: '100%'}}>
                  <Textarea
                    rowSpan={6}
                    bordered={true}
                    placeholder="请填写答案内容（可为空）"
                  />
                </Form>
              </CardItem>
            </Card>
            <Card style={{width: '95%', marginTop: 10, height: 400}}>
              <CardItem>
                <Left>
                  <Text>提交截止日期</Text>
                </Left>
                <Right>
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
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>提交截止时间</Text>
                </Left>
                <Right>
                  <Button
                    transparent={true}
                    onPress={() => this.setState({ifshow: !this.state.ifshow})}>
                    <Text style={{color: '#d3d3d3', fontSize: 14}}>
                      选择时间
                    </Text>
                  </Button>
                  {this.state.ifshow && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={new Date()}
                      mode={'time'}
                      is24Hour={true}
                      display="clock"
                      onChange={() => this.setState({ifshow: false})}
                      onResponderReject={() => {
                        this.setState({ifshow: false});
                      }}
                    />
                  )}
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>是否定时发布</Text>
                </Left>
                <Right>
                  <Switch
                    trackColor={{false: '#767577', true: '#0093fe'}}
                    thumbColor={'#f4f3f4'}
                    value={false}
                  />
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>是否允许补交</Text>
                </Left>
                <Right>
                  <Switch
                    trackColor={{false: '#767577', true: '#0093fe'}}
                    thumbColor={'#f4f3f4'}
                    value={true}
                  />
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>设为分组作业</Text>
                </Left>
                <Right>
                  <Switch
                    trackColor={{false: '#767577', true: '#0093fe'}}
                    thumbColor={'#f4f3f4'}
                    value={false}
                  />
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>选择发布班级</Text>
                </Left>
              </CardItem>
              <CardItem>
                <Container style={{height: 50}}>
                  <Content
                    contentContainerStyle={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    {classes.map((u, i) => {
                      return (
                        <Container key={i}>
                          <Content>
                            <Button rounded={true} light>
                              <Text
                                style={{
                                  fontSize: 10,
                                  fontWeight: 'bold',
                                  color: 'white',
                                }}>
                                {u.name}
                              </Text>
                            </Button>
                          </Content>
                        </Container>
                      );
                    })}
                  </Content>
                </Container>
              </CardItem>
            </Card>
            <Button
              rounded={true}
              style={{
                marginBottom: 20,
                marginTop: 15,
                width: '100%',
                backgroundColor: '#0093fe',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                  marginLeft: '40%',
                }}>
                发 布 作 业
              </Text>
            </Button>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}
