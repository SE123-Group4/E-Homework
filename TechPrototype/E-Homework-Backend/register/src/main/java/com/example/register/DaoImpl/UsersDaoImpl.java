package com.example.register.DaoImpl;

import com.example.register.Dao.UsersDao;
import com.example.register.Entity.Users;
import com.example.register.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class UsersDaoImpl implements UsersDao {
    @Autowired
    private UsersRepository usersRepository;

    @Override
    public Optional<Users> getByEmail(String email){
        return usersRepository.findByEmail(email);
    }

    @Override
    public Optional<Users> getByPhone(String phone){
        return usersRepository.findByPhone(phone);
    }

    @Override
    public int insertUserByPhone(String phone,String pwd){
        return usersRepository.insertUserByPhone(phone, pwd);
    }

    @Override
    public void insertUserByEmail(String email, String pwd){
        usersRepository.insertUserByEmail(email, pwd);
    }

    @Override
    public void updateState(int ID, String state) {
        usersRepository.updateState(ID, state);
    }

    @Override
    public int setEmail(String e,int ID){
        return usersRepository.setEmail(e, ID);
    }

    @Override
    public int setPhone(String p,int ID){
        return usersRepository.setPhone(p, ID);
    }
}
