package com.example.WebRes.controller;

import com.example.WebRes.entity.User;
import com.example.WebRes.service.imp.UserServiceImp;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Log4j
@AllArgsConstructor
@Controller
@RequestMapping("/admin")
public class AdminController {
    @GetMapping("/main")
    public String index(){
        return "mainAdmin";
    }

    @Autowired
    private UserServiceImp userService;
    @GetMapping("/deleteUser")
    public String deleteUserGet(Model model){
        log.info("Delete user method get");
        List<User> users = userService.allUsers();
        model.addAttribute("users",users);
        return "deleteUser";
    }

    @PostMapping("/deleteUser")
    public String  deleteUser(@RequestParam(required = true, defaultValue = "" ) Long userId,
                              @RequestParam(required = true, defaultValue = "" ) String action,
                              Model model) {
        log.info("Delete user method post");
        if (action.equals("delete")){
            userService.deleteUserId(userId);
        }
        return "redirect:/admin/main";
    }
}
