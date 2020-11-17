package com.example.auth.Entity;

import com.example.auth.Constant.Role;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Collection;

public class EhwUserDetail implements UserDetails {
    private final int ID;
    private final String username;
    private final String password;
    private final String state;
    private final Collection<? extends GrantedAuthority> authorities;

    public EhwUserDetail(User user, Role role) {
        ID = user.getID();
        username = user.getEmail();
        password = user.getPassword();
        state = user.getState();
        //        switch (type) {
//            case EMAIL: username = user.getEmail();break;
//            case PHONE: username = user.getPhone();break;
//        }
        authorities = AuthorityUtils.createAuthorityList(role.toString());
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
        return state.equals("NORMAL");
    }

    @Override
    public String toString() {
        return "JwtUser{" +
                "username=" + username +
                ", password='" + password + '\'' +
                ", ID='" + ID + '\'' +
                ", authorities=" + authorities +
                '}';
    }
}
