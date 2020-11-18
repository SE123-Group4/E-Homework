package org.cloudhomeworkplatform.cphregister.DaoImpl;

import org.cloudhomeworkplatform.cphregister.Dao.SchoolDao;
import org.cloudhomeworkplatform.cphregister.Entity.School;
import org.cloudhomeworkplatform.cphregister.Repository.SchoolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SchoolDaoImpl implements SchoolDao {
    @Autowired
    private SchoolRepository schoolRepository;

    @Override
    public int getByName(String name){
        return schoolRepository.getByName(name);
    }

    @Override
    public List<School> getSchools(){
        return schoolRepository.getSchools();
    }
}
