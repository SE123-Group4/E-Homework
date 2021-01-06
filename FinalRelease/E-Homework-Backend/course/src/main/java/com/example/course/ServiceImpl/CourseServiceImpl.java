package com.example.course.ServiceImpl;

import com.example.course.Dao.*;
import com.example.course.Entity.Course;
import com.example.course.Entity.Takes;
import com.example.course.ReturnInfo.ReturnCourse;
import com.example.course.ReturnInfo.ReturnCourseList;
import com.example.course.ReturnInfo.ReturnMsg;
import com.example.course.ReturnInfo.ReturnStudent;
import com.example.course.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import static com.example.course.Constant.ReturnMessage.Msg0;
import static com.example.course.Constant.ReturnMessage.Msg1;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    private TakesDao takesDao;

    @Autowired
    private CourseDao courseDao;

    @Autowired
    private TeacherDao teacherDao;

    @Autowired
    private StudentDao studentDao;

    @Autowired
    private CoursegroupDao coursegroupDao;

    @Autowired
    private  GroupmemberDao groupmemberDao;

    @Override
    public List<Course> getCoursesByStudentId(int id){
        List<Takes> takeList=takesDao.getByIdStudent(id);
        List<Course> list=new ArrayList<>();
        for (Takes takes : takeList) {
            Course course = courseDao.getByID(takes.getId().getCourseID());
            list.add(course);
        }
        return list;
    }

    @Override
    public List<Course> getCoursesByTeacherId(int id){
        return courseDao.getByTeacher(id);
    }

    @Override
    public ReturnCourse getCourseById(int id){
        ReturnCourse returnCourse=new ReturnCourse();
        Course course=courseDao.getByID(id);
        returnCourse.setId(course.getId());
        returnCourse.setBook(course.getBook());
        returnCourse.setIntroduction(course.getIntroduction());
        returnCourse.setName(course.getName());
        returnCourse.setState(course.getState());
        returnCourse.setStartTime(course.getStartTime());
        returnCourse.setEndTime(course.getEndTime());
        returnCourse.setTeacher(teacherDao.getNameByID(course.getTeacher()));
        return returnCourse;
    }

    @Override
    public ReturnMsg insertCourse(int teacher, String introduction, String name, String book, Timestamp startTime, Timestamp endTime, int state){
        int ret=courseDao.insertCourse(teacher, introduction, name, book, startTime, endTime, state);
        ReturnMsg returnMsg = new ReturnMsg();
        if (ret==1){
            returnMsg.setMsg(Msg1);
            returnMsg.setStatus(200);
        }
        else {
            returnMsg.setMsg(Msg0);
            returnMsg.setStatus(400);
        }
        return returnMsg;
    }

    @Override
    public ReturnMsg insertTakes(int schoolID,List<String> students,int courseID){
        ReturnMsg returnMsg=new ReturnMsg();
        for (String student : students) {
            Integer sID = studentDao.getByStuNumberAndSchoolID(student, schoolID);
            takesDao.insertTakes(sID, courseID);
        }
        returnMsg.setMsg(Msg1);
        returnMsg.setStatus(200);
        return returnMsg;
    }

    @Override
    public ReturnMsg insertGroup(int courseID,String name,List<Integer> members){
        ReturnMsg returnMsg=new ReturnMsg();
        if(coursegroupDao.insertCourseGroup(courseID,name)==1){
            int id=coursegroupDao.getByCourseIDAndName(courseID,name);
            for (Integer member : members){
                groupmemberDao.insertGroupMember(id,member);
            }
            returnMsg.setMsg(Msg1);
            returnMsg.setStatus(200);
            return returnMsg;
        }
        returnMsg.setMsg(Msg0);
        returnMsg.setStatus(400);
        return returnMsg;
    }

    @Override
    public ReturnMsg  deleteTakesById(int student,int courseID){
        ReturnMsg returnMsg=new ReturnMsg();
        int i=takesDao.deleteTakesById(student, courseID);
        if(i==1){
            returnMsg.setMsg(Msg1);
            returnMsg.setStatus(200);
        }else {
            returnMsg.setMsg(Msg0);
            returnMsg.setStatus(400);
        }
        return returnMsg;
    }

    @Override
    public ReturnMsg deleteCourseById(int id) {
        ReturnMsg returnMsg=new ReturnMsg();
        int i=courseDao.deleteCourseById(id);
        if(i==1){
            returnMsg.setMsg(Msg1);
            returnMsg.setStatus(200);
        }
        else {
            returnMsg.setMsg(Msg0);
            returnMsg.setStatus(400);
        }
        return returnMsg;
    }

    @Override
    public ReturnMsg updateCourseById(String name,String introduction,String book,int id){
        ReturnMsg returnMsg=new ReturnMsg();
        int i=courseDao.updateCourseById(name, introduction, book, id);
        if(i==1){
            returnMsg.setMsg(Msg1);
            returnMsg.setStatus(200);
        }
        else {
            returnMsg.setMsg(Msg0);
            returnMsg.setStatus(400);
        }
        return returnMsg;
    }

    @Override
    public List<ReturnStudent> getStudentsById(int id){
        List<Takes> takesList=takesDao.getByIdCourseID(id);
        List<ReturnStudent> studentList=new ArrayList<>();
        for (Takes takes:takesList){
            String name=studentDao.getNameByID(takes.getId().getStudent());
            ReturnStudent returnStudent=new ReturnStudent();
            returnStudent.setId(takes.getId().getStudent());
            returnStudent.setName(name);
            studentList.add(returnStudent);
        }
        return studentList;
    }

    @Override
    public List<ReturnStudent> getByIdAndName(int cid,String search){
        List<Takes> takesList=takesDao.getByIdCourseID(cid);
        List<ReturnStudent> studentList=new ArrayList<>();
        for (Takes takes:takesList){
            String name=studentDao.getNameByID(takes.getId().getStudent());
            if(name.indexOf(search,0) !=-1)
            {
                ReturnStudent returnStudent=new ReturnStudent();
                returnStudent.setId(takes.getId().getStudent());
                returnStudent.setName(name);
                studentList.add(returnStudent);
            }
        }
        return studentList;
    }
}
