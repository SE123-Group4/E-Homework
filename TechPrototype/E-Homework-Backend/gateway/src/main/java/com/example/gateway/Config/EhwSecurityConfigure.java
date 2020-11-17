//package com.example.gateway.Config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
//import org.springframework.security.config.web.server.ServerHttpSecurity;
//import org.springframework.security.web.server.SecurityWebFilterChain;
//import org.springframework.web.reactive.config.EnableWebFlux;
//
//// @EnableWebSecurity
//@EnableWebFluxSecurity
//public class EhwSecurityConfigure {
////    @Override
////    protected void configure(HttpSecurity http) throws Exception {
////        http.csrf().disable();
////    }
//    @Bean
//    SecurityWebFilterChain webFluxSecurityFilterChain(ServerHttpSecurity http) throws Exception {
//        //http.oauth2ResourceServer().jwt();
//        http.csrf().disable()
//            .authorizeExchange()
//            .pathMatchers("/auth/oauth/**").permitAll()  //无需进行权限过滤的请求路径
//            .pathMatchers(HttpMethod.OPTIONS).permitAll(); //option 请求默认放行
//        http.oauth2ResourceServer().jwt();
//        return http.build();
////                .authenticationManager(myReactiveAuthenticationManager)//自定义登录验证。自动扫描注入，无需手动注入
////                .authorizeExchange()
////                .pathMatchers("/auth/test").permitAll()  //无需进行权限过滤的请求路径
////                .pathMatchers(HttpMethod.OPTIONS).permitAll() //option 请求默认放行
////                .and()
////                //.authorizeExchange().pathMatchers("/**").access(myRBACServiceWebFlux)//自定义的鉴权服务，通过鉴权的才能继续访问某个请求
////                //.anyExchange().authenticated()
////                //.and()
////                .httpBasic()
////                .and()
////                .formLogin()
////                .loginPage("/auth/test")//指定登录请求路径
//                //.authenticationSuccessHandler(loginSuccessHandlerWebFlux) //认证成功
//                //.authenticationFailureHandler(loginFailedHandlerWebFlux) //登陆验证失败
//                //.and().exceptionHandling().authenticationEntryPoint(customHttpBasicServerAuthenticationEntryPoint)  //未登录访问资源时的处理类，若无此处理类，前端页面会弹出登录窗口
//                //.and().exceptionHandling().accessDeniedHandler(myAccessDeniedHandlerWebFlux)//访问被拒绝时自定义处理器
//                //.and()
//                //必须支持跨域
//                //.logout().logoutUrl("/auth/test");
//                //.logoutSuccessHandler(logoutSuccessHandlerWebFlux);//成功登出时调用的自定义处理类
//
//        //return http.build();
//    }
//
//}
