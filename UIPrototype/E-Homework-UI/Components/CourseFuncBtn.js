import React from 'react';
import {View} from 'react-native';
import {Icon, Button, Text} from 'native-base';

export class CourseFuncBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 1,
    };
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Button vertical color="white">
          <Icon
            type="FontAwesome"
            name="folder-o"
            onPress={() => {
              console.log('文件管理');
            }}
          />
          <Text>文件管理</Text>
        </Button>
        <Button vertical>
          <Icon
            type="FontAwesome"
            name="users"
            onPress={() => {
              console.log('分组管理');
            }}
          />
          <Text>分组管理</Text>
        </Button>
        <Button vertical>
          <Icon
            type="FontAwesome"
            name="check"
            onPress={() => {
              console.log('查看成绩');
            }}
          />
          <Text>查看成绩</Text>
        </Button>
        <Button vertical>
          <Icon
            type="FontAwesome"
            name="user-plus"
            onPress={() => {
              console.log('添加学生');
            }}
          />
          <Text>添加学生</Text>
        </Button>
      </View>
    );
  }
}
