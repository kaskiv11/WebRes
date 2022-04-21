package com.example.WebRes.controller;

import com.example.WebRes.entity.User;
import com.example.WebRes.exeption.NowRegisterException;
import com.example.WebRes.service.imp.UserServiceImp;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;
import java.util.logging.Logger;


@AllArgsConstructor
@Controller
public class RegistrationController {

    static final Logger log = Logger.getLogger(String.valueOf(UserController.class));

    @Autowired
    private UserServiceImp userService;


    @GetMapping(value = {"/registration"})
    public ModelAndView registration() {
        log.info("Registration controller get");
        ModelAndView modelAndView = new ModelAndView();
        try {
            modelAndView.addObject("userModel", new User());
            modelAndView.setViewName("registration");
        } catch (Exception exception) {
            log.info("Exception  registration user get");

        }
        return modelAndView;


    }

    @PostMapping("/registration")
    public boolean registration(@ModelAttribute("userModel") @Valid User userModel,
                               BindingResult result, ModelMap model) throws NowRegisterException {
        log.info("Registration controller post");
        if (result.hasErrors()) {
            model.addAttribute("emailError", "Email address is wrong");
            return false;
        }
        if (!userModel.getPassword().equals(userModel.getPasswordConfirm())) {
            return false;
        }
        if (!userService.createUser(userModel)) {
            model.addAttribute("usernameError", "Such a user already exists");
            return false;
        }
        return true;
    }
}