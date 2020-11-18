package org.cloudhomworkplatform.cphcourse.DaoImpl;

import org.cloudhomworkplatform.cphcourse.Dao.CourseDao;
import org.cloudhomworkplatform.cphcourse.Entity.Course;
import org.cloudhomworkplatform.cphcourse.Repository.CourseRepository;
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
}
