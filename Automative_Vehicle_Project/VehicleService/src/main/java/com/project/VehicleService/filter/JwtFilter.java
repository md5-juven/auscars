package com.project.VehicleService.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtFilter extends GenericFilterBean {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        HttpServletResponse httpServletResponse = (HttpServletResponse) servletResponse;
        ServletOutputStream servletOutputStream = httpServletResponse.getOutputStream();

        String authHeader = httpServletRequest.getHeader("Authorization");
        if(authHeader == null || !authHeader.startsWith("Bearer ")){
            httpServletResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            servletOutputStream.println("Invalid Token");
            servletOutputStream.close();
        }
        else {
            String jwtToken = authHeader.substring(7);
            Claims user = Jwts.parser().setSigningKey("sujay").parseClaimsJws(jwtToken).getBody();
            httpServletRequest.setAttribute("email_id", user.get("user_email"));
            httpServletRequest.setAttribute("role", user.get("user_role"));
            filterChain.doFilter(httpServletRequest, httpServletResponse);
        }

    }
}
