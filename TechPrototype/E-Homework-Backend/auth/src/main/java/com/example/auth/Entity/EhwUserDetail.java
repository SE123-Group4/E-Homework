package com.example.auth.Entity;

import com.example.auth.Constant.LoginType;
import com.example.auth.Constant.Role;
import com.example.auth.Constant.State;
import com.example.auth.Dao.UserRoleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

public class EhwUserDetail implements UserDetails {
    private int ID;
    private String username;
    private String password;
    private State state;
    private Collection<? extends GrantedAuthority> authorities;

    private UserRoleDao userRoleDao;

    public EhwUserDetail(User user, LoginType type) {
        ID = user.getID();
        password = user.getPassword();
        state = user.getState();
        switch (type) {
            case EMAIL: username = user.getEmail();break;
            case PHONE: username = user.getPhone();break;
        }
        List<Role> roles = new ArrayList<>();
        Optional<UserRole> userRole = userRoleDao.findByID(user.getID());
        if (userRole.isPresent()) {

        }
        List<GrantedAuthority> authority = AuthorityUtils.createAuthorityList();
        authorities = authority;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
