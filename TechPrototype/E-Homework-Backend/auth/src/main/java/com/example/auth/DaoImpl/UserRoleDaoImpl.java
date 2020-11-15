package com.example.auth.DaoImpl;

import com.example.auth.Dao.UserRoleDao;
import com.example.auth.Entity.UserRole;
import com.example.auth.Repository.UserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class UserRoleDaoImpl implements UserRoleDao {
    @Autowired
    private UserRoleRepository userRoleRepository;

    @Override
    public Optional<UserRole> findByID(Integer ID) {
        return userRoleRepository.findByID(ID);
    }
}
