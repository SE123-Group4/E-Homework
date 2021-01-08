package org.chp.hw.serviceimpl;

import org.chp.hw.HwApplicationTests;
import org.chp.hw.entity.OptionItem;
import org.chp.hw.service.HwService;
import org.chp.hw.service.IMailService;
import org.chp.hw.util.*;
import org.junit.Test;
import org.junit.jupiter.api.TestTemplate;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;

@Rollback
@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class HwServiceTest extends HwApplicationTests {
    @Autowired
    private HwService hwService;

    @Autowired
    private IMailService iMailService;

    @Test
    public void contextLoads() {
    }

    @Test
    public void changeHwtoHwInfo(){
        HwInfo hwInfo=new HwInfo();
        hwInfo.setID(1);
        hwInfo.setState("ASSIGNED");
        hwInfo.setTitle("title");
        hwInfo.setCourseId(1);
        List<Integer> list=new ArrayList<>();
        list.add(1);
        hwInfo.setSubmitIdList(list);
        hwInfo.setTotals(10);
        hwInfo.setDelayed(false);
        hwInfo.setRepeated(false);
        hwInfo.setTimed(false);
        hwInfo.setGrouped(false);
        hwInfo.setResultAfter("DEADLINE");
        hwInfo.setDeadlineDate("20210915");
        hwInfo.setAssignDate("20210915");
        QuestionListTuple questionListTuple=new QuestionListTuple();
        questionListTuple.setStem("NCT127 REGULAR");
        questionListTuple.setType("SUBJECTIVE");
        questionListTuple.setStem("stem");
        questionListTuple.setScore(10);
        List<QuestionListTuple> questionListTuples=new ArrayList<>();
        questionListTuples.add(questionListTuple);
        hwInfo.setQuestionList(questionListTuples);
        hwService.resetByHwInfo(hwInfo);
        assertEquals(1,1);
    }

    @Test
    public void changeHwtoHwInfo2(){
        HwInfo hwInfo=new HwInfo();
        hwInfo.setID(1);
        hwInfo.setState("ASSIGNED");
        hwInfo.setTitle("title");
        hwInfo.setCourseId(1);
        List<Integer> list=new ArrayList<>();
        list.add(10);
        hwInfo.setSubmitIdList(list);
        hwInfo.setTotals(10);
        hwInfo.setDelayed(false);
        hwInfo.setRepeated(false);
        hwInfo.setTimed(false);
        hwInfo.setGrouped(false);
        hwInfo.setResultAfter("DEADLINE");
        hwInfo.setDeadlineDate("20210915");
        hwInfo.setAssignDate("20210915");
        QuestionListTuple questionListTuple=new QuestionListTuple();
        questionListTuple.setStem("NCT127 REGULAR");
        questionListTuple.setType("SUBJECTIVE");
        questionListTuple.setStem("stem");
        questionListTuple.setScore(10);
        List<QuestionListTuple> questionListTuples=new ArrayList<>();
        questionListTuples.add(questionListTuple);
        hwInfo.setQuestionList(questionListTuples);
        hwService.resetByHwInfo(hwInfo);
        assertEquals(1,1);
    }

    @Test
    public void getHwInfoByHwID() throws Exception {
        response hwInfo=hwService.getORcreateHw(0,1);
        assertEquals(200,hwInfo.getStatus());
    }

    @Test
    public void getHwInfoByHwID2() throws Exception {
        response hwInfo=hwService.getORcreateHw(0,0);
        assertEquals(400,hwInfo.getStatus());
    }

    @Test
    public void getHwInfoByHwID3() throws Exception {
        response hwInfo=hwService.getORcreateHw(1,1);
        assertEquals("error 2",hwInfo.getMsg());
    }

    @Test
    public void getHwInfoByHwID4() throws Exception {
        response hwInfo=hwService.getORcreateHw(2,1);
        assertEquals(200,hwInfo.getStatus());
    }

    @Test
    public void getAnswerList(){
        response response=hwService.getAnswerList(16);
        assertEquals(200,response.getStatus());
    }

    @Test
    public void statistic(){
        response response=hwService.statistics(12);
        assertEquals(200,response.getStatus());
    }

    @Test
    public void statistic2(){
        response response=hwService.statistics(21);
        assertEquals(400,response.getStatus());
    }

    @Test
    public void getQuestions(){
        response response=hwService.getQuestions(16);
        assertEquals(200,response.getStatus());
    }

    @Test
    public void getQuestions2(){
        response response=hwService.getQuestions(61);
        assertEquals(400,response.getStatus());
    }

    @Test
    public void getHWlist() throws ParseException {
        response response=hwService.getHwList(1);
        assertEquals(200,response.getStatus());
    }

    @Test
    public void getHWlist2() throws ParseException {
        response response=hwService.getHwList(100);
        assertEquals(400,response.getStatus());
    }

    @Test
    public void getCourseHwLiset() throws ParseException {
        response response=hwService.courseHwList(1,"ROLE_TEACHER",1);
        assertEquals(200,response.getStatus());
    }

    @Test
    public void getCourseHwList2() throws ParseException {
        response response=hwService.courseHwList(10,"ROLE_TEACHER",1);
        assertEquals(400,response.getStatus());
    }

    @Test
    public void getCourseHwList3() throws ParseException {
        response response=hwService.courseHwList(1,"ROLE_STUDENT",1);
        assertEquals(200,response.getStatus());
    }

    @Test
    public void getTeaList() throws ParseException {
        response response=hwService.teaGetQuestion(1);
        assertEquals(200,response.getStatus());
    }

    @Test
    public void getTeaList2() throws ParseException {
        response response=hwService.teaGetQuestion(100);
        assertEquals(400,response.getStatus());
    }

    @Test
    public void  sendMail(){
        int i=iMailService.sendAssignMail("738761580@qq.com","course","title");
        assertEquals(0,i);
    }

    @Test
    public void checkCorrect(){
        List<CorrectUtil> correctUtils=new ArrayList<>();
        CorrectUtil correctUtil=new CorrectUtil();
        correctUtil.setID(10);
        correctUtil.setStuScore(5);
        CommentUtil commentUtil=new CommentUtil();
        commentUtil.setContent("comment");
        correctUtil.setComment(commentUtil);
        correctUtils.add(correctUtil);
        response response=hwService.correct(correctUtils);
        assertEquals(400,response.getStatus());
    }

    @Test
    public void checkCorrect2(){
        List<CorrectUtil> correctUtils=new ArrayList<>();
        CorrectUtil correctUtil=new CorrectUtil();
        correctUtil.setID(4);
        correctUtil.setStuScore(5);
        CommentUtil commentUtil=new CommentUtil();
        commentUtil.setContent("comment");
        correctUtil.setComment(commentUtil);
        correctUtils.add(correctUtil);
        response response=hwService.correct(correctUtils);
        assertEquals(200,response.getStatus());
    }

    @Test
    public void postAnswer(){
        PostAnswerUtilPack postAnswerUtilPack=new PostAnswerUtilPack();
        postAnswerUtilPack.setHandsonID(15);
        PostAnswerUtil postAnswerUtil=new PostAnswerUtil();
        PostAnswerItem postAnswerItem=new PostAnswerItem();
        List<PostAnswerItem> postAnswerItems=new ArrayList<>();
        postAnswerItem.setID(2);
        postAnswerItem.setOption("[{\"option\": \"C\", \"content\": \"TO THE C\", \"image\": null}]");
        postAnswerItems.add(postAnswerItem);
        postAnswerUtil.setSimpleChoiceAnswer(postAnswerItems);
        List<PostAnswerItem> postAnswerItems1=new ArrayList<>();
        postAnswerItem.setID(5);
        postAnswerItem.setOption("[{\"option\": \"C\", \"content\": \"TO THE C\", \"image\": null}]");
        postAnswerItems1.add(postAnswerItem);
        postAnswerUtil.setChoiceAnswer(postAnswerItems1);
        List<PostAnswerItem> postAnswerItems2=new ArrayList<>();
        postAnswerItem.setID(6);
        postAnswerItem.setOption("[{\"ID\":20, \"content\":\"MARK\" }]");
        postAnswerItems2.add(postAnswerItem);
        postAnswerUtil.setSubjectiveAnswer(postAnswerItems2);
        List<PostAnswerItem> postAnswerItems3=new ArrayList<>();
        postAnswerItem.setID(4);
        postAnswerItem.setOption("[{\"ID\": 19, \"option\":true}]");
        postAnswerItems3.add(postAnswerItem);
        postAnswerUtil.setTorFAnswer(postAnswerItems3);
        postAnswerUtilPack.setAnswer(postAnswerUtil);
        response response=hwService.postAnswer(postAnswerUtilPack);
        assertEquals(200,response.getStatus());
    }

    @Test
    public void getHandsonList() throws ParseException {
        response response=hwService.getHandsonList(3);
        assertEquals(200,response.getStatus());
    }

    @Test
    public void getHandsonList2() throws ParseException {
        response response=hwService.getHandsonList(100);
        assertEquals(400,response.getStatus());
    }

    @Test
    public void sendCorrectMail(){
        int i=iMailService.sendCorrectMail("riken01@sjtu.edu.cn","course","title");
        assertEquals(0,i);
    }

}
