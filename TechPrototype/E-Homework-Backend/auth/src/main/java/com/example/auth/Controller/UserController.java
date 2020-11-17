package com.example.auth.Controller;

import com.example.auth.Constant.Role;
import com.example.auth.Entity.User;
import com.example.auth.ServiceImpl.EhwUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
public class UserController {
    @Autowired
    private EhwUserDetailService ehwUserDetailService;

    @RequestMapping(path = "/test")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public String test(Authentication authentication) {
        System.out.println(authentication);
        System.out.println("test");
        return "Test";
    }

    @GetMapping("user")
    public Principal currentUser(Principal principal) {
        return principal;
    }
}
