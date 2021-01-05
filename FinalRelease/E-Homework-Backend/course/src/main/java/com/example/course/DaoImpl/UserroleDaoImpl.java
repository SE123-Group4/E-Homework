package com.example.course.DaoImpl;

import com.example.course.Dao.UserroleDao;
import com.example.course.Repository.UserroleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserroleDaoImpl implements UserroleDao {
    @Autowired
    private UserroleRepository userroleRepository;

    @Override
    public int getRoleIDByID(int id){
        return userroleRepository.getRoleIDByID(id);
    }
}
