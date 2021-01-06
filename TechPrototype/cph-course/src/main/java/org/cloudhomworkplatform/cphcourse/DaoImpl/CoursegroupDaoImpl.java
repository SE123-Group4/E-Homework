package org.cloudhomworkplatform.cphcourse.DaoImpl;

import org.cloudhomworkplatform.cphcourse.Dao.CoursegroupDao;
import org.cloudhomworkplatform.cphcourse.Entity.Coursegroup;
import org.cloudhomworkplatform.cphcourse.Repository.CoursegroupRepository;
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

    @Override
    public int getByCourseIDAndName(int cID,String name){
        return coursegroupRepository.getByCourseIDAndName(cID, name);
    }
}
