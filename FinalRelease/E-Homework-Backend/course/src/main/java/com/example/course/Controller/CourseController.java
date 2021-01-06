package com.example.course.Controller;

import com.example.course.Entity.Course;
import com.example.course.ReturnInfo.ReturnCourse;
import com.example.course.ReturnInfo.ReturnCourseList;
import com.example.course.ReturnInfo.ReturnMsg;
import com.example.course.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*",maxAge = 3600)
public class CourseController {
    @Autowired
    private CourseService courseService;

    @RequestMapping(path = "/teacher_courses")
    @PreAuthorize("hasAnyAuthority('ROLE_TEACHER')")
    public List<Course> getCoursesByTeacherId(@RequestBody Map<String,Integer> params){
        int id= params.get("id");
        System.out.println(id);
        return courseService.getCoursesByTeacherId(id);
    }

    @RequestMapping(path = "/student_courses")
    @PreAuthorize("hasAnyAuthority('ROLE_STUDENT')")
    public List<Course> getCoursesByStudentId(@RequestBody Map<String,Integer> params){
        int id= params.get("id");
        System.out.println(id);
        return courseService.getCoursesByStudentId(id);
    }

    @RequestMapping(path = "/course")
    public ReturnCourse getCourseById(@RequestBody Map<String,Integer> params){
        int id= params.get("id");
        System.out.println(id);
        return courseService.getCourseById(id);
    }

    @RequestMapping(path = "/add_course")
    public ReturnMsg addCourse(@RequestBody Map<String,String> params){
        System.out.println(params);
        int teacher = Integer.parseInt(params.get("teacher"));
        String introduction=params.get("introduction");
        String name=params.get("name");
        String book=params.get("book");
        Timestamp startTime=Timestamp.valueOf(params.get("startTime"));
        Timestamp endTime=Timestamp.valueOf(params.get("endTime"));
        int state = Integer.parseInt(params.get("state"));
        return courseService.insertCourse(teacher,introduction,name,book,startTime,endTime,state);
    }

    @RequestMapping(path = "/addTakes")
    public ReturnMsg insertTakes(@RequestBody JSONObject params){
        int courseID = Integer.parseInt(params.get("courseID").toString());
        int schoolID = Integer.parseInt(params.get("schoolID").toString());
        JSONArray students= params.getJSONArray("students");
        List<String> student_id = new ArrayList<>();
        for (Object student : students) {
            student_id.add(JSONObject.parseObject(student.toString(), String.class));
        }
        return courseService.insertTakes(schoolID,student_id,courseID);
    }

    @RequestMapping(path = "/addTakesByExcel")
    public ReturnMsg insertTakesByExcel(@RequestParam("file") MultipartFile file,@RequestParam("school") int schoolID,@RequestParam("course") int courseID) throws Exception {
        List<String> student_id = importExcelService.importExcelWithSimple(file);
        return courseService.insertTakes(schoolID,student_id,courseID);
    }

    @RequestMapping(path = "/insertGroup")
    public ReturnMsg insertGroups(@RequestBody JSONObject params){
        int courseID = Integer.parseInt(params.get("courseID").toString());
        String name = params.get("name").toString();
        JSONArray members= params.getJSONArray("members");
        List<Integer> student_id = new ArrayList<>();
        for (Object member : members) {
            student_id.add(JSONObject.parseObject(member.toString(), Integer.class));
        }
        return courseService.insertGroup(courseID,name,student_id);
    }

    @RequestMapping(path = "/deleteCourse")
    public ReturnMsg deleteCourseById(@RequestBody Map<String,Integer> params){
        int id=params.get("id");
        return courseService.deleteCourseById(id);
    }

    @RequestMapping(path = "/updateCourse")
    ReturnMsg updateCourseById(@RequestBody Map<String,String> params){
        String name=params.get("name");
        String introduction=params.get("introduction");
        String book=params.get("book");
        int id=Integer.parseInt(params.get("id"));
        return courseService.updateCourseById(name,introduction,book,id);
    }

    @RequestMapping(path = "/deleteTake")
    public ReturnMsg deleteTakesById(@RequestBody Map<String,Integer> params){
        int student =params.get("student");
        int courseID=params.get("course");
        return courseService.deleteTakesById(student,courseID);
    }
}
