package com.example.auth.Dao;

import com.example.auth.Entity.User;

import java.util.Optional;

public interface UserDao {
    Optional<User> findByEmail(String email);
    Optional<User> findByPhone(String phone);
}
