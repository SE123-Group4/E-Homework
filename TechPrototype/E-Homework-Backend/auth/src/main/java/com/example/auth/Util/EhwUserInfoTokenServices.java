package com.example.auth.Util;

import com.example.auth.Constant.Role;
import com.example.auth.Constant.State;
import org.springframework.boot.autoconfigure.security.oauth2.resource.UserInfoTokenServices;

import java.util.Map;

public class EhwUserInfoTokenServices extends UserInfoTokenServices {
    public EhwUserInfoTokenServices(String userInfoEndpointUrl, String clientId) {
        super(userInfoEndpointUrl, clientId);
    }

    @Override
    protected Object getPrincipal(Map<String, Object> map) {
        EhwPrincipal ehwPrincipal = new EhwPrincipal();
        ehwPrincipal.setEmail((String) map.get("email"));
        ehwPrincipal.setID((int) map.get("ID"));
        ehwPrincipal.setPassword((String) map.get("password"));
        ehwPrincipal.setPhone((String) map.get("phone"));
        ehwPrincipal.setState((State) map.get("state"));
        ehwPrincipal.setRole((Role) map.get("role"));
        //and so on..
        return ehwPrincipal;

        /*
        Object principal = this.principalExtractor.extractPrincipal(map);
        return (principal == null ? "unknown" : principal);
        */

    }
}
