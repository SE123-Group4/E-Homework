package org.cloudhomworkplatform.cphcourse.DaoImpl;

import org.cloudhomworkplatform.cphcourse.Dao.StudentDao;
import org.cloudhomworkplatform.cphcourse.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class StudentDaoImpl implements StudentDao {
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public String getNameByID(int id){
        return studentRepository.getNameByID(id);
    }

    @Override
    public int getByStuNumberAndSchoolID(String sNum,int sID){
        return studentRepository.getByStuNumberAndSchoolID(sNum, sID);
    }
}
