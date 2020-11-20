package com.example.auth.ServiceImpl;

import com.example.auth.Constant.Role;
import com.example.auth.Dao.StudentDao;
import com.example.auth.Dao.TeacherDao;
import com.example.auth.Dao.UserDao;
import com.example.auth.Dao.UserRoleDao;
import com.example.auth.Entity.EhwUserDetail;
import com.example.auth.Entity.User;
import com.example.auth.Entity.UserRole;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EhwUserDetailService implements UserDetailsService {
    @Autowired
    private UserDao userdao;

    @Autowired
    private UserRoleDao userRoleDao;

    @Autowired
    private StudentDao studentDao;

    @Autowired
    private TeacherDao teacherDao;

    @SneakyThrows
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> user = userdao.findByEmail(email);
        System.out.println("load username");
        System.out.println(email);

        if(user.isEmpty()){
            throw new UsernameNotFoundException("not exist user");
        }
        System.out.println(user.get().getPassword());
        System.out.println(user.get().getState());
        Optional<UserRole> userRole = userRoleDao.findByUserID(user.get().getID());
        System.out.println(userRole);
        int roleID = userRole.get().getRoleID();
        Role r = userRole.get().getRole();
        Object role = new Object();
        switch (r) {
            case ROLE_STUDENT: {
                role = studentDao.findByID(roleID).get();
                break;
            }
            case ROLE_TEACHER: {
                role = teacherDao.findByID(roleID).get();
                break;
            }
        }
        System.out.println(r);
        EhwUserDetail e =  new EhwUserDetail(user.get(), r, roleID, role);
        System.out.println(e);
        return e;
    }
}
