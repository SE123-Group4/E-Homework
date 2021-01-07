import React from 'react';
import {Container, Content, Card, CardItem, Text, Label} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
let {width} = Dimensions.get('window');

export class UserManualScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Content>
          <Card style={styles.card}>
            <CardItem header>
              <Text style={styles.header}>用户手册</Text>
            </CardItem>
            <CardItem style={styles.cardItem}>
              <Label>
                <Text style={styles.label}>1.云作业平台介绍</Text>
              </Label>
            </CardItem>
            <CardItem>
              <Text>
                云作业平台可供两类用户使用。教师用户可以使用此平台进行发布作业，批改作业，管理课程和学生。学生用户可以使用此平台接收和提交作业，同时即时地收到作业发布和批改完成的通知。本平台旨在为家校之间提供高效便捷的作业处理方式。
              </Text>
            </CardItem>
            <CardItem>
              <Label>
                <Text style={styles.label}>2.教师用户</Text>
              </Label>
            </CardItem>
            <CardItem>
              <Label>
                <Text style={styles.subtitle}>发布作业</Text>
              </Label>
            </CardItem>
            <CardItem>
              <Text>
                教师用户可通过点击作业主页上方的＋进行发布作业操作，在发布作业时通过新增并选择题型来设置多样化的题目。在插入图片时可以选择对图片清晰度进行优化。教师可在发布作业时设置作业的起止时间等多种属性。{' '}
              </Text>
            </CardItem>
            <CardItem>
              <Label>
                <Text style={styles.subtitle}>作业浏览</Text>
              </Label>
            </CardItem>
            <CardItem>
              <Text>
                教师用户在作业列表浏览界面可实时查看提交人数和未提交人数，同时也可查看作业的批改状态，已完全批改的作业状态为已批改，未完全批改完成的作业状态显示未批改的作业数量。
              </Text>
            </CardItem>
            <CardItem>
              <Label>
                <Text style={styles.subtitle}>批改作业</Text>
              </Label>
            </CardItem>
            <CardItem>
              <Text>
                教师用户可以点击作业列表的作业，若作业为未批改可进入作业批改界面。其中单选题多选题和是非题平台根据教师用户发布题目时设置的答案进行自动批改。教师可对其余题目进行评分批阅。同时，教师可在下方对作业进行留言评价。
              </Text>
            </CardItem>
            <CardItem>
              <Label>
                <Text style={styles.subtitle}>课程管理</Text>
              </Label>
            </CardItem>
            <CardItem>
              <Text>
                教师用户可以通过点击课程主页上方的＋进行添加课程操作，添加课程时教师用户需输入课程的名字，开课结课时间以及参考教材等信息。后续可以在课程详情页对课程进行信息修改和删除。
              </Text>
            </CardItem>
            <CardItem>
              <Label>
                <Text style={styles.subtitle}>学生管理</Text>
              </Label>
            </CardItem>
            <CardItem>
              <Text>
                教师用户可以对某一课程在课程详情页点击学生管理按钮进行学生添加和删除操作。
              </Text>
            </CardItem>
            <CardItem>
              <Label>
                <Text style={styles.label}>3.学生用户</Text>
              </Label>
            </CardItem>
            <CardItem>
              <Label>
                <Text style={styles.subtitle}>提交作业</Text>
              </Label>
            </CardItem>
            <CardItem>
              <Text>
                学生用户可以点击作业条目进入作业详情界面。若作业状态为未提交，学生可在此界面进行答题并提交。
              </Text>
            </CardItem>
            <CardItem>
              <Label>
                <Text style={styles.subtitle}>作业浏览</Text>
              </Label>
            </CardItem>
            <CardItem>
              <Text>
                学生用户可对已提交作业进行浏览回顾并查看老师的批改反馈以及留言评论。
              </Text>
            </CardItem>
            <CardItem>
              <Label>
                <Text style={styles.subtitle}>提交作业</Text>
              </Label>
            </CardItem>
            <CardItem>
              <Text>
                学生用户可以点击作业条目进入作业详情界面。若作业状态为未提交，学生可在此界面进行答题并提交。
              </Text>
            </CardItem>
            <CardItem>
              <Label>
                <Text style={styles.subtitle}>作业通知</Text>
              </Label>
            </CardItem>
            <CardItem>
              <Text>
                当教师发布或批改完成作业后，学生用户将会收到实时的消息通知。
              </Text>
            </CardItem>
            <CardItem>
              <Label>
                <Text style={styles.label}>4.所有用户</Text>
              </Label>
            </CardItem>
            <CardItem>
              <Label>
                <Text style={styles.subtitle}>个人信息维护</Text>
              </Label>
            </CardItem>
            <CardItem>
              <Text>
                所有用户可以点击个人界面的头像进行个人信息修改。修改密码操作必须通过旧密码验证以及新密码确认才能拿修改成功。
              </Text>
            </CardItem>
            <CardItem>
              <Label>
                <Text style={styles.subtitle}>搜索</Text>
              </Label>
            </CardItem>
            <CardItem>
              <Text>
                所有用户可以对相关作业进行题目关键词搜索，对课程进行课程名字关键词搜索操作。
              </Text>
            </CardItem>
            <CardItem>
              <Label>
                <Text style={styles.subtitle}>状态筛选</Text>
              </Label>
            </CardItem>
            <CardItem>
              <Text>
                所有用户可以对课程结课状态进行筛选查看。学生用户可以对作业提交状态进行筛选查看。
              </Text>
            </CardItem>
            <CardItem>
              <Label>
                <Text style={styles.label}>
                  5.如在使用过程中遇到其他问题，请联系GROUP-FOUR工作室
                </Text>
              </Label>
            </CardItem>
            <CardItem>
              <Text>本产品一切解释权归GROUP-FOUR工作室所有</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    width: width,
  },
  cardItem: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 18,
    color: '#0093fe',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textContainer: {
    width: width * 0.8,
  },
});
