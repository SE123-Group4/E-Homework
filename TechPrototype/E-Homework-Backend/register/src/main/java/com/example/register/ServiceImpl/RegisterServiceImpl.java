package com.example.register.ServiceImpl;

import com.example.register.Dao.*;
import com.example.register.Entity.School;
import com.example.register.Entity.Student;
import com.example.register.Entity.Teacher;
import com.example.register.Entity.Users;
import com.example.register.ReturnInfo.ReturnMessage;
import com.example.register.Service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.example.register.Constant.ReturnMsg.*;

@Service
public class RegisterServiceImpl implements RegisterService {
    @Autowired
    private UsersDao usersDao;
    @Autowired
    private UserroleDao userroleDao;
    @Autowired
    private StudentDao studentDao;
    @Autowired
    private TeacherDao teacherDao;
    @Autowired
    private SchoolDao schoolDao;

    @Override
    public ReturnMessage checkAccount(String account, int type){
        Users users;
        ReturnMessage returnMessage=new ReturnMessage();
        if (type==1){
            users=usersDao.getByEmail(account);
            if (users!=null){
                returnMessage.setMsg(registerMsg2);
                return returnMessage;
            }
        }
        else {
            users=usersDao.getByPhone(account);
            if (users!=null){
                returnMessage.setMsg(registerMsg2);
                return returnMessage;
            }
        }
        returnMessage.setMsg(Msg1);
        return returnMessage;
    }

    @Override
    public List<School> getSchools(){
        return schoolDao.getSchools();
    }

    @Override
    public ReturnMessage register(String account,String pwd,String name,int school,String userNumber,int identity){
        ReturnMessage returnMessage=new ReturnMessage();
        //检查该账户是否注册过
        Users users=usersDao.getByEmail(account);
        //假设注册者为学生
        if (identity==0){
            //判断学生是否在库中
            Student student=studentDao.getStudentByNameAndSchoolIDAndStuNumber(name,school,userNumber);
            //若不在库中，返回错误
            if (student==null){
                returnMessage.setMsg(registerMsg0);
            }
            //若在库中
            else {
                //判断该学生是否在userrole中注册过，若注册过，返回已注册
                if(userroleDao.getByRoleAndRoleID(1,student.getID())!=null){
                    returnMessage.setMsg(registerMsg2);
                }
                //该学生没注册过
                else {
                    //若该账户没注册过，插入新user
                    if(users==null){
                        usersDao.insertUserByEmail(account,pwd);
                        users=usersDao.getByEmail(account);
                    }
                    //插入新userRole，返回成功
                    userroleDao.insertUserRole(1,users.getID(),student.getID());
                    returnMessage.setMsg(Msg1);
                }
            }
        }
        //假设注册者为老师，过程同上
        else {
            Teacher teacher=teacherDao.getByNameAndSchoolIDAndTeaNumber(name,school,userNumber);
            if(teacher==null){
                returnMessage.setMsg(registerMsg0);
            }
            else {
                if(userroleDao.getByRoleAndRoleID(2,teacher.getID())!=null){
                    returnMessage.setMsg(registerMsg2);
                }
                else {
                    if(users==null){
                        usersDao.insertUserByEmail(account,pwd);
                        users=usersDao.getByEmail(account);
                    }
                    userroleDao.insertUserRole(2, users.getID(), teacher.getID());
                    returnMessage.setMsg(Msg1);
                }
            }
        }
        return returnMessage;
    }
}
