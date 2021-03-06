package com.example.register.Service;

import com.example.register.Entity.School;
import com.example.register.ReturnInfo.ReturnMessage;

import java.util.List;

public interface RegisterService {
    ReturnMessage checkAccount(String account,int type);

    ReturnMessage register(String account,String pwd,String name,int school,String userNumber,int identity);

    List<School> getSchools();

    ReturnMessage setPassword(String pwd,int id);
}
