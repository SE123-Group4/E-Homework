package com.example.register.Controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @RequestMapping(value = "/test")
    public String test(Authentication authentication) {
        System.out.println(authentication);
        return "test";
    }
}
