package com.example.register.Dao;

import com.example.register.Entity.Users;

import java.util.Optional;

public interface UsersDao {
    Optional<Users> getByEmail(String email);

    Optional<Users> getByPhone(String phone);

    int insertUserByPhone(String phone,String pwd);

    void insertUserByEmail(String email, String pwd);

    void updateUserByEmail(String email, String pwd);

    void updateState(int ID, String state);

    int setEmail(String e,int ID);

    int setPhone(String p,int ID);
}
