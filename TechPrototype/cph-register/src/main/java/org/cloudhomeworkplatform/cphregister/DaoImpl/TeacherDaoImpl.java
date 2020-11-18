package org.cloudhomeworkplatform.cphregister.DaoImpl;

import org.cloudhomeworkplatform.cphregister.Dao.TeacherDao;
import org.cloudhomeworkplatform.cphregister.Entity.Teacher;
import org.cloudhomeworkplatform.cphregister.Repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TeacherDaoImpl implements TeacherDao {
    @Autowired
    private TeacherRepository teacherRepository;

    @Override
    public Teacher getByNameAndSchoolIDAndTeaNumber(String name, int sID, String tNum){
        return teacherRepository.getByNameAndSchoolIDAndTeaNumber(name, sID, tNum);
    }

    @Override
    public Teacher getByID(int id){
        return teacherRepository.getByID(id);
    }
}
