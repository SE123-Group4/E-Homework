package com.example.register.Dao;

import com.example.register.Entity.Userrole;

public interface UserroleDao {
    int insertUserRole(String role,int uID,int rID);

    Userrole getByRoleAndRoleID(String role, int roleID);
}
