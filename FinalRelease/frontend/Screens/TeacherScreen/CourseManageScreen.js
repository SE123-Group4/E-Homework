import React from 'react';
import {StyleSheet, Dimensions, Alert} from 'react-native';
import {
  Container,
  Content,
  CardItem,
  Card,
  Input,
  Form,
  Button,
  Item,
  Label,
  Text,
  Textarea,
} from 'native-base';
import {getCourseByID, modifyCourse} from '../../Service/CourseService';
let {width} = Dimensions.get('window');

export default class CourseManageScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      courseInfo: {
        name: '课程 1',
        teacher: '老师 1',
        introduction: '这是课程 1 的简介。',
        book: '参考书籍 1',
      },
      name: '课程 1',
      teacher: '老师 1',
      introduction: '这是课程 1 的简介。',
      book: '参考书籍 1',
    };
  }

  componentDidMount() {
    const callback = (res) => {
      if (res !== null) {
        // var courseInfo = {
        //   name: res.name,
        //   teacher: res.teacher,
        //   introduction: res.introduction,
        //   book: res.book,
        // };
        this.setState({
          name: res.name,
          teacher: res.teacher,
          introduction: res.introduction,
          book: res.book,
        });
      }
    };
    getCourseByID(this.props.route.params.courseID, callback);
  }

  commitModify = () => {
    const callback = (res) => {
      if (res.status === 200) {
        Alert.alert('修改成功');
        this.props.route.params.refresh();
        this.props.navigation.navigate('TeaCourse', {
          courseID: this.props.route.params.courseID,
        });
      }
    };
    modifyCourse(
      this.props.route.params.courseID,
      this.state.name,
      this.state.introduction,
      this.state.book,
      callback,
    );
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Card>
            <CardItem header>
              <Text style={styles.header}>修改课程信息</Text>
            </CardItem>
          </Card>
          <Card style={styles.card}>
            <CardItem>
              <Label>
                <Text style={styles.labelText}>课程名称：</Text>
              </Label>
              <Input
                style={styles.input}
                defaultValue={this.state.name}
                onChangeText={(text) => this.setState({name: text})}
              />
            </CardItem>
          </Card>
          <Card style={styles.card}>
            <CardItem>
              <Label>
                <Text style={styles.labelText}>课程简介：</Text>
              </Label>
            </CardItem>
            <CardItem>
              <Textarea
                style={styles.introduction}
                rowSpan={5}
                allowFontScaling
                defaultValue={this.state.introduction}
                onChangeText={(text) => this.setState({introduction: text})}
                bordered={false}
                underline
              />
            </CardItem>
          </Card>
          <Card style={styles.card}>
            <CardItem>
              <Label>
                <Text style={styles.labelText}>推荐书籍：</Text>
              </Label>
              <Input
                style={styles.introduction}
                defaultValue={this.state.book}
                onChangeText={(text) => this.setState({book: text})}
              />
            </CardItem>
          </Card>

          <Button
            rounded
            info
            style={styles.button}
            onPress={this.commitModify}>
            <Text style={styles.buttonText}>确认修改</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  header: {
    fontSize: 23,
    color: '#0093fe',
  },
  card: {
    width: width * 0.96,
    alignSelf: 'center',
  },
  labelText: {
    fontSize: 20,
  },
  input: {
    width: width * 0.6,
  },
  introduction: {
    color: 'gray',
  },
  button: {
    width: width * 0.4,
    marginTop: 10,
    marginBottom: 10,
    left: width * 0.3,
    //position: 'absolute',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
});
