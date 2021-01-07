//teacher assigns homework screen
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Right,
  Header,
  Title,
  Form,
  Item,
  ListItem,
  CheckBox,
  Body,
  Input,
  Button,
  Icon,
  Switch,
  DatePicker,
  Picker,
  Spinner,
} from 'native-base';
import {Overlay} from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {RichText} from '../../Components/RichText';
import {
  getAssignHomework,
  postAssignHomework,
} from '../../Service/HomeworkService';
import {dateFormat} from '../../Util/DateUtil';
import {postRequest} from '../../Util/Ajax';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class AssignHwScreen extends React.Component {
  // static propTypes = {
  //   hwId: PropTypes.number,
  // };
  // static defaultProps = {
  //   hwId: 0,
  // };
  constructor(props) {
    super(props);
    this.state = {
      ID: props.route.params.hwId, //homeworkID
      state: undefined, //homeworkState(ASSIGNED/DRAFT/ABORTED)
      title: '', //标题
      courseId: undefined, //选中的课程
      submitIdList: [], //选中的学生or小组ID
      totals: undefined, //总分
      isDelayed: false, //是否允许补交
      isRepeated: false, //是否允许重复提交
      isTimed: false, //是否定时发布
      isGrouped: false, //是否小组作业
      resultAfter: 'SUBMIT', //提交orDDL后答案可见
      deadlineDate: new Date(), //DDL日期
      deadlineTime: new Date(), //DDL时间
      assignDate: new Date(), //发布日期
      assignTime: new Date(), //发布时间
      questionList: [], //题目
      courseInfo: [],
      ifCheckBoxShow: false,
      ifDeadlineTimePickerShow: false,
      ifAssignTimePickerShow: false,
      isDetailed: false, //是否编辑详情
      ifSpinnerShow: true,
      ifRichTextShow: false,
      richText: {content: '', image: ''},
    };
  }
  componentDidMount() {
    let callback = (res) => {
      if (res.status === 200) {
        if (this.props.route.params.hwId === 0) {
          this.setState({
            courseInfo: res.data.courseInfoList,
            courseId: res.data.courseInfoList[0].ID,
            ifSpinnerShow: false,
          });
        } else {
          this.setState({
            courseInfo: res.data.courseInfoList,
            state: res.data.hwInfo.state,
            title: res.data.hwInfo.title,
            courseId: res.data.hwInfo.courseId,
            submitIdList: res.data.hwInfo.submitIdList,
            totals: res.data.hwInfo.totals,
            isDelayed: res.data.hwInfo.delayed,
            isRepeated: res.data.hwInfo.repeated,
            isTimed: res.data.hwInfo.timed,
            isGrouped: res.data.hwInfo.grouped,
            resultAfter: res.data.hwInfo.resultAfter,
            questionList: res.data.hwInfo.questionList.map((item) => {
              let question = JSON.parse(JSON.stringify(item));
              switch (question.type) {
                case 'MULTIPLE_CHOICE':
                  question.question = {
                    stem: {content: question.stem, image: question.image},
                    options: question.options,
                  };
                  if (question.refAnswer.content === '') {
                    question.refAnswer = [];
                  } else {
                    question.refAnswer = question.refAnswer.content.split(',');
                  }
                  break;
                case 'SUBJECTIVE':
                  question.question = {
                    stem: {content: question.stem, image: question.image},
                  };
                  break;
                case 'ONE_CHOICE':
                  question.question = {
                    stem: {content: question.stem, image: question.image},
                    options: question.options,
                  };
                  question.refAnswer = question.refAnswer.content;
                  break;
                case 'TRUE_OR_FALSE':
                  question.question = {
                    stem: {content: question.stem, image: question.image},
                    T: {content: '', image: ''},
                    F: {content: '', image: ''},
                  };
                  if (question.refAnswer.content === 'true') {
                    question.refAnswer = true;
                  } else {
                    question.refAnswer = false;
                  }
                  break;
              }
              return question;
            }),
            ifSpinnerShow: false,
          });
        }
      }
    };
    var teaID;
    let _loadID = async () => {
      try {
        teaID = JSON.parse(await AsyncStorage.getItem('principal')).roleID;
        let data = 'ID=' + this.props.route.params.hwId + '&TeaID=' + teaID;
        getAssignHomework(data, callback);
      } catch (e) {}
    };
    _loadID();

    // postRequest(
    //   'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=f40AXeAkq6xFKFapddRZ0bL9&client_secret=Xlp8SqNbnAcjRproEaIo6Dco5euhYyFV',
    //   {},
    //   (res) => {
    //     console.log(res.access_token);
    //   },
    // );
  }
  post = (action) => {
    if (!this.state.title) {
      Alert.alert('标题不能为空');
      return;
    }
    if (!this.state.courseId && this.state.courseId !== 0) {
      Alert.alert('选择课程不能为空');
      return;
    }
    if (!this.state.submitIdList) {
      Alert.alert('学生不能为空');
      return;
    }
    if (!this.state.totals && this.state.totals !== 0) {
      Alert.alert('总分值不能为空');
      return;
    }
    let ddl = new Date(
      this.state.deadlineDate.toLocaleDateString() +
        ' ' +
        this.state.deadlineTime.toLocaleTimeString(),
    );
    let assign = new Date(
      this.state.assignDate.toLocaleDateString() +
        ' ' +
        this.state.assignTime.toLocaleTimeString(),
    );
    let now = new Date();
    if (ddl <= now) {
      Alert.alert('截止时间不能早于当前时间');
      return;
    }
    if (this.state.isTimed && assign <= now) {
      Alert.alert('发布时间不能早于当前时间');
      return;
    }
    if (this.state.isTimed && ddl <= assign) {
      Alert.alert('截止时间不能早于发布时间');
      return;
    }
    if (
      this.state.questionList.some((item) => {
        return !item.score && item.score !== 0;
      })
    ) {
      Alert.alert('题目分值不能为空');
      return;
    }
    if (
      this.state.questionList.reduce((totals, item) => {
        return totals + item.score;
      }, 0) !== this.state.totals
    ) {
      Alert.alert('题目分值之和必须等于总分值');
      return;
    }
    if (
      this.state.questionList.some((item) => {
        if (item.type === 'MULTIPLE_CHOICE' || item.type === 'ONE_CHOICE') {
          return !item.refAnswer;
        }
        return false;
      })
    ) {
      Alert.alert('参考答案不能为空');
      return;
    }
    let hwInfo = {
      ID: this.state.ID,
      state: this.state.state,
      title: this.state.title,
      courseId: this.state.courseId,
      submitIdList: this.state.submitIdList,
      totals: this.state.totals,
      delayed: this.state.isDelayed,
      repeated: this.state.isRepeated,
      timed: this.state.isTimed,
      grouped: this.state.isGrouped,
      resultAfter: this.state.resultAfter,
      deadlineDate: dateFormat(
        this.state.deadlineDate.toLocaleDateString() +
          ' ' +
          this.state.deadlineTime.toLocaleTimeString(),
      ),
      assignDate: dateFormat(
        this.state.assignDate.toLocaleDateString() +
          ' ' +
          this.state.assignTime.toLocaleTimeString(),
      ),
      questionList: this.state.questionList.map((item) => {
        let question = JSON.parse(JSON.stringify(item));
        switch (question.type) {
          case 'MULTIPLE_CHOICE':
            question.stem = question.question.stem.content;
            question.image = question.question.stem.image;
            question.options = question.question.options;
            question.refAnswer.sort();
            question.refAnswer = {
              content: question.refAnswer.join(),
              image: '',
            };
            break;
          case 'SUBJECTIVE':
            question.stem = question.question.stem.content;
            question.image = question.question.stem.image;
            break;
          case 'ONE_CHOICE':
            question.stem = question.question.stem.content;
            question.image = question.question.stem.image;
            question.options = question.question.options;
            question.refAnswer = {
              content: '' + question.refAnswer,
              image: '',
            };
            break;
          case 'TRUE_OR_FALSE':
            question.stem = question.question.stem.content;
            question.image = question.question.stem.image;
            question.refAnswer = {
              content: '' + question.refAnswer,
              image: '',
            };
            break;
        }
        return question;
      }),
    };
    let data = {
      hwinfo: hwInfo,
    };
    let callback = (res) => {
      if (res.status === 200) {
        this.setState({ifSpinnerShow: false});
        this.props.route.params.refresh();
        this.props.navigation.navigate('TeaHome');
      } else {
        this.setState({ifSpinnerShow: false});
        if (action === 'ASSIGN') {
          Alert.alert('发布失败');
        } else {
          Alert.alert('暂存失败');
        }
      }
    };
    this.setState({ifSpinnerShow: true});
    postAssignHomework(data, callback);
  };
  render() {
    return (
      <ScrollView>
        <RichText
          ifRichTextShow={this.state.ifRichTextShow}
          richText={this.state.richText}
          setShow={(value) => {
            this.setState({ifRichTextShow: value});
          }}
          setRichText={(value) => {
            this.setState({richText: value});
          }}
        />
        <Overlay isVisible={this.state.ifSpinnerShow}>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 25,
              backgroundColor: '#fff',
            }}>
            <Spinner color="#0093fe" />
          </View>
        </Overlay>
        <Container style={{height: 'auto'}}>
          <Header
            style={{
              backgroundColor: '#0093fe',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
            <Title style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              布置作业
            </Title>
          </Header>
          <Content contentContainerStyle={{alignItems: 'center'}}>
            <Card style={{width: '95%', marginTop: 10}}>
              <Form style={{width: '100%'}}>
                <Input
                  placeholder="请填写作业标题"
                  value={this.state.title}
                  onChangeText={(value) => this.setState({title: value})}
                />
              </Form>
            </Card>
            <Card style={{width: '95%', marginTop: 10}}>
              <CardItem header style={{backgroundColor: '#0093fe'}}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                  添加题目
                </Text>
              </CardItem>
              <CardItem bordered>
                <Content>
                  <Content
                    contentContainerStyle={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Button
                      bordered={this.state.isDetailed}
                      info={this.state.isDetailed}
                      style={{
                        justifyContent: 'center',
                        width: '50%',
                        backgroundColor: this.state.isDetailed
                          ? 'white'
                          : '#0093fe',
                      }}
                      onPress={() => {
                        this.setState({
                          isDetailed: false,
                        });
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: 'bold',
                          color: this.state.isDetailed ? '#0093fe' : 'white',
                        }}>
                        快 速 发 布
                      </Text>
                    </Button>
                    <Button
                      bordered={!this.state.isDetailed}
                      info={!this.state.isDetailed}
                      style={{
                        justifyContent: 'center',
                        width: '50%',
                        backgroundColor: this.state.isDetailed
                          ? '#0093fe'
                          : 'white',
                      }}
                      onPress={() => {
                        this.setState({
                          isDetailed: true,
                        });
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: 'bold',
                          color: this.state.isDetailed ? 'white' : '#0093fe',
                        }}>
                        编 辑 详 情
                      </Text>
                    </Button>
                  </Content>
                  <Text style={{fontSize: 14, color: 'grey'}}>
                    {this.state.isDetailed
                      ? '点击选项编辑详情'
                      : '点击选项设置参考答案'}
                  </Text>
                </Content>
              </CardItem>
              {this.state.questionList.map((item, index) => {
                return (
                  <CardItem bordered key={index}>
                    <Content>
                      <Content
                        contentContainerStyle={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Content
                          contentContainerStyle={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                          }}>
                          <Button transparent>
                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#0093fe',
                              }}>
                              {index + 1}
                            </Text>
                            <Text
                              style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: '#0093fe',
                              }}>
                              {item.type === 'ONE_CHOICE' ? '单选题' : ''}
                              {item.type === 'MULTIPLE_CHOICE' ? '多选题' : ''}
                              {/*{item.type === 'FILL_IN_THE_BLANK'*/}
                              {/*  ? '填空题'*/}
                              {/*  : ''}*/}
                              {item.type === 'TRUE_OR_FALSE' ? '判断题' : ''}
                              {item.type === 'SUBJECTIVE' ? '主观题' : ''}
                            </Text>
                          </Button>
                          <Item style={{width: '40%'}}>
                            <Input
                              placeholder="请输入分值"
                              placeholderTextColor="gray"
                              value={
                                item.score || item.score === 0
                                  ? item.score.toString()
                                  : ''
                              }
                              onChangeText={(value) => {
                                let questionList = this.state.questionList;
                                let thisQuestion = item;
                                thisQuestion.score = parseInt(value);
                                questionList.splice(index, 1, thisQuestion);
                                this.setState({
                                  questionList: questionList,
                                });
                              }}
                            />
                          </Item>
                        </Content>
                        <Button
                          transparent
                          onPress={() => {
                            let questionList = this.state.questionList;
                            questionList.splice(index, 1);
                            this.setState({
                              questionList: questionList,
                            });
                          }}>
                          <Icon
                            name="trash-alt"
                            type="FontAwesome5"
                            style={{color: 'red'}}
                          />
                        </Button>
                      </Content>
                      <Content
                        contentContainerStyle={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                        }}>
                        <Button
                          rounded
                          bordered
                          dark
                          onPress={() => {
                            this.setState({
                              ifRichTextShow: true,
                              richText: item.question.stem,
                            });
                          }}>
                          <Text style={{fontSize: 14, color: 'grey'}}>
                            点击输入题目…
                          </Text>
                        </Button>
                        <Button
                          rounded
                          bordered
                          dark
                          onPress={() => {
                            this.setState({
                              ifRichTextShow: true,
                              richText: item.analysis,
                            });
                          }}>
                          <Text style={{fontSize: 14, color: 'grey'}}>
                            点击输入解析…
                          </Text>
                        </Button>
                      </Content>
                      {(item.type === 'ONE_CHOICE' ||
                        item.type === 'MULTIPLE_CHOICE') && (
                        <Content
                          contentContainerStyle={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                          }}>
                          {item.type === 'ONE_CHOICE' &&
                            item.question.options.map((option, i) => {
                              return (
                                <Button
                                  key={i}
                                  transparent
                                  onPress={
                                    this.state.isDetailed
                                      ? () => {
                                          this.setState({
                                            ifRichTextShow: true,
                                            richText: option.content,
                                          });
                                        }
                                      : () => {
                                          let questionList = this.state
                                            .questionList;
                                          let thisQuestion = item;
                                          thisQuestion.refAnswer =
                                            option.option;
                                          questionList.splice(
                                            index,
                                            1,
                                            thisQuestion,
                                          );
                                          this.setState({
                                            questionList: questionList,
                                          });
                                        }
                                  }>
                                  <Text
                                    style={{
                                      fontSize: 20,
                                      fontWeight: 'bold',
                                      color:
                                        item.refAnswer === option.option
                                          ? '#0093fe'
                                          : 'gray',
                                    }}>
                                    {option.option}
                                  </Text>
                                </Button>
                              );
                            })}
                          {item.type === 'MULTIPLE_CHOICE' &&
                            item.question.options.map((option, i) => {
                              return (
                                <Button
                                  key={i}
                                  transparent
                                  onPress={
                                    this.state.isDetailed
                                      ? () => {
                                          this.setState({
                                            ifRichTextShow: true,
                                            richText: option.content,
                                          });
                                        }
                                      : () => {
                                          let questionList = this.state
                                            .questionList;
                                          let thisQuestion = item;
                                          if (
                                            thisQuestion.refAnswer.indexOf(
                                              option.option,
                                            ) !== -1
                                          ) {
                                            thisQuestion.refAnswer.splice(
                                              thisQuestion.refAnswer.indexOf(
                                                option.option,
                                              ),
                                              1,
                                            );
                                          } else {
                                            thisQuestion.refAnswer.push(
                                              option.option,
                                            );
                                          }
                                          questionList.splice(
                                            index,
                                            1,
                                            thisQuestion,
                                          );
                                          this.setState({
                                            questionList: questionList,
                                          });
                                        }
                                  }>
                                  <Text
                                    style={{
                                      fontSize: 20,
                                      fontWeight: 'bold',
                                      color:
                                        item.refAnswer.indexOf(
                                          option.option,
                                        ) !== -1
                                          ? '#0093fe'
                                          : 'gray',
                                    }}>
                                    {option.option}
                                  </Text>
                                </Button>
                              );
                            })}
                          <Button
                            transparent
                            onPress={() => {
                              if (item.question.options.length < 26) {
                                let questionList = this.state.questionList;
                                let thisQuestion = item;
                                let thisOption = {
                                  option: String.fromCharCode(
                                    'A'.charCodeAt() +
                                      item.question.options.length,
                                  ),
                                  content: {content: '', image: ''},
                                };
                                thisQuestion.question.options.push(thisOption);
                                questionList.splice(index, 1, thisQuestion);
                                this.setState({
                                  questionList: questionList,
                                });
                              }
                            }}>
                            <Icon
                              name="plus"
                              type="FontAwesome5"
                              style={{
                                color: '#0093fe',
                              }}
                            />
                          </Button>
                          <Button
                            transparent
                            onPress={() => {
                              if (item.question.options.length > 2) {
                                let questionList = this.state.questionList;
                                let thisQuestion = item;
                                let thisOption = thisQuestion.question.options.pop();
                                if (
                                  thisQuestion.type === 'MULTIPLE_CHOICE' &&
                                  thisQuestion.refAnswer.indexOf(
                                    thisOption.option,
                                  ) !== -1
                                ) {
                                  thisQuestion.refAnswer.splice(
                                    thisQuestion.refAnswer.indexOf(
                                      thisOption.option,
                                    ),
                                    1,
                                  );
                                }
                                if (
                                  thisQuestion.type === 'ONE_CHOICE' &&
                                  thisQuestion.refAnswer === thisOption.option
                                ) {
                                  thisQuestion.refAnswer = '';
                                }
                                questionList.splice(index, 1, thisQuestion);
                                this.setState({
                                  questionList: questionList,
                                });
                              }
                            }}>
                            <Icon
                              name="minus"
                              type="FontAwesome5"
                              style={{
                                color: 'red',
                              }}
                            />
                          </Button>
                        </Content>
                      )}
                      {item.type === 'TRUE_OR_FALSE' && (
                        <Content
                          contentContainerStyle={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                          }}>
                          <Button
                            large
                            transparent
                            onPress={
                              this.state.isDetailed
                                ? () => {
                                    this.setState({
                                      ifRichTextShow: true,
                                      richText: item.question.T,
                                    });
                                  }
                                : () => {
                                    let questionList = this.state.questionList;
                                    let thisQuestion = item;
                                    thisQuestion.refAnswer = true;
                                    questionList.splice(index, 1, thisQuestion);
                                    this.setState({
                                      questionList: questionList,
                                    });
                                  }
                            }>
                            <Icon
                              name="check-circle"
                              type="FontAwesome5"
                              style={{
                                color: item.refAnswer ? '#0093fe' : 'gray',
                              }}
                            />
                          </Button>
                          <Button
                            large
                            transparent
                            onPress={
                              this.state.isDetailed
                                ? () => {
                                    this.setState({
                                      ifRichTextShow: true,
                                      richText: item.question.F,
                                    });
                                  }
                                : () => {
                                    let questionList = this.state.questionList;
                                    let thisQuestion = item;
                                    thisQuestion.refAnswer = false;
                                    questionList.splice(index, 1, thisQuestion);
                                    this.setState({
                                      questionList: questionList,
                                    });
                                  }
                            }>
                            <Icon
                              name="times-circle"
                              type="FontAwesome5"
                              style={{
                                color: item.refAnswer ? 'gray' : '#0093fe',
                              }}
                            />
                          </Button>
                        </Content>
                      )}
                      {item.type === 'SUBJECTIVE' && (
                        <Button
                          rounded
                          bordered
                          dark
                          onPress={() => {
                            this.setState({
                              ifRichTextShow: true,
                              richText: item.refAnswer,
                            });
                          }}>
                          <Text style={{fontSize: 14, color: 'grey'}}>
                            点击输入参考答案…
                          </Text>
                        </Button>
                      )}
                      {/*{item.type === 'FILL_IN_THE_BLANK' && (*/}
                      {/*  <Item style={{width: '50%'}}>*/}
                      {/*    <Input*/}
                      {/*      placeholder="请输入答案"*/}
                      {/*      placeholderTextColor="gray"*/}
                      {/*      value={item.refAnswer}*/}
                      {/*      onChangeText={(value) => {*/}
                      {/*        let questionList = this.state.questionList;*/}
                      {/*        let thisQuestion = item;*/}
                      {/*        thisQuestion.refAnswer = value;*/}
                      {/*        questionList.splice(index, 1, thisQuestion);*/}
                      {/*        this.setState({*/}
                      {/*          questionList: questionList,*/}
                      {/*        });*/}
                      {/*      }}*/}
                      {/*    />*/}
                      {/*  </Item>*/}
                      {/*)}*/}
                    </Content>
                  </CardItem>
                );
              })}
              <CardItem bordered>
                <Content>
                  <Text style={{fontSize: 14, color: 'grey'}}>
                    点击添加题目
                  </Text>
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
                        let questionList = this.state.questionList;
                        let thisQuestion = {
                          question: {
                            stem: {content: '', image: ''},
                            options: [
                              {option: 'A', content: {content: '', image: ''}},
                              {option: 'B', content: {content: '', image: ''}},
                              {option: 'C', content: {content: '', image: ''}},
                              {option: 'D', content: {content: '', image: ''}},
                            ],
                          },
                          score: undefined,
                          refAnswer: 'A',
                          analysis: {content: '', image: ''},
                          type: 'ONE_CHOICE',
                        };
                        questionList.push(thisQuestion);
                        this.setState({
                          questionList: questionList,
                        });
                      }}>
                      <Icon
                        name="adn"
                        type="FontAwesome"
                        style={{color: '#0093fe'}}
                      />
                      <Text style={{fontSize: 13, color: '#0093fe'}}>
                        单选题
                      </Text>
                    </Button>
                    <Button
                      transparent
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        let questionList = this.state.questionList;
                        let thisQuestion = {
                          question: {
                            stem: {content: '', image: ''},
                            options: [
                              {option: 'A', content: {content: '', image: ''}},
                              {option: 'B', content: {content: '', image: ''}},
                              {option: 'C', content: {content: '', image: ''}},
                              {option: 'D', content: {content: '', image: ''}},
                            ],
                          },
                          score: undefined,
                          refAnswer: [],
                          analysis: {content: '', image: ''},
                          type: 'MULTIPLE_CHOICE',
                        };
                        questionList.push(thisQuestion);
                        this.setState({
                          questionList: questionList,
                        });
                      }}>
                      <Icon
                        name="ad"
                        type="FontAwesome5"
                        style={{color: '#0093fe'}}
                      />
                      <Text style={{fontSize: 13, color: '#0093fe'}}>
                        多选题
                      </Text>
                    </Button>
                    <Button
                      transparent
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        let questionList = this.state.questionList;
                        let thisQuestion = {
                          question: {
                            stem: {content: '', image: ''},
                            T: {content: '', image: ''},
                            F: {content: '', image: ''},
                          },
                          score: undefined,
                          refAnswer: true,
                          analysis: {content: '', image: ''},
                          type: 'TRUE_OR_FALSE',
                        };
                        questionList.push(thisQuestion);
                        this.setState({
                          questionList: questionList,
                        });
                      }}>
                      <Icon
                        name="check-circle"
                        type="FontAwesome"
                        style={{color: '#0093fe'}}
                      />
                      <Text style={{fontSize: 13, color: '#0093fe'}}>
                        判断题
                      </Text>
                    </Button>
                    {/*<Button*/}
                    {/*  transparent*/}
                    {/*  style={{*/}
                    {/*    flexDirection: 'column',*/}
                    {/*    justifyContent: 'center',*/}
                    {/*    alignItems: 'center',*/}
                    {/*  }}*/}
                    {/*  onPress={() => {*/}
                    {/*    let questionList = this.state.questionList;*/}
                    {/*    let thisQuestion = {*/}
                    {/*      question: {*/}
                    {/*        stem: {text: '', fileList: []},*/}
                    {/*      },*/}
                    {/*      score: undefined,*/}
                    {/*      refAnswer: '',*/}
                    {/*      analysis: {text: '', fileList: []},*/}
                    {/*      type: 'FILL_IN_THE_BLANK',*/}
                    {/*    };*/}
                    {/*    questionList.push(thisQuestion);*/}
                    {/*    this.setState({*/}
                    {/*      questionList: questionList,*/}
                    {/*    });*/}
                    {/*  }}>*/}
                    {/*  <Icon*/}
                    {/*    name="i-cursor"*/}
                    {/*    type="FontAwesome5"*/}
                    {/*    style={{color: '#0093fe'}}*/}
                    {/*  />*/}
                    {/*  <Text style={{fontSize: 13, color: '#0093fe'}}>*/}
                    {/*    填空题*/}
                    {/*  </Text>*/}
                    {/*</Button>*/}
                    <Button
                      transparent
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        let questionList = this.state.questionList;
                        let thisQuestion = {
                          question: {
                            stem: {content: '', image: ''},
                          },
                          score: undefined,
                          refAnswer: {content: '', image: ''},
                          analysis: {content: '', image: ''},
                          type: 'SUBJECTIVE',
                        };
                        questionList.push(thisQuestion);
                        this.setState({
                          questionList: questionList,
                        });
                      }}>
                      <Icon
                        name="pen"
                        type="FontAwesome5"
                        style={{color: '#0093fe'}}
                      />
                      <Text style={{fontSize: 13, color: '#0093fe'}}>
                        主观题
                      </Text>
                    </Button>
                  </Content>
                </Content>
              </CardItem>
            </Card>
            <Card style={{width: '95%', marginTop: 10}}>
              <CardItem>
                <Left>
                  <Text>总分值</Text>
                  <Input
                    placeholder="请设置作业总分值"
                    value={
                      this.state.totals || this.state.totals === 0
                        ? this.state.totals.toString()
                        : ''
                    }
                    onChangeText={(value) =>
                      this.setState({totals: parseInt(value)})
                    }
                  />
                </Left>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>截止日期</Text>
                </Left>
                <Right>
                  <DatePicker
                    defaultDate={this.state.deadlineDate}
                    locale={'en'}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={'fade'}
                    androidMode={'default'}
                    placeHolderText={this.state.deadlineDate.toLocaleDateString()}
                    textStyle={{color: 'gray'}}
                    placeHolderTextStyle={{color: 'gray'}}
                    onDateChange={(Date) => this.setState({deadlineDate: Date})}
                    disabled={false}
                  />
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>截止时间</Text>
                </Left>
                <Right>
                  <Button
                    transparent={true}
                    onPress={() =>
                      this.setState({
                        ifDeadlineTimePickerShow: !this.state
                          .ifDeadlineTimePickerShow,
                      })
                    }>
                    <Text style={{color: 'gray', fontSize: 16}}>
                      {this.state.deadlineTime.toLocaleTimeString()}
                    </Text>
                  </Button>
                  {this.state.ifDeadlineTimePickerShow && (
                    <DateTimePicker
                      testID="ddlTimePicker"
                      value={this.state.deadlineTime}
                      mode={'time'}
                      is24Hour={true}
                      display="clock"
                      onChange={(event, Time) =>
                        this.setState({
                          deadlineTime: Time,
                          ifDeadlineTimePickerShow: false,
                        })
                      }
                      onResponderReject={() => {
                        this.setState({ifDeadlineTimePickerShow: false});
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
                    value={this.state.isTimed}
                    onValueChange={() =>
                      this.setState({
                        isTimed: !this.state.isTimed,
                      })
                    }
                  />
                </Right>
              </CardItem>
              {this.state.isTimed && (
                <Content
                  contentContainerStyle={{
                    width: '95%',
                    alignSelf: 'flex-end',
                  }}>
                  <CardItem>
                    <Left>
                      <Text>发布日期</Text>
                    </Left>
                    <Right>
                      <DatePicker
                        defaultDate={this.state.assignDate}
                        locale={'en'}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={'fade'}
                        androidMode={'default'}
                        placeHolderText={this.state.assignDate.toLocaleDateString()}
                        textStyle={{color: 'gray'}}
                        placeHolderTextStyle={{color: 'gray'}}
                        onDateChange={(Date) =>
                          this.setState({assignDate: Date})
                        }
                        disabled={false}
                      />
                    </Right>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Text>发布时间</Text>
                    </Left>
                    <Right>
                      <Button
                        transparent={true}
                        onPress={() =>
                          this.setState({
                            ifAssignTimePickerShow: !this.state
                              .ifAssignTimePickerShow,
                          })
                        }>
                        <Text style={{color: 'gray', fontSize: 16}}>
                          {this.state.assignTime.toLocaleTimeString()}
                        </Text>
                      </Button>
                      {this.state.ifAssignTimePickerShow && (
                        <DateTimePicker
                          testID="assignTimePicker"
                          value={this.state.assignTime}
                          mode={'time'}
                          is24Hour={true}
                          display="clock"
                          onChange={(event, Time) =>
                            this.setState({
                              assignTime: Time,
                              ifAssignTimePickerShow: false,
                            })
                          }
                          onResponderReject={() => {
                            this.setState({ifAssignTimePickerShow: false});
                          }}
                        />
                      )}
                    </Right>
                  </CardItem>
                </Content>
              )}
              <CardItem>
                <Left>
                  <Text>是否允许补交</Text>
                </Left>
                <Right>
                  <Switch
                    trackColor={{false: '#767577', true: '#0093fe'}}
                    thumbColor={'#f4f3f4'}
                    value={this.state.isDelayed}
                    onValueChange={() =>
                      this.setState({
                        isDelayed: !this.state.isDelayed,
                      })
                    }
                  />
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>是否允许重复提交</Text>
                </Left>
                <Right>
                  <Switch
                    trackColor={{false: '#767577', true: '#0093fe'}}
                    thumbColor={'#f4f3f4'}
                    value={this.state.isRepeated}
                    onValueChange={() =>
                      this.setState({
                        isRepeated: !this.state.isRepeated,
                      })
                    }
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
                    value={this.state.isGrouped}
                    onValueChange={() =>
                      this.setState({
                        isGrouped: !this.state.isGrouped,
                        submitIdList: [],
                      })
                    }
                  />
                </Right>
              </CardItem>
              <CardItem picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  placeholder="答案显示设置"
                  placeholderStyle={{color: '#bfc6ea'}}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.resultAfter}
                  onValueChange={(value) =>
                    this.setState({
                      resultAfter: value,
                    })
                  }>
                  <Picker.Item label="提交后答案可见" value="SUBMIT" />
                  <Picker.Item label="截止时间后答案可见" value="DEADLINE" />
                </Picker>
              </CardItem>
              <CardItem picker>
                <Left>
                  <Text>选择发布课程</Text>
                </Left>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  placeholder="选择发布课程"
                  placeholderStyle={{color: '#bfc6ea'}}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.courseId}
                  onValueChange={(value) =>
                    this.setState({
                      courseId: value,
                      submitIdList: [],
                    })
                  }>
                  {this.state.courseInfo.map((u, i) => {
                    return <Picker.Item key={i} label={u.name} value={u.ID} />;
                  })}
                </Picker>
              </CardItem>
              {this.state.courseId &&
                this.state.courseInfo.map((u, i) => {
                  if (u.ID === this.state.courseId) {
                    return (
                      <Content key={i}>
                        <CardItem>
                          <Left>
                            <Button
                              transparent={true}
                              onPress={() =>
                                this.setState({
                                  ifCheckBoxShow: !this.state.ifCheckBoxShow,
                                })
                              }>
                              {this.state.isGrouped ? (
                                <Text style={{color: 'black', fontSize: 16}}>
                                  选择分组
                                </Text>
                              ) : (
                                <Text style={{color: 'black', fontSize: 16}}>
                                  选择学生
                                </Text>
                              )}
                              <Icon
                                name="caret-down"
                                type="FontAwesome"
                                style={{color: 'grey'}}
                              />
                            </Button>
                          </Left>
                        </CardItem>
                        {this.state.ifCheckBoxShow && (
                          <Content
                            contentContainerStyle={{
                              width: '90%',
                              alignSelf: 'flex-end',
                            }}>
                            <ListItem>
                              <CheckBox
                                checked={(this.state.isGrouped
                                  ? u.groupList
                                  : u.studentList
                                ).every((item) => {
                                  return (
                                    this.state.submitIdList.indexOf(item.ID) !==
                                    -1
                                  );
                                })}
                                onPress={() => {
                                  if (
                                    (this.state.isGrouped
                                      ? u.groupList
                                      : u.studentList
                                    ).every((item) => {
                                      return (
                                        this.state.submitIdList.indexOf(
                                          item.ID,
                                        ) !== -1
                                      );
                                    })
                                  ) {
                                    this.setState({
                                      submitIdList: [],
                                    });
                                  } else {
                                    this.setState({
                                      submitIdList: (this.state.isGrouped
                                        ? u.groupList
                                        : u.studentList
                                      ).map((item) => {
                                        return item.ID;
                                      }),
                                    });
                                  }
                                }}
                              />
                              <Body>
                                <Text>全选</Text>
                              </Body>
                            </ListItem>
                            {(this.state.isGrouped
                              ? u.groupList
                              : u.studentList
                            ).map((item, index) => {
                              return (
                                <ListItem key={index}>
                                  <CheckBox
                                    checked={
                                      this.state.submitIdList.indexOf(
                                        item.ID,
                                      ) !== -1
                                    }
                                    onPress={() => {
                                      let submitIdList = this.state
                                        .submitIdList;
                                      if (
                                        submitIdList.indexOf(item.ID) !== -1
                                      ) {
                                        submitIdList.splice(
                                          submitIdList.indexOf(item.ID),
                                          1,
                                        );
                                      } else {
                                        submitIdList.push(item.ID);
                                      }
                                      this.setState({
                                        submitIdList: submitIdList,
                                      });
                                    }}
                                  />
                                  <Body>
                                    <Text>{item.name}</Text>
                                  </Body>
                                </ListItem>
                              );
                            })}
                          </Content>
                        )}
                      </Content>
                    );
                  }
                })}
            </Card>
            <Content
              contentContainerStyle={{
                marginBottom: 20,
                marginTop: 15,
                width: '90%',
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Button
                style={{
                  backgroundColor: '#0093fe',
                }}
                onPress={() => {
                  this.post('SAVE');
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  暂存作业
                </Text>
              </Button>
              <Button
                style={{
                  backgroundColor: '#0093fe',
                }}
                onPress={() => {
                  this.post('ASSIGN');
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  发布作业
                </Text>
              </Button>
            </Content>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}
