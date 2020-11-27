package com.example.register.Dao;

import com.example.register.Entity.Userrole;

public interface UserroleDao {
    int insertUserRole(int role,int uID,int rID);

    Userrole getByRoleAndRoleID(int role, int roleID);
}
