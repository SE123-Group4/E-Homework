package org.chp.hw.serviceimpl;

import org.chp.hw.constant.HdStateEnum;
import org.chp.hw.constant.HwResultEnum;
import org.chp.hw.constant.HwStateEnum;
import org.chp.hw.dao.*;
import org.chp.hw.entity.*;
import org.chp.hw.service.HwService;
import org.chp.hw.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @ClassName: HwServiceImpl
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/17 1:47 下午
 * @Version 1.0
 **/
@Service
public class HwServiceImpl implements HwService {
    @Autowired
    HomeWorkDao homeWorkDao;

    @Autowired
    TeacherDao teacherDao;

    @Autowired
    StudentDao studentDao;

    @Autowired
    GroupDao groupDao;

    @Autowired
    CourseDao courseDao;

    @Autowired
    HandsonDao handsonDao;

    @Autowired
    QuestionDao questionDao;

    @Autowired
    AnswerDao answerDao;


    private HwInfo changeHwtoHwInfo(Homework homework) throws ParseException {
        HwInfo hwInfo = new HwInfo();
        hwInfo.fromHWtoHwInfo(homework);
        return hwInfo;
    }

    /**
    * @Auther: DakeWang
    * @Description: getHwInfoByHwID
    * @Date: 2:14 下午 2020/11/17
    **/
    private HwInfo getHwInfoByHwID(int id) throws Exception {
        System.out.println(id);
        Optional<Homework> homeworkOptional = homeWorkDao.getByHwID(id);
        System.out.println();
        if(homeworkOptional.isPresent()){
            Homework homework = homeworkOptional.get();
            return changeHwtoHwInfo(homework);
        }
        else{
            throw new Exception("作业ID不存在");
        }
    }

    private List<CourseInfo> getCourseInfoListByTeaID(int id) throws Exception {
        Optional<Teacher> teacherOptional = teacherDao.getTeaByID(id);
        if(teacherOptional.isPresent()){
            Teacher teacher = teacherOptional.get();
            List<Course> courseList = teacher.getCourseList();
            List<CourseInfo> courseInfoList = new ArrayList<>();
            for(Course course : courseList){
                CourseInfo courseInfo = new CourseInfo();
                courseInfo.setID(course.getId());
                courseInfo.setName(course.getName());
                courseInfo.changetoGroupList(course.getGroupList());
                courseInfo.changetoStudentList(course.getStudentcourseList());
                courseInfoList.add(courseInfo);
            }
            return courseInfoList;
        }
        else{
            throw new Exception("教师ID不存在");
        }

    }

    public TotalInfo getORcreateHw(Integer hwID, Integer teaID) throws Exception {
        System.out.println(hwID);
        TotalInfo totalInfo = new TotalInfo();
        totalInfo.setCourseInfoList(getCourseInfoListByTeaID(teaID));
        if(hwID.equals(0)){
            return totalInfo;
        }
        else{
            totalInfo.setHwInfo(getHwInfoByHwID(hwID));
        }
        return totalInfo;
    }

    private Homework getFromHwInfo(HwInfo hwInfo){
        Homework homework = new Homework();
        homework.setCourse(courseDao.getByCourseID(hwInfo.getCourseId()).get());
        homework.setState(HwStateEnum.ASSIGNED);
        homework.setTitle(hwInfo.getTitle());
        homework.setTotals(hwInfo.getTotals());
        homework.setIsdelayed(hwInfo.isDelayed());
        homework.setIsrepeated(hwInfo.isRepeated());
        homework.setIstimed(hwInfo.isTimed());
        homework.setIsgrouped(hwInfo.isGrouped());
        homework.setResultafter(HwResultEnum.SUBMIT);
        homework.setDeadline("20210108");
        homework.setAssignTime("20210108");
        return homework;
    }

    public void resetByHwInfo(HwInfo hwInfo){
        if(hwInfo.getID() != 0){
            homeWorkDao.deleteHwByID(hwInfo.getID());
        }
        Homework homework = getFromHwInfo(hwInfo);
        System.out.println(homework.getAssignTime());
        homeWorkDao.saveHw(homework);
        System.out.println(homework.getId());
        for(Integer i : hwInfo.getSubmitIdList()){
            Handson handson = new Handson();
            handson.setSubmitter(i);
            handson.setHomework(homework);
            handson.setIsGrouped(homework.isIsgrouped());
            handson.setState(HdStateEnum.UNSUBMITTED);
            System.out.println(i);
            handsonDao.saveHd(handson);
        }
        for(QuestionListTuple questionListTuple : hwInfo.getQuestionList()){
            Question question = questionListTuple.toQuestion();
            question.setHomework(homework);
            questionDao.saveQuestion(question);
        }
    }

