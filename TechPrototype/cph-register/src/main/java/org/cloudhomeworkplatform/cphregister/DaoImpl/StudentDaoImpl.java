package org.cloudhomeworkplatform.cphregister.DaoImpl;

import org.cloudhomeworkplatform.cphregister.Dao.StudentDao;
import org.cloudhomeworkplatform.cphregister.Entity.Student;
import org.cloudhomeworkplatform.cphregister.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class StudentDaoImpl implements StudentDao {
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student getStudentByNameAndSchoolIDAndStuNumber(String name, int sID, String sNum){
        return studentRepository.getStudentByNameAndSchoolIDAndStuNumber(name, sID, sNum);
    }

    @Override
    public Student getStudentByID(int id){
        return studentRepository.getStudentByID(id);
    }
}
