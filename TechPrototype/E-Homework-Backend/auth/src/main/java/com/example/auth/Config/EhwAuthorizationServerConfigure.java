package com.example.auth.Config;

import com.example.auth.Entity.EhwUserDetail;
import com.example.auth.ServiceImpl.EhwUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.*;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;

import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Configuration
@EnableAuthorizationServer
public class EhwAuthorizationServerConfigure extends AuthorizationServerConfigurerAdapter {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private EhwUserDetailService ehwUserDetailService;

//    @Autowired
//    private EhwWebResponseExceptionTranslator ehwWebResponseExceptionTranslator;

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {

        // 定义了两个客户端应用的通行证
        clients.inMemory()
                .withClient("ehomeworkapp")
                .secret(new BCryptPasswordEncoder().encode("ehomeworkapp"))
                .authorizedGrantTypes("password", "refresh_token")
                .scopes("all")
                .autoApprove(false)
                .and()
                .withClient("sheep2")
                .secret(new BCryptPasswordEncoder().encode("ehomeworkmonitor"))
                .authorizedGrantTypes("password", "refresh_token")
                .scopes("all")
                .autoApprove(false);
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        endpoints.authenticationManager(this.authenticationManager);
        endpoints.tokenStore(jwtTokenStore()).accessTokenConverter(jwtAccessTokenConverter());
        DefaultTokenServices tokenServices = (DefaultTokenServices) endpoints.getDefaultAuthorizationServerTokenServices();
        tokenServices.setTokenStore(endpoints.getTokenStore());
        tokenServices.setSupportRefreshToken(true);
        tokenServices.setClientDetailsService(endpoints.getClientDetailsService());
        //tokenServices.setTokenEnhancer(endpoints.getTokenEnhancer());
        TokenEnhancerChain tokenEnhancerChain = new TokenEnhancerChain();
        tokenEnhancerChain.setTokenEnhancers(Arrays.asList(tokenEnhancer(), jwtAccessTokenConverter()));
        tokenServices.setAccessTokenValiditySeconds((int) TimeUnit.DAYS.toSeconds(15)); // 15 days
        endpoints.tokenServices(tokenServices).tokenEnhancer(tokenEnhancerChain);

        //endpoints.exceptionTranslator(ehwWebResponseExceptionTranslator);
    }

    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
        security.tokenKeyAccess("isAuthenticated()")
                .checkTokenAccess("isAuthenticated()")
                .allowFormAuthenticationForClients();
    }

    @Bean
    public TokenStore jwtTokenStore() {
        return new JwtTokenStore(jwtAccessTokenConverter());
    }

    @Bean
    public JwtAccessTokenConverter jwtAccessTokenConverter(){
        JwtAccessTokenConverter jwtAccessTokenConverter = new JwtAccessTokenConverter();
        DefaultAccessTokenConverter defaultAccessTokenConverter = (DefaultAccessTokenConverter) jwtAccessTokenConverter
                .getAccessTokenConverter();
        DefaultUserAuthenticationConverter userAuthenticationConverter = new DefaultUserAuthenticationConverter();
        userAuthenticationConverter.setUserDetailsService(ehwUserDetailService);

        defaultAccessTokenConverter.setUserTokenConverter(userAuthenticationConverter);
        // 这里务必设置一个，否则多台认证中心的话，一旦使用jwt方式，access_token将解析错误
        String signingKey = "ehomework";
        jwtAccessTokenConverter.setSigningKey(signingKey);

        return jwtAccessTokenConverter;
    }

    @Bean
    public TokenEnhancer tokenEnhancer() {
        return (accessToken, authentication) -> {
            final Map<String, Object> additionalInfo = new HashMap<>();
            String license = "your license";
//            boolean enable = true;//是否设置token过期 建议配置文件获取值
//            int expires = 120;//Token过期期时间：分钟 建议配置文件获取值
//            //配置Token超期时间：分钟
//            if(enable){
//                Date expires = DateUtil.offset(new Date(), DateField.MINUTE, expires);
//                ((DefaultOAuth2AccessToken) accessToken).setExpiration(expires);
//            }
            //additionalInfo 中设置业务信息 如userId等
            additionalInfo.put("license", license);
            Authentication auth = authentication.getUserAuthentication();
            if(auth != null){
                EhwUserDetail user = (EhwUserDetail) auth.getPrincipal();
                if (user != null) {
                    additionalInfo.put("ID", user.getID());
                    additionalInfo.put("state", user.getState());
                    //additionalInfo.put("msg","success");
                    additionalInfo.put("userroleID",user.getUserroleID());
                }
            }

            ((DefaultOAuth2AccessToken) accessToken).setAdditionalInformation(additionalInfo);
            return accessToken;
        };
    }
}
