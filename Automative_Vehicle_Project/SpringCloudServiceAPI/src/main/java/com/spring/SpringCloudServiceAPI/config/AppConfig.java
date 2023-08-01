package com.spring.SpringCloudServiceAPI.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin
@Configuration
public class AppConfig {

    @Bean
    public RouteLocator router(RouteLocatorBuilder routeLocatorBuilder){

        return routeLocatorBuilder.routes()
                .route(predicateSpec -> predicateSpec
                .path("/automotive/v1/**")
                .uri("http://localhost:9001"))

                .route(predicateSpec -> predicateSpec
                        .path("/automotive/v3/**")
                        .uri("http://localhost:8001"))

                .route(predicateSpec -> predicateSpec
                        .path("/automotive/v2/**")
                        .uri("http://localhost:9001"))
                .build();
    }
}
