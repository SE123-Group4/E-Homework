package org.cloudhomeworkplatform.cphregister.Controller;

import org.cloudhomeworkplatform.cphregister.Entity.School;
import org.cloudhomeworkplatform.cphregister.ReturnInfo.ReturnMessage;
import org.cloudhomeworkplatform.cphregister.Service.IMailService;
import org.cloudhomeworkplatform.cphregister.Service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*",maxAge = 3600)
public class RegisterController {
    @Autowired
    private IMailService iMailService;
    @Autowired
    private RegisterService registerService;

    @RequestMapping(path = "/schools")
    public List<School> getSchools(){
        return registerService.getSchools();
    }

    @RequestMapping(path = "/mail")
    public int sendMail(@RequestBody Map<String,String> params){
        String account=params.get("account");
        return iMailService.sendSimpleMail(account);
    }

    @RequestMapping(path = "/register")
    public ReturnMessage register(@RequestBody Map<String,String> params){
        String account=params.get("account");
        String pwd=params.get("password");
        String name=params.get("name");
        int school=Integer.parseInt(params.get("school"));
        String uNUM=params.get("userNumber");
        int identity=Integer.parseInt(params.get("identity"));
        return registerService.register(account,pwd,name,school,uNUM,identity);
    }

    @RequestMapping(path = "/setPassword")
    public ReturnMessage setPassword(@RequestBody Map<String,String> params){
        String password=params.get("password");
        int id=Integer.parseInt(params.get("id"));
        return registerService.setPassword(password,id);
    }

}
