package com.example.auth.Dao;

import com.example.auth.Entity.UserRole;

import java.util.Optional;

public interface UserRoleDao {
    public Optional<UserRole> findByID(Integer ID);
}
