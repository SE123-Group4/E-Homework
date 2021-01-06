package com.example.register.Repository;

import com.example.register.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<Users,Integer> {
    @Query("from Users where email =:email")
    Users getByEmail(String email);

    Optional<Users> findByEmail(String email);
    Optional<Users> findByPhone(String phone);

    @Query("from Users where phone =:phone")
    Users getByPhone(String phone);

    @Transactional
    @Modifying
    @Query(value="insert into users(phone, password, state) values (?,?,1)",nativeQuery=true)
    int insertUserByPhone(String phone,String pwd);

    @Transactional
    @Modifying
    @Query(value="insert into users(email, password, state) values (?,?,1)",nativeQuery=true)
    int insertUserByEmail(String email,String pwd);

//    @Transactional
//    @Modifying
//    @Query(value="update Users ")
//    void updateUserByEmail(String email, String pwd);

    @Transactional
    @Modifying
    @Query(value = "update Users set state=:state where ID=:ID")
    void updateState(int ID, String state);

    @Transactional
    @Modifying
    @Query(value ="update Users set email=:e where ID=:ID")
    int setEmail(String e,int ID);

    @Transactional
    @Modifying
    @Query(value ="update Users set phone=:p where ID=:ID")
    int setPhone(String p,int ID);

    @Transactional
    @Modifying
    @Query(value = "update Users set password=:pwd where ID=:id")
    int setPassword(String pwd,int id);
}
