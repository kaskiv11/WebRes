package com.example.WebRes.service.imp;

import com.example.WebRes.entity.Location;
import com.example.WebRes.entity.User;
import com.example.WebRes.entity.UserInterest;
import com.example.WebRes.repository.UserRepository;
import com.example.WebRes.service.UserService;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Log4j
@Transactional
public class UserServiceImp implements UserService {
    @Autowired
    private UserRepository userRepository;


    public boolean createUser(User user) {

        //BCryptPasswordEncoder encoder = new  BCryptPasswordEncoder();
        // user.setPassword(encoder.encode(user.getPassword()));
        User userFromDB = userRepository.findUserByEmail(user.getEmail());
        if (userFromDB != null) {
            return false;
        }

        List<UserInterest> userInterests = new ArrayList<>() ;
        user.setUserInterests(userInterests);
        List<Location> locationList = new ArrayList<>() ;
        user.setLocation((Location) locationList);

        userRepository.save(user);
        return true;
    }

    
    public boolean deleteUser(Long userId) {
        if (userRepository.findById(userId).isPresent()) {
            userRepository.deleteById(userId);
            return true;
        }
        return false;
    }
}
