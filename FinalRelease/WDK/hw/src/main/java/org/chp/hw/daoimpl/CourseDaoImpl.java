package org.chp.hw.daoimpl;

import org.chp.hw.dao.CourseDao;
import org.chp.hw.entity.Course;
import org.chp.hw.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @ClassName: CourseDaoImpl
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 11:01 下午
 * @Version 1.0
 **/
@Repository
public class CourseDaoImpl implements CourseDao {
    @Autowired
    CourseRepository courseRepository;

    public Optional<Course> getByCourseID(int id){
        return courseRepository.findById(id);
    }

    public void saveCourse(Course course){
        courseRepository.saveAndFlush(course);
    }

    public void deleteCourseByID(int id){
        courseRepository.deleteById(id);
    }
}
