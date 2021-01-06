package com.example.register.Controller;

import com.example.register.Entity.School;
import com.example.register.ReturnInfo.ReturnMessage;
import com.example.register.Service.IMailService;
import com.example.register.Service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*",maxAge = 3600)
public class RegisterController {
    @Autowired
    private IMailService iMailService;
    @Autowired
    private RegisterService registerService;

    @GetMapping(path = "/school_list")
    public List<School> getSchools(){
        return registerService.getSchools();
    }

    @RequestMapping(path = "/mail_code")
    public int sendMail(@RequestBody Map<String,String> params){
        String account=params.get("account");
        return iMailService.sendSimpleMail(account);
    }

    @RequestMapping(path = "/register")
    public ReturnMessage register(@RequestBody Map<String,String> params){
        System.out.println(params);
        String account=params.get("account");
        String pwd=params.get("password");
        String name=params.get("name");
        int school=Integer.parseInt(params.get("school"));
        String uNUM=params.get("user_number");
        int identity=Integer.parseInt(params.get("role"));
        return registerService.register(account,pwd,name,school,uNUM,identity);
    }

    @RequestMapping(path = "/setPassword")
    public ReturnMessage setPassword(@RequestBody Map<String,String> params){
        String password=params.get("password");
        int id=Integer.parseInt(params.get("id"));
        return registerService.setPassword(password,id);
    }

}
