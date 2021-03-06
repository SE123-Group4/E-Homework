package org.cloudhomworkplatform.cphcourse.Repository;

import org.cloudhomworkplatform.cphcourse.Entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.List;

public interface CourseRepository extends JpaRepository<Course,Integer> {
    @Query("from Course where id=:id")
    Course getByID(int id);

    @Query("from Course where teacher=:teacher")
    List<Course> getByTeacher(int teacher);

    @Transactional
    @Modifying
    @Query(value="insert into course(teacher,introduction,name,book,startTime,endTime,state) values (?,?,?,?,?,?,?)",nativeQuery=true)
    int insertCourse(int teacher,String introduction,String name,String book,Timestamp startTime,Timestamp endTime,int state);

    @Transactional
    @Modifying
    @Query(value = "update Course set state=:s where id=:id")
    int setState(int id,int s);

    @Transactional
    @Modifying
    @Query(value = "delete from Course where id=:id")
    int deleteCourseById(int id);

    @Transactional
    @Modifying
    @Query(value = "update Course set name=:name,introduction=:introduction,book=:book where id=:id")
    int updateCourseById(String name,String introduction,String book,int id);
}
