package org.cloudhomworkplatform.cphcourse.Controller;

import org.cloudhomworkplatform.cphcourse.Entity.Course;
import org.cloudhomworkplatform.cphcourse.ReturnInfo.ReturnCourse;
import org.cloudhomworkplatform.cphcourse.ReturnInfo.ReturnCourseList;
import org.cloudhomworkplatform.cphcourse.ReturnInfo.ReturnMsg;
import org.cloudhomworkplatform.cphcourse.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*",maxAge = 3600)
public class CourseController {
    @Autowired
    private CourseService courseService;

    @RequestMapping(path = "/teachercourses")
    public List<Course> getCoursesByTeacherId(@RequestBody Map<String,Integer> params){
        int id= params.get("id");
        return courseService.getCoursesByTeacherId(id);
    }

    @RequestMapping(path = "/studentcourses")
    public List<Course> getCoursesByStudentId(@RequestBody Map<String,Integer> params){
        int id= params.get("id");
        return courseService.getCoursesByStudentId(id);
    }

    @RequestMapping(path = "/course")
    public ReturnCourse getCourseById(@RequestBody Map<String,Integer> params){
        int id= params.get("id");
        return courseService.getCourseById(id);
    }

    @RequestMapping(path = "/addCourse")
    public ReturnMsg addCourse(@RequestBody Map<String,String> params){
        int teacher = Integer.parseInt(params.get("teacher"));
        String introduction=params.get("introduction");
        String name=params.get("name");
        String book=params.get("book");
        Timestamp startTime=Timestamp.valueOf(params.get("startTime"));
        Timestamp endTime=Timestamp.valueOf(params.get("endTime"));
        int state = Integer.parseInt(params.get("state"));
        return courseService.insertCourse(teacher,introduction,name,book,startTime,endTime,state);
    }
}