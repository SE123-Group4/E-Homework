package org.chp.hw.service;

/**
 * @ClassName: IMailService
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/8 3:07 上午
 * @Version 1.0
 **/
public interface IMailService {
    int sendAssignMail(String to, String courseName, String title);

    int sendCorrectMail(String to, String courseName, String title);
}
