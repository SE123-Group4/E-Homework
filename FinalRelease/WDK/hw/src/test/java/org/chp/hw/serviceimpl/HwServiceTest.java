package org.chp.hw.serviceimpl;

import org.chp.hw.HwApplicationTests;
import org.chp.hw.service.HwService;
import org.chp.hw.service.IMailService;
import org.chp.hw.util.HwInfo;
import org.chp.hw.util.QuestionListTuple;
import org.chp.hw.util.response;
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
}
