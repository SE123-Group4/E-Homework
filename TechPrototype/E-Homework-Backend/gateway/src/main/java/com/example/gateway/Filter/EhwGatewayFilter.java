//package com.example.gateway.Filter;
//
//import org.springframework.cloud.gateway.filter.GatewayFilter;
//import org.springframework.cloud.gateway.filter.GatewayFilterChain;
//import org.springframework.core.Ordered;
//import org.springframework.web.server.ServerWebExchange;
//import reactor.core.publisher.Mono;
//
//public class EhwGatewayFilter implements GatewayFilter, Ordered {
//    @Override
//    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
//        System.out.println(exchange.getAttributes());
//        return null;
//    }
//
//    @Override
//    public int getOrder() {
//        return 0;
//    }
//}
