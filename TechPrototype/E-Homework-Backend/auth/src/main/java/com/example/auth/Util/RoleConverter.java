package com.example.auth.Util;

import com.example.auth.Constant.Role;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class RoleConverter implements AttributeConverter<Role, String> {
    @Override
    public String convertToDatabaseColumn(Role role) {
        return role.toString();
    }

    @Override
    public Role convertToEntityAttribute(String s) {
        return Role.fromString(s);
    }
}
