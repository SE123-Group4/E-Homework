//package com.example.auth.Util;
//
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.oauth2.common.exceptions.OAuth2Exception;
//import org.springframework.security.oauth2.provider.error.WebResponseExceptionTranslator;
//import org.springframework.stereotype.Component;
//
//@Component("ehwWebResponseExceptionTranslator")
//public class EhwWebResponseExceptionTranslator implements WebResponseExceptionTranslator {
//    @Override
//    public ResponseEntity<OAuth2Exception> translate(Exception e) throws Exception {
//
//        OAuth2Exception oAuth2Exception = (OAuth2Exception) e;
//        return ResponseEntity
//                .status(oAuth2Exception.getHttpErrorCode())
//                .body(new EhwOauthException(oAuth2Exception.getMessage()));
//    }
//}