    public response getAnswerList(int id){
        response ret = new response();
        ret.setStatus(400);
        ret.setMsg("no handson id");
        Optional<Handson> handsonOptional = handsonDao.getHdByID(id);
        System.out.println("_________________________1");
        if(handsonOptional.isPresent()){
            Handson handson = handsonOptional.get();
            List<Answer> answerList = handson.getAnswerList();
            List<answerUtil> answerUtils = new ArrayList<>();
            System.out.println("_________________________2");
            for(Answer answer : answerList){
                System.out.println("_________________________loop");
                answerUtil util = new answerUtil();
                System.out.println(answer.getId());
                Question question1 = answer.getQuestion();
                System.out.println(question1.getId());
                Question question = questionDao.getByQuestionID(question1.getId()).get();
                util.setID(answer.getId());
                System.out.println(question.getQuestionContent());
                System.out.println(question.getQuestionContent().getStem());
                util.setStem(question.getQuestionContent().getStem());
                String type = question.getQuestionContent().getType();
                System.out.println("_________________________if");
                if(type.equals("ONE_CHOICE") || type.equals("MULTIPLE_CHOICE")){
                    util.setOptions(question.getQuestionContent().getOptions());
                    util.setRefAnswer(question.getQuestionContent().getChoiceRefAnswer());
                    if(answer.getContent() != null)
                        util.setStuAnswer(answer.getContent().getChoiceAnswer());
                }
                if(type.equals("TRUE_OR_FALSE")){
                    util.setRefAnswer(question.getQuestionContent().isTfRefAnswer());
                    if(answer.getContent() != null)
                        util.setStuAnswer(answer.getContent().isTfAnswer());
                }
                if(type.equals(("SUBJECTIVE"))){
                    util.setRefAnswer(question.getQuestionContent().getStringRefAnswer());
                    if(answer.getContent() != null)
                        util.setStuAnswer(answer.getContent().getStringAnswer());
                }
                if(answer.getScore() != null){
                    util.setStuScore(answer.getScore());
                }
                util.setTotalScore(question.getScore());
                System.out.println("_________________________add");
                answerUtils.add(util);
            }
            ret.setData(answerUtils);
            ret.setMsg("responce message");
            ret.setStatus(200);
        }
        return ret;
    }

    public response correct(List<CorrectUtil> correctUtils){
        response ret = new response();

        for(CorrectUtil util : correctUtils){
            Answer answer;

            System.out.println(util.getID());
            Optional<Answer> answerOptional = answerDao.getByAnswerID(util.getID());

            if(answerOptional.isPresent()){
                answer = answerOptional.get();
            }
            else {
                ret.setStatus(400);
                return ret;
            }

            answer.setScore(util.getStuScore());

            Comment comment;
            if(answer.getComment() != null){
                comment = answer.getComment();
            }
            else{
                comment = new Comment();
            }
            comment.setContent(util.getComment().getContent());
            comment.setId(util.getID());
            comment.setImage(util.getComment().getImage());
            answer.setComment(comment);

            answerDao.saveAnswer(answer);
        }
        ret.setStatus(200);
        return ret;
    }

    private void countTotalScore(Handson handson){
        List<Answer> answerList = handson.getAnswerList();
        int total = 0;
        for(Answer answer : answerList){
            total += answer.getScore();
        }
        handson.setTotalScore(total);
    }

    public response statistics(int id){
        response ret = new response();
        ret.setStatus(400);
        Optional<Homework> homeworkOptional = homeWorkDao.getByHwID(id);
        if(homeworkOptional.isPresent()){
            Homework homework = homeworkOptional.get();
            StatisticsUtil statisticsUtil = new StatisticsUtil();
            statisticsUtil.setTeacher(homework.getCourse().getTeacher().getName());
            statisticsUtil.setCourseName(homework.getCourse().getName());
            statisticsUtil.setDeadline(homework.getDeadline());
            statisticsUtil.setTitle(homework.getTitle());
            statisticsUtil.setStart(homework.getAssignTime());

            List<Handson> handsonList = homework.getHandsonList();
            int max = 0;
            int min = 0x7fffffff;
            int sum = 0;
            int n = 0;
            for(Handson handson : handsonList){
                n++;
                countTotalScore(handson);
                int score = handson.getTotalScore();
                sum += score;
                if(score > max){
                    max = score;
                }
                if(score < min){
                    min = score;
                }
            }
            int avg = sum/n;

            statisticsUtil.setAverageScore(avg);
            statisticsUtil.setMaxScore(max);
            statisticsUtil.setMinScore(min);
            ret.setData(statisticsUtil);
            ret.setStatus(200);
            ret.setMsg("successful response");
        }
        else {
            ret.setMsg("invalid homework id");
        }
        return ret;
    }

    public response postAnswer(PostAnswerUtil postAnswerUtil){
        response ret = new response();
        if(postAnswerUtil.getSimpleChoiceAnswer() != null){
            for(PostAnswerItem item : postAnswerUtil.getSimpleChoiceAnswer()){
                Answer answer = new Answer();
                Optional<Question> questionOptional = questionDao.getByQuestionID(item.getID());
                if(questionOptional.isPresent()){
                    answer.setQuestion(questionOptional.get());
                }
            }
        }
        if(postAnswerUtil.getChoiceAnswer() != null){

        }
        if(postAnswerUtil.getSubjectiveAnswer() != null){

        }
        if(postAnswerUtil.getTorFAnswer() != null){

        }
        ret.setStatus(400);
        return ret;
    }
}
