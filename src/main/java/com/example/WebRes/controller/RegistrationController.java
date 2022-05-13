package com.example.WebRes.controller;

import com.example.WebRes.entity.User;
import com.example.WebRes.service.imp.UserServiceImp;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;


import javax.validation.Valid;
@Log4j
@AllArgsConstructor
@Controller
public class RegistrationController {

    @Autowired
    private UserServiceImp userService;

    @GetMapping("/")
    public String index(){
        return "index";
    }


    @GetMapping(value = {"/registration"})
    public ModelAndView registration(){
       log.info("Registration controller get");
        ModelAndView modelAndView = new ModelAndView();
        try {
            modelAndView.addObject("userModel", new User());
            modelAndView.setViewName("registration");
        }catch (Exception exception){
             log.info("Exception  registration user get");
        }
        return modelAndView;


    }
    @PostMapping("/registration")
    public String registration(@ModelAttribute("userModel") @Valid User userModel,
                               BindingResult result, ModelMap model){
        log.info("Registration controller post");
        if (result.hasErrors()) {
            model.addAttribute("emailError", "Email address is wrong");
            return "registration";
        }
        if (!userModel.getPassword().equals(userModel.getPasswordConfirm())){
            model.addAttribute("passwordError", "Passwords do not match");
            return "registration";
        }
        if (!userService.createUser(userModel)){
            model.addAttribute("usernameError", "Such a user already exists");
            return "registration";
        }
        return "redirect:/";
    }



}
