package org.chp.hw.dao;

import org.chp.hw.entity.Course;

import java.util.Optional;

/**
 * @ClassName: CourseDao
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 11:00 下午
 * @Version 1.0
 **/
public interface CourseDao {
    Optional<Course> getByCourseID(int id);

    void saveCourse(Course course);

    void deleteCourseByID(int id);
}
