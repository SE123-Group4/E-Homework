package com.example.course.DaoImpl;

import com.example.course.Dao.CourseDao;
import com.example.course.Entity.Course;
import com.example.course.Repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
public class CourseDaoImpl implements CourseDao {
    @Autowired
    private CourseRepository courseRepository;

    @Override
    public Course getByID(int id){
        return courseRepository.getByID(id);
    }

    @Override
    public List<Course> getByTeacher(int teacher){
        return courseRepository.getByTeacher(teacher);
    }

    @Override
    public int insertCourse(int teacher, String introduction, String name, String book, Timestamp startTime, Timestamp endTime, int state){
        return courseRepository.insertCourse(teacher, introduction, name, book, startTime, endTime, state);
    }

    @Override
    public int setState(int id,int s){
        return courseRepository.setState(id, s);
    }

    @Override
    public int deleteCourseById(int id){
        return courseRepository.deleteCourseById(id);
    }

    @Override
    public int updateCourseById(String name,String introduction,String book,int id){
        return courseRepository.updateCourseById(name, introduction, book, id);
    }

    @Override
    public int updateCourseTakes(int id,int takes){
        return courseRepository.updateCourseTakes(id, takes);
    }
}
