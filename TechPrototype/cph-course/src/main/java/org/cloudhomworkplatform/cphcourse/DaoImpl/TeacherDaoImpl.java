package org.cloudhomworkplatform.cphcourse.DaoImpl;

import org.cloudhomworkplatform.cphcourse.Dao.TeacherDao;
import org.cloudhomworkplatform.cphcourse.Repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TeacherDaoImpl implements TeacherDao {
    @Autowired
    private TeacherRepository teacherRepository;

    @Override
    public String getNameByID(int id){
        return teacherRepository.getNameByID(id);
    }
}
