package org.cloudhomeworkplatform.cphregister.DaoImpl;

import org.cloudhomeworkplatform.cphregister.Dao.UserroleDao;
import org.cloudhomeworkplatform.cphregister.Entity.Userrole;
import org.cloudhomeworkplatform.cphregister.Repository.UserroleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserroleDaoImpl implements UserroleDao {
    @Autowired
    private UserroleRepository userroleRepository;

    @Override
    public int insertUserRole(int role,int uID,int rID){
        return userroleRepository.insertUserRole(role, uID, rID);
    }

    @Override
    public Userrole getByRoleAndRoleID(int role, int roleID){
        return userroleRepository.getByRoleAndRoleID(role, roleID);
    }
}
