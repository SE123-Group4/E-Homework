package com.example.auth.Util;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class EhwLogoutHandler implements LogoutHandler {
    @Override
    public void logout(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) {
        try {
            String exit = httpServletRequest.getParameter("exit");//aa即为前端传来自定义跳转url地址
            httpServletResponse.sendRedirect(exit);//实现自定义重定向
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
