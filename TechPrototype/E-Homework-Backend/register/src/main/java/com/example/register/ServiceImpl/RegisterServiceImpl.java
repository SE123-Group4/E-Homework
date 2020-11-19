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
import java.util.Optional;

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
        Optional<Users> users;
        ReturnMessage returnMessage=new ReturnMessage();
        if (type==1){
            users=usersDao.getByEmail(account);
            if (users.isPresent()){
                returnMessage.setMsg(registerMsg2);
                return returnMessage;
            }
        }
        else {
            users=usersDao.getByPhone(account);
            if (users.isPresent()){
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
        System.out.println("msg");
        ReturnMessage returnMessage=new ReturnMessage();
        //检查该账户是否注册过
        System.out.println("csd");
        Optional<Users> users = usersDao.getByEmail(account);
        System.out.println("users");
        System.out.println(users);
        if (users.isPresent() && users.get().getState().equals("NORMAL")) {
            returnMessage.setStatus(402);
            returnMessage.setMsg(registerMsg2);
            return returnMessage;
        }
        else {
            System.out.println('1');
            usersDao.insertUserByEmail(account, pwd);
            System.out.println('2');
            users = usersDao.getByEmail(account);
        }

        //假设注册者为学生
        if (identity==0){
            //判断学生是否在库中
            System.out.println("判断前");
            Optional<Student> student=studentDao.getStudentByNameAndSchoolIDAndStuNumber(name,school,userNumber);
            //若不在库中，返回错误
            System.out.println("判断学生");
            if (!student.isPresent()){
                returnMessage.setStatus(401);
                returnMessage.setMsg(registerMsg0);
            }
            //若在库中
            else {
                //判断该学生是否在userrole中注册过，若注册过，返回已注册
                System.out.println("判断注册");
                if(userroleDao.getByRoleAndRoleID(1,student.get().getID())!=null){
                    returnMessage.setStatus(402);
                    returnMessage.setMsg(registerMsg2);
                }

                //该学生没注册过
                else {
                    //若该账户没注册过，插入新user
//                    if(users==null){
//                        usersDao.insertUserByEmail(account,pwd);
//                        users=usersDao.getByEmail(account);
//                    }
                    //插入新userRole，返回成功
                    System.out.println("注册成功");
                    usersDao.updateState(users.get().getID(), "NORMAL");
                    userroleDao.insertUserRole(1,users.get().getID(),student.get().getID());
                    returnMessage.setStatus(200);
                    returnMessage.setMsg(Msg1);
                }
            }
        }
        //假设注册者为老师，过程同上
        else {
            Optional<Teacher> teacher=teacherDao.getByNameAndSchoolIDAndTeaNumber(name,school,userNumber);
            System.out.println("tescher");
            System.out.println(teacher);
            if(!teacher.isPresent()){
                returnMessage.setStatus(401);
                returnMessage.setMsg(registerMsg0);
            }
            else {
                if(userroleDao.getByRoleAndRoleID(2,teacher.get().getID())!=null){
                    returnMessage.setStatus(402);
                    returnMessage.setMsg(registerMsg2);
                }
                else {
//                    if(users == null){
//                        usersDao.insertUserByEmail(account,pwd);
//                        users=usersDao.getByEmail(account);
//                    }
                    System.out.println("activate");
                    usersDao.updateState(users.get().getID(), "NORMAL");
                    userroleDao.insertUserRole(2, users.get().getID(), teacher.get().getID());
                    returnMessage.setStatus(200);
                    returnMessage.setMsg(Msg1);
                }
            }
        }
        return returnMessage;
    }
}
