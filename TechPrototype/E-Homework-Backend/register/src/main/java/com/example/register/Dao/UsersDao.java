package com.example.register.Dao;

import com.example.register.Entity.Users;

public interface UsersDao {
    Users getByEmail(String email);

    Users getByPhone(String phone);

    int insertUserByPhone(String phone,String pwd);

    int insertUserByEmail(String email,String pwd);

    int setEmail(String e,int ID);

    int setPhone(String p,int ID);
}
