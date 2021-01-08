package com.example.register.Service;

public interface IMailService {
    int sendSimpleMail(String to);
    int sendAssignMail(String to, String courseName, String title);
    int sendCorrectMail(String to, String courseName, String title);
}
