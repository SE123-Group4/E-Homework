package org.cloudhomeworkplatform.cphregister.Service;

import org.cloudhomeworkplatform.cphregister.Entity.School;
import org.cloudhomeworkplatform.cphregister.ReturnInfo.ReturnMessage;

import java.util.List;

public interface RegisterService {
    ReturnMessage checkAccount(String account,int type);

    ReturnMessage register(String account,String pwd,String name,int school,String userNumber,int identity);

    List<School> getSchools();

    ReturnMessage setPassword(String pwd,int id);
}
