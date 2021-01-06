package org.cloudhomeworkplatform.cphregister.DaoImpl;

import org.cloudhomeworkplatform.cphregister.Dao.UsersDao;
import org.cloudhomeworkplatform.cphregister.Entity.Users;
import org.cloudhomeworkplatform.cphregister.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UsersDaoImpl implements UsersDao {
    @Autowired
    private UsersRepository usersRepository;

    @Override
    public Users getByEmail(String email){
        return usersRepository.getByEmail(email);
    }

    @Override
    public Users getByPhone(String phone){
        return usersRepository.getByPhone(phone);
    }

    @Override
    public int insertUserByPhone(String phone,String pwd){
        return usersRepository.insertUserByPhone(phone, pwd);
    }

    @Override
    public int insertUserByEmail(String email,String pwd){
        return usersRepository.insertUserByEmail(email, pwd);
    }

    @Override
    public int setEmail(String e,int ID){
        return usersRepository.setEmail(e, ID);
    }

    @Override
    public int setPhone(String p,int ID){
        return usersRepository.setPhone(p, ID);
    }

    @Override
    public int setPassword(String pwd,int id){
        return usersRepository.setPassword(pwd, id);
    }
}
