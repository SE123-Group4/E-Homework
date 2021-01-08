package com.example.register.Repository;

import com.example.register.Entity.Userrole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface UserroleRepository extends JpaRepository<Userrole,Integer> {
    @Transactional
    @Modifying
    @Query(value="insert into userrole(role,userID,roleID) values (?,?,?)",nativeQuery=true)
    int insertUserRole(String role,int uID,int rID);

    @Query("from Userrole where role=:role and roleID=:roleID")
    Userrole getByRoleAndRoleID(String role,int roleID);
}
