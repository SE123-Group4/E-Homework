package com.example.auth.Constant;

public enum Role {
    ROLE_STUDENT("ROLE_STUDENT"),
    ROLE_TEACHER("ROLE_TEACHER"),
    ROLE_ADMIN("ROLE_ADMIN");

    private final String value;

    Role(String role) {
        value = role;
    }

    public String getValue() {
        return value;
    }

    public static Role fromString(String value) {
        Role role = null;
        switch (value) {
            case "ROLE_STUDENT" : role = ROLE_STUDENT; break;
            case "ROLE_TEACHER" : role = ROLE_TEACHER; break;
            case "ROLE_ADMIN" : role = ROLE_ADMIN; break;
        }
        return role;
    }
}
