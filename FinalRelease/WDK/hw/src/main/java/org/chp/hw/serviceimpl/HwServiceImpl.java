package org.chp.hw.serviceimpl;

import com.alibaba.fastjson.JSON;
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
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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

    public response getORcreateHw(Integer hwID, Integer teaID) throws Exception {
        response ret = new response();
        ret.setStatus(200);
        System.out.println(hwID);
        TotalInfo totalInfo = new TotalInfo();
        try{
            totalInfo.setCourseInfoList(getCourseInfoListByTeaID(teaID));
        }
        catch (Exception e){
            ret.setMsg(e.getMessage());
            ret.setStatus(400);
            return ret;
        }
        if(hwID.equals(0)){
            ret.setMsg("successful response");
            ret.setData(totalInfo);
            return ret;
        }
        else{
            try {
                totalInfo.setHwInfo(getHwInfoByHwID(hwID));
            }
            catch (Exception e){
                ret.setStatus(400);
                ret.setMsg(e.getMessage());
                return ret;
            }
            ret.setData(totalInfo);
        }
        return ret;
    }

    private Homework getFromHwInfo(HwInfo hwInfo){
        Homework homework = new Homework();
        System.out.println(hwInfo.getCourseId());
        homework.setCourse(courseDao.getByCourseID(hwInfo.getCourseId()).get());
        homework.setState(HwStateEnum.ASSIGNED);
        homework.setTitle(hwInfo.getTitle());
        homework.setTotals(hwInfo.getTotals());
        homework.setIsdelayed(hwInfo.isDelayed());
        homework.setIsrepeated(hwInfo.isRepeated());
        homework.setIstimed(hwInfo.isTimed());
        homework.setIsgrouped(hwInfo.isGrouped());
        homework.setResultafter(HwResultEnum.valueOf(hwInfo.getResultAfter()));
        homework.setDeadline(hwInfo.getDeadlineDate());
        homework.setAssignTime(hwInfo.getAssignDate());
        return homework;
    }

    public response resetByHwInfo(HwInfo hwInfo){
        response ret = new response();
        ret.setStatus(200);
        if(hwInfo.getID() != 0){
            homeWorkDao.deleteHwByID(hwInfo.getID());
        }
        Homework homework = getFromHwInfo(hwInfo);
        System.out.println(homework.getAssignTime());
        homeWorkDao.saveHw(homework);
        System.out.println(homework.getId());
        for(Integer i : hwInfo.getSubmitIdList()){
            Handson handson = new Handson();
            Optional<Student> studentOptional = studentDao.getByID(i);
            if(!studentOptional.isPresent()){
                ret.setStatus(400);
                ret.setMsg("invalid submitter id");
                return ret;
            }
            handson.setSubmitter(studentOptional.get());
            handson.setHomework(homework);
            handson.setIsGrouped(homework.isIsgrouped());
            handson.setState(HdStateEnum.UNSUBMITTED);
            handsonDao.saveHd(handson);
        }
        for(QuestionListTuple questionListTuple : hwInfo.getQuestionList()){
            Question question = questionListTuple.toQuestion();
            question.setHomework(homework);
            questionDao.saveQuestion(question);
        }
        ret.setMsg("suscessful response");
        return ret;
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
                }
                util.setRefAnswer(question.getQuestionContent().getRefAnswer());
                if(answer.getContent() != null)
                    util.setStuAnswer(answer.getContent().getAnswer());
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

            Handson handson = answer.getHandson();
            handson.setState(HdStateEnum.CORRECTED);

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
            handsonDao.saveWithoutAnswer(handson);
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

    public response postAnswer(PostAnswerUtilPack postAnswerUtilPack){
        response ret = new response();
        ret.setStatus(400);
        int hansonID = postAnswerUtilPack.getHandsonID();
        Optional<Handson> handsonOptional = handsonDao.getHdByID(hansonID);
        Handson handson;
        if(!handsonOptional.isPresent()){
            System.out.println(hansonID);
            ret.setMsg("invalid handson id");
            return ret;
        }
        handson = handsonOptional.get();
        handson.setState(HdStateEnum.SUBMITTED);
        PostAnswerUtil postAnswerUtil = postAnswerUtilPack.getAnswer();
        if(postAnswerUtil.getSimpleChoiceAnswer() != null){
            for(PostAnswerItem item : postAnswerUtil.getSimpleChoiceAnswer()){
                Answer answer = new Answer();
                Optional<Question> questionOptional = questionDao.getByQuestionID(item.getID());
                if(questionOptional.isPresent()){
                    answer.setQuestion(questionOptional.get());
                    answer.setHandson(handson);
                    AnswerContent answerContent = new AnswerContent();
                    answerContent.setType("ONE_CHOICE");
                    System.out.println(item.getOption());
                    List<OptionItem> optionItems = JSON.parseArray(item.getOption().toString(), OptionItem.class) ;
                    List<String> to_contact = new ArrayList<>();
                    for (OptionItem o : optionItems){
                        to_contact.add(o.getOption());
                    }
                    answerContent.setAnswer(String.join(",", to_contact));
                    answerContent.setHwID(handson.getHomework().getId());
                    answer.setContent(answerContent);
                    answerDao.saveAnswer(answer);
                }
                else {
                    ret.setMsg("invalid question id");
                    return ret;
                }
            }
        }
        if(postAnswerUtil.getChoiceAnswer() != null){
            for(PostAnswerItem item : postAnswerUtil.getChoiceAnswer()){
                Answer answer = new Answer();
                Optional<Question> questionOptional = questionDao.getByQuestionID(item.getID());
                if(questionOptional.isPresent()){
                    answer.setQuestion(questionOptional.get());
                    answer.setHandson(handson);
                    AnswerContent answerContent = new AnswerContent();
                    answerContent.setType("MULTIPLE_CHOICE");
                    List<OptionItem> optionItems = JSON.parseArray(item.getOption().toString(), OptionItem.class) ;
                    List<String> to_contact = new ArrayList<>();
                    for (OptionItem o : optionItems){
                        to_contact.add(o.getOption());
                    }
                    answerContent.setAnswer(String.join(",", to_contact));
                    answerContent.setHwID(handson.getHomework().getId());
                    answer.setContent(answerContent);
                    answerDao.saveAnswer(answer);
                }
                else {
                    ret.setMsg("invalid question id");
                    return ret;
                }
            }
        }
        if(postAnswerUtil.getSubjectiveAnswer() != null){
            for(PostAnswerItem item : postAnswerUtil.getSubjectiveAnswer()){
                Answer answer = new Answer();
                Optional<Question> questionOptional = questionDao.getByQuestionID(item.getID());
                if(questionOptional.isPresent()){
                    answer.setQuestion(questionOptional.get());
                    answer.setHandson(handson);
                    AnswerContent answerContent = new AnswerContent();
                    answerContent.setType("SUBJECTIVE");
                    answerContent.setAnswer(item.getContent());
                    answerContent.setImage(item.getImage());
                    answerContent.setHwID(handson.getHomework().getId());
                    answer.setContent(answerContent);
                    answerDao.saveAnswer(answer);
                }
                else {
                    ret.setMsg("invalid question id");
                    return ret;
                }
            }
        }
        if(postAnswerUtil.getTorFAnswer() != null){
            for(PostAnswerItem item : postAnswerUtil.getTorFAnswer()){
                Answer answer = new Answer();
                Optional<Question> questionOptional = questionDao.getByQuestionID(item.getID());
                if(questionOptional.isPresent()){
                    answer.setQuestion(questionOptional.get());
                    answer.setHandson(handson);
                    AnswerContent answerContent = new AnswerContent();
                    answerContent.setType("TRUE_OR_FALSE");
                    if((Boolean) item.getOption()){
                        answerContent.setAnswer("true");
                    }
                    else{
                        answerContent.setAnswer("false");
                    }
                    answerContent.setHwID(handson.getHomework().getId());
                    answer.setContent(answerContent);
                    answerDao.saveAnswer(answer);
                }
                else {
                    ret.setMsg("invalid question id");
                    return ret;
                }
            }
        }
        handsonDao.saveHd(handson);
        ret.setStatus(200);
        ret.setMsg("sucessful response");
        return ret;
    }

    public response getQuestions(int hdID){
        response ret = new response();
        ret.setStatus(400);
        Optional<Handson> handsonOptional = handsonDao.getHdByID(hdID);
        if(!handsonOptional.isPresent()){
            ret.setMsg("invalid handson id");
            return ret;
        }
        Handson handson = handsonOptional.get();
        List<Question> questionList = handson.getHomework().getQuestionList();
        List<QuestionUtil> questionUtilList = new ArrayList<>();
        for(Question item : questionList){
            Question question = questionDao.getByQuestionID(item.getId()).get();
            QuestionUtil questionUtil = new QuestionUtil();
            questionUtil.setOptions(question.getQuestionContent().getOptions());
            questionUtil.setStem(question.getQuestionContent().getStem());
            questionUtil.setID(question.getId());
            questionUtil.setImage(question.getQuestionContent().getImage());
            questionUtil.setType(question.getQuestionContent().getType());
            questionUtilList.add(questionUtil);
        }
        QuestionRet questionRet = new QuestionRet();
        questionRet.setHandsonID(hdID);
        questionRet.setQuestionList(questionUtilList);
        ret.setStatus(200);
        ret.setMsg("successful response");
        ret.setData(questionRet);
        return ret;
    }

    public response getHwList(int stuID) throws ParseException {
        response ret = new response();
        ret.setStatus(400);
        Optional<Student> studentOptional = studentDao.getByID(stuID);
        if(!studentOptional.isPresent()){
            ret.setMsg("invalid student id");
            return ret;
        }
        Student student = studentOptional.get();
        List<Handson> handsonList = student.getHandsonList();
        List<HomeworkUtil> homeworkUtilList = new ArrayList<>();
        for(Handson item : handsonList){
            HomeworkUtil homeworkUtil = new HomeworkUtil();
            homeworkUtil.setID(item.getId());
            homeworkUtil.setTitle(item.getHomework().getTitle());
            homeworkUtil.setPost(item.getHomework().getAssignTime());
            homeworkUtil.setDdl(item.getHomework().getDeadline());
            if(item.getState() == HdStateEnum.UNSUBMITTED){
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                Date date = new Date();
                if(sdf.parse(item.getHomework().getDeadline()).before(date)){
                    item.setState(HdStateEnum.LATE);
                    handsonDao.saveHd(item);
                }
            }

            homeworkUtil.setState(item.getState().toString());
            homeworkUtilList.add(homeworkUtil);
        }
        ret.setStatus(200);
        ret.setData(homeworkUtilList);
        return ret;
    }

    public response courseHwList(int courseID, String role, Integer ID) throws ParseException {
        response ret = new response();
        ret.setStatus(400);
        Optional<Course> courseOptional = courseDao.getByCourseID(courseID);
        if(!courseOptional.isPresent()){
            ret.setMsg("invalid course id");
            return ret;
        }
        Course course = courseOptional.get();
        if(role.equals("ROLE_STUDENT")){
            List<Homework> coursehomeworkList = course.getHomeworkList();
            List<HomeworkUtil> homeworkUtilList = new ArrayList<>();
            for(Homework item : coursehomeworkList){
                Integer handsonID = handsonDao.getHdIDByStuAndHw(item.getId(), ID);
                if(handsonID != null){
                    Handson handson = handsonDao.getHdByID(handsonID).get();

                    HomeworkUtil homeworkUtil = new HomeworkUtil();
                    homeworkUtil.setTitle(item.getTitle());
                    homeworkUtil.setDdl(item.getDeadline());
                    homeworkUtil.setPost(item.getAssignTime());
                    homeworkUtil.setID(handson.getId());
                    if(handson.getState() == HdStateEnum.UNSUBMITTED){
                        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                        Date date = new Date();
                        if(sdf.parse(item.getDeadline()).before(date)){
                            handson.setState(HdStateEnum.LATE);
                            handsonDao.saveHd(handson);
                        }
                    }
                    homeworkUtil.setState(handson.getState().toString());

                    homeworkUtilList.add(homeworkUtil);
                }
            }
            ret.setData(homeworkUtilList);
            ret.setMsg("successful response");
        }
        if(role.equals("ROLE_TEACHER")){
            List<Homework> coursehomeworkList = course.getHomeworkList();
            List<HomeworkUtil> homeworkUtilList = new ArrayList<>();
            for(Homework item : coursehomeworkList){
                HomeworkUtil homeworkUtil = new HomeworkUtil();
                homeworkUtil.setTitle(item.getTitle());
                homeworkUtil.setDdl(item.getDeadline());
                homeworkUtil.setPost(item.getAssignTime());
                homeworkUtil.setID(item.getId());
                homeworkUtil.setState(item.getState().toString());

                List<Handson> handsonList = item.getHandsonList();
                int f = 0;
                int u = 0;
                int l = 0;
                int c = 0;
                boolean flag = false;
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                Date date = new Date();
                if(sdf.parse(item.getDeadline()).before(date)){
                    flag = true;
                }
                for(Handson handson : handsonList){
                    if(handson.getState() == HdStateEnum.UNSUBMITTED){
                        if(flag){
                            handson.setState(HdStateEnum.LATE);
                            handsonDao.saveHd(handson);
                            l++;
                        }
                        else {
                            u++;
                        }
                    }
                    if(handson.getState() == HdStateEnum.SUBMITTED){
                        f++;
                    }
                    if(handson.getState() == HdStateEnum.CORRECTED){
                        c++;
                    }
                    if(handson.getState() == HdStateEnum.LATE){
                        l++;
                    }
                }
                homeworkUtil.setCorrect(c);
                homeworkUtil.setFinished(f);
                homeworkUtil.setUnfinished(u);
                homeworkUtil.setLate(l);

                homeworkUtilList.add(homeworkUtil);
            }
            ret.setData(homeworkUtilList);
            ret.setMsg("sucessful response");
        }
        ret.setStatus(200);
        return ret;
    }

    public response teaGetQuestion(int TeaID) throws ParseException {
        response ret = new response();
        ret.setStatus(400);
        Optional<Teacher> teacherOptional = teacherDao.getTeaByID(TeaID);
        if(!teacherOptional.isPresent()){
            ret.setMsg("invalid teacher id");
            return ret;
        }
        Teacher teacher = teacherOptional.get();
        List<Course> courseList = teacher.getCourseList();
        List<HomeworkUtil> homeworkUtilList = new ArrayList<>();
        for(Course course: courseList){
            List<Homework> coursehomeworkList = course.getHomeworkList();
            for(Homework item : coursehomeworkList){
                HomeworkUtil homeworkUtil = new HomeworkUtil();
                homeworkUtil.setTitle(item.getTitle());
                homeworkUtil.setDdl(item.getDeadline());
                homeworkUtil.setPost(item.getAssignTime());
                homeworkUtil.setID(item.getId());
                homeworkUtil.setState(item.getState().toString());

                List<Handson> handsonList = item.getHandsonList();
                int f = 0;
                int u = 0;
                int l = 0;
                int c = 0;
                boolean flag = false;
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                Date date = new Date();
                if(sdf.parse(item.getDeadline()).before(date)){
                    flag = true;
                }
                for(Handson handson : handsonList){
                    if(handson.getState() == HdStateEnum.UNSUBMITTED){
                        if(flag){
                            handson.setState(HdStateEnum.LATE);
                            handsonDao.saveHd(handson);
                            l++;
                        }
                        else {
                            u++;
                        }
                    }
                    if(handson.getState() == HdStateEnum.SUBMITTED){
                        f++;
                    }
                    if(handson.getState() == HdStateEnum.CORRECTED){
                        c++;
                    }
                    if(handson.getState() == HdStateEnum.LATE){
                        l++;
                    }
                }
                homeworkUtil.setCorrect(c);
                homeworkUtil.setFinished(f);
                homeworkUtil.setUnfinished(u);
                homeworkUtil.setLate(l);

                homeworkUtilList.add(homeworkUtil);
            }
            ret.setData(homeworkUtilList);
            ret.setMsg("sucessful response");
        }
        ret.setStatus(200);
        ret.setData(homeworkUtilList);
        return ret;
    }
}
