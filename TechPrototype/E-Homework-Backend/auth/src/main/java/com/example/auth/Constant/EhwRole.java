package com.example.auth.Constant;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

@Data
public class EhwRole implements GrantedAuthority {
    private Role role;

    public EhwRole(Role r) {
        role = r;
    }

    @Override
    public String getAuthority() {
        return role.toString();
    }
}
