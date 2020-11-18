package com.example.register.DaoImpl;

import com.example.register.Dao.SchoolDao;
import com.example.register.Entity.School;
import com.example.register.Repository.SchoolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SchoolDaoImpl implements SchoolDao {
    @Autowired
    private SchoolRepository schoolRepository;

    @Override
    public int getByName(String name){
        return schoolRepository.getByName(name).getID();
    }

    @Override
    public List<School> getSchools(){
        return schoolRepository.findAll();
    }
}
