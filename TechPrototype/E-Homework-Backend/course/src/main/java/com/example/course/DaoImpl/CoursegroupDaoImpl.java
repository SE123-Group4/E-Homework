package com.example.course.DaoImpl;

import com.example.course.Dao.CoursegroupDao;
import com.example.course.Entity.Coursegroup;
import com.example.course.Repository.CoursegroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CoursegroupDaoImpl implements CoursegroupDao {
    @Autowired
    private CoursegroupRepository coursegroupRepository;

    @Override
    public List<Coursegroup> getByCourseID(int cID){
        return coursegroupRepository.getByCourseID(cID);
    }

    @Override
    public Coursegroup getByID(int id){
        return coursegroupRepository.getByID(id);
    }

    @Override
    public int insertCourseGroup(int cID,String name){
        return coursegroupRepository.insertCourseGroup(cID, name);
    }
}
