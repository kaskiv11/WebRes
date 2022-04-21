package com.example.WebRes.controller;

import com.example.WebRes.entity.User;
import com.example.WebRes.service.imp.UserServiceImp;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;


@AllArgsConstructor
@Controller
@RequestMapping("/admin")
public class AdminController {

    static final Logger log = Logger.getLogger(String.valueOf(AdminController.class));

    @Autowired
    private UserServiceImp userService;


    @GetMapping("/admin-all-users")
    public List<User> ListAllUsers(Model model){
        log.info("all users method get");
        List<User> users = userService.allUsers();
        model.addAttribute("users",users);
        return users;
    }

    @PostMapping("user-delete/{id}")
    public void deleteUser(@PathVariable("id") Long id){
        log.info("delete method post");
        userService.deleteUserId(id);
    }


    @GetMapping("/user-update/{id}")
    public void updateUserForm(@PathVariable("id") Long id, Model model){
        User user = userService.findUserById(id);
        model.addAttribute("user", user);
    }

    @PostMapping("/user-update")
    public boolean updateUser(User user){
        userService.createUser(user);
        return true;
    }
}
