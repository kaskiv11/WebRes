package com.example.WebRes.controller;

import com.example.WebRes.repository.UserRepository;
import com.example.WebRes.service.imp.UserServiceImp;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@AllArgsConstructor
public class LoginController {
    @Autowired
    private UserServiceImp userServiceImp;
    @GetMapping("/login")
    public String login() {

        return "login";
    }
}
