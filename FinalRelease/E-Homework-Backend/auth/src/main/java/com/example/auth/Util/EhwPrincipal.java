package com.example.auth.Util;

import com.alibaba.fastjson.JSONObject;
import com.example.auth.Constant.Role;
import com.example.auth.Constant.State;
import lombok.Data;

@Data
public class EhwPrincipal {
    public EhwPrincipal() {}
    private int ID;
    private String email;
    private String phone;
    private String password;
    private State state;
    private Role role;

    @Override
    public String toString() {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("email", this.email);
        jsonObject.put("ID", this.ID);
        jsonObject.put("password", this.password);
        jsonObject.put("phone", this.phone);
        jsonObject.put("state", this.state);
        jsonObject.put("role", this.role);
        return jsonObject.toString();
    }
}
