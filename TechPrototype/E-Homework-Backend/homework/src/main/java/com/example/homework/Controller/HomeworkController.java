package com.example.homework.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class HomeworkController {
    @RequestMapping(path = "/index/{s}", method = RequestMethod.GET)
    String index(@PathVariable String s) {
        return "hello, " + s + "!";
    }

    @RequestMapping(path = "/post", method = RequestMethod.POST)
    String post(@RequestBody Map<String, String> map) {
        String username = map.get("username");
        String password = map.get("username");
        return ("Username: " + username + "\nPassword: " + password);
    }
}
