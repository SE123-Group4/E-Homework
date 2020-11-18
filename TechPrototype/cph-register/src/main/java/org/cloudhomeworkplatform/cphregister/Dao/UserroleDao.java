package org.cloudhomeworkplatform.cphregister.Dao;

import org.cloudhomeworkplatform.cphregister.Entity.Userrole;

public interface UserroleDao {
    int insertUserRole(int role,int uID,int rID);

    Userrole getByRoleAndRoleID(int role, int roleID);
}
