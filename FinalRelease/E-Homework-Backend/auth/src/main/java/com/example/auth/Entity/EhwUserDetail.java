package com.example.auth.Entity;

import com.example.auth.Constant.Role;
import com.example.auth.Dao.UserRoleDao;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

@Data
public class EhwUserDetail implements UserDetails {
    private final int ID;
    private final String username;
    private final String password;
    private final int state;
    private final int roleID;
    private final Object role;
    private final Collection<? extends GrantedAuthority> authorities;

    public EhwUserDetail(User user, Role r, int rID, Object role) {
        ID = user.getID();
        roleID = rID;
        username = user.getEmail();
        password = user.getPassword();
        state = user.getState();
        this.role = role;
        //        switch (type) {
//            case EMAIL: username = user.getEmail();break;
//            case PHONE: username = user.getPhone();break;
//        }
        authorities = AuthorityUtils.createAuthorityList(r.toString());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        //return new ArrayList<>();
        return authorities;
    }



    @Override
    public String getPassword() {
        return new BCryptPasswordEncoder().encode(password);
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return state == 1;
    }

    @Override
    public String toString() {
        return "JwtUser{" +
                "username=" + username +
                ", password='" + password + '\'' +
                ", ID='" + ID + '\'' +
                ", roleID=" + roleID + '\'' +
                ", authorities=" + authorities +
                ", role=" + role + '\'' +
                '}';
    }
}
