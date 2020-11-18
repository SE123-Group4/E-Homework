package org.cloudhomworkplatform.cphcourse.ServiceImpl;

import org.cloudhomworkplatform.cphcourse.Dao.CourseDao;
import org.cloudhomworkplatform.cphcourse.Dao.TakesDao;
import org.cloudhomworkplatform.cphcourse.Dao.TeacherDao;
import org.cloudhomworkplatform.cphcourse.Entity.Course;
import org.cloudhomworkplatform.cphcourse.Entity.Takes;
import org.cloudhomworkplatform.cphcourse.ReturnInfo.ReturnCourse;
import org.cloudhomworkplatform.cphcourse.ReturnInfo.ReturnCourseList;
import org.cloudhomworkplatform.cphcourse.ReturnInfo.ReturnMsg;
import org.cloudhomworkplatform.cphcourse.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import static org.cloudhomworkplatform.cphcourse.Constant.ReturnMessage.Msg0;
import static org.cloudhomworkplatform.cphcourse.Constant.ReturnMessage.Msg1;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    private TakesDao takesDao;

    @Autowired
    private CourseDao courseDao;

    @Autowired
    private TeacherDao teacherDao;

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
        }
        else {
            returnMsg.setMsg(Msg0);
        }
        return returnMsg;
    }
}
