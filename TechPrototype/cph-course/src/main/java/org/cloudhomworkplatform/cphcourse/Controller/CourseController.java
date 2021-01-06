package org.cloudhomworkplatform.cphcourse.Controller;

import org.cloudhomworkplatform.cphcourse.Entity.Course;
import org.cloudhomworkplatform.cphcourse.ReturnInfo.ReturnCourse;
import org.cloudhomworkplatform.cphcourse.ReturnInfo.ReturnMsg;
import org.cloudhomworkplatform.cphcourse.Service.CourseService;
import org.cloudhomworkplatform.cphcourse.Service.ImportExcelService;
import org.springframework.beans.factory.annotation.Autowired;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*",maxAge = 3600)
public class CourseController {
    @Autowired
    private CourseService courseService;
    @Autowired
    private ImportExcelService importExcelService;

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

    @RequestMapping(path = "/deleteTake")
    public ReturnMsg deleteTakesById(@RequestBody Map<String,Integer> params){
        int student =params.get("student");
        int courseID=params.get("course");
        return courseService.deleteTakesById(student,courseID);
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
}
