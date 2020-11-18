package org.cloudhomworkplatform.cphcourse.DaoImpl;

import org.cloudhomworkplatform.cphcourse.Dao.TakesDao;
import org.cloudhomworkplatform.cphcourse.Entity.Takes;
import org.cloudhomworkplatform.cphcourse.Repository.TakesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TakesDaoImpl implements TakesDao {
    @Autowired
    private TakesRepository takesRepository;

    @Override
    public List<Takes> getByIdStudent(int student){
        return takesRepository.getByIdStudent(student);
    }

    @Override
    public List<Takes> getByIdCourseID(int course){
        return takesRepository.getByIdCourseID(course);
    }

    @Override
    public int insertTakes(int student,int courseID){
        return takesRepository.insertTakes(student, courseID);
    }
}
