package com.example.WebRes.security;


import com.example.WebRes.entity.User;
import com.example.WebRes.repository.UserRepository;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;


@Service
public class MyUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    //static final org.apache.logging.log4j.Logger logger = (org.apache.logging.log4j.Logger) Logger.getLogger(String.valueOf(MyUserDetailsService.class));

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        //logger.info("loadUserByUsername() : { "+ user.getEmail()+ " }");
        return new MyUserDetails(user);
    }
}
