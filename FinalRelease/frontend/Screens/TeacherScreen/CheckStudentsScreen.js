import React from 'react';
import {
  Container,
  Content,
  SwipeRow,
  Button,
  Icon,
  Text,
  ListItem,
  List,
  CardItem,
  Card,
  Left,
  Right,
  Body,
} from 'native-base';
import {StyleSheet, Dimensions, View, Alert} from 'react-native';
import {ListView} from 'deprecated-react-native-listview';
import {SearchBar} from 'react-native-elements';
import {getStudentsByCourse, searchStudent} from '../../Service/CourseService';

let {width} = Dimensions.get('window');

export class CheckStudentsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [
        {id: '1234', name: '学生1'},
        {id: '1235', name: '学生2'},
        {id: '1236', name: '学生3'},
      ],
      searchValue: null,
    };
  }

  componentDidMount() {
    const callback = (res) => {
      if (res.status === 200) {
        this.setState({students: res.data});
      }
    };
    //getStudentsByCourse(this.props.route.params.courseID, callback);
  }

  search = () => {
    if (this.state.searchValue === '' || this.state.searchValue === null) {
      this.componentDidMount();
      return;
    }
    const callback = (res) => {
      if (res.status === 200) {
        this.setState({students: res.data});
      }
    };
    // searchStudent(
    //   this.props.route.params.courseID,
    //   this.state.searchValue,
    //   callback,
    // );
  };

  renderStudents = () => {
    if (this.state.students.length === 0) {
      if (this.state.searchValue === '' || this.state.searchValue === null) {
        return (
          <CardItem style={styles.studentCardItem} bordered>
            <Body>
              <Text>暂无学生</Text>
            </Body>{' '}
          </CardItem>
        );
      } else {
        return (
          <CardItem style={styles.studentCardItem} bordered>
            <Body>
              <Text>搜索无结果</Text>
            </Body>{' '}
          </CardItem>
        );
      }
    }
    return this.state.students.map((item) => {
      return (
        <CardItem style={styles.studentCardItem} bordered>
          <Left>
            <Text style={styles.studentText}>{item.name}</Text>
          </Left>
          <Right>
            <Text style={styles.studentText}>{item.id}</Text>
          </Right>
        </CardItem>
      );
    });
  };

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem bordered header style={styles.header}>
              <Text style={styles.headerText}>课程学生</Text>
            </CardItem>
          </Card>
          <SearchBar
            placeholder="搜索"
            onChangeText={(text) => this.setState({searchValue: text})}
            onSubmitEditing={this.search()}
            value={this.state.searchValue}
            lightTheme
            inputContainerStyle={{backgroundColor: '#f0f2f3'}}
            containerStyle={{backgroundColor: 'white'}}
            round
          />
          <Card>{this.renderStudents()}</Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#0093fe',
  },
  studentCardItem: {
    //justifyContent: 'center',
    height: 50,
    //width: width * 0.8,
  },
  studentText: {
    fontSize: 15,
    //marginLeft: 50,
  },
});
