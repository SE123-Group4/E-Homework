package org.cloudhomeworkplatform.cphregister.ServiceImpl;

import org.cloudhomeworkplatform.cphregister.Service.IMailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;;

@Service
public class IMailServiceImpl implements IMailService {
    @Autowired
    private JavaMailSender mailSender;

    @Value("738761580@qq.com")
    private String from;

    @Override
    public int sendSimpleMail(String to){
        SimpleMailMessage message=new SimpleMailMessage();
        message.setFrom(from);
        message.setTo(to);
        message.setSubject("云作业平台———邮箱验证");
        int num=Math.round((float)Math.random() * 10001);
        String text="您已申请云作业平台用户，验证码："+num;
        message.setText(text);
        mailSender.send(message);
        return num;
    }

}
