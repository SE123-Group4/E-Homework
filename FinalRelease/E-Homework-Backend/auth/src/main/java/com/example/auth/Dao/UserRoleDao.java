package com.example.auth.Dao;

import com.example.auth.Constant.Role;
import com.example.auth.Entity.UserRole;

import java.util.Optional;

public interface UserRoleDao {
    Optional<UserRole> findByUserID(Integer userID);
    Optional<UserRole> findByUserIDAndRole(int ID, Role role);
}
