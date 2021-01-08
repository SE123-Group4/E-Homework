package org.chp.hw.serviceimpl;

import org.chp.hw.service.IMailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;


/**
 * @ClassName: IMailServiceImpl
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/8 3:08 上午
 * @Version 1.0
 **/
@Service
public class IMailServiceImpl implements IMailService {

    @Autowired
    JavaMailSender mailSender;

    @Value("738761580@qq.com")
    private String from;

    @Override
    public int sendAssignMail(String to, String courseName, String title){
        SimpleMailMessage message=new SimpleMailMessage();
        message.setFrom(from);
        message.setTo(to);
        message.setSubject("云作业平台———发布作业通知");
        String text="您的老师布置了新的作业。作业科目："+courseName+" 作业题目："+title;
        message.setText(text);
        System.out.println("BEFORE SEND");
        mailSender.send(message);
        System.out.println("AFTER SEND");
        return 0;
    }

    @Override
    public int sendCorrectMail(String to, String courseName, String title){
        SimpleMailMessage message=new SimpleMailMessage();
        message.setFrom(from);
        message.setTo(to);
        message.setSubject("云作业平台———批改作业通知");
        String text="您的作业已被批改，请登陆云作业平台查看详情。作业科目："+courseName+" 作业题目："+title;
        message.setText(text);
        mailSender.send(message);
        return 0;
    }

}
