package org.cloudhomworkplatform.cphcourse.Dao;

import org.cloudhomworkplatform.cphcourse.Entity.Takes;

import java.util.List;

public interface TakesDao {
    List<Takes> getByIdStudent(int student);

    List<Takes> getByIdCourseID(int course);

    int insertTakes(int student,int courseID);

    int deleteTakesById(int student,int courseID);
}
