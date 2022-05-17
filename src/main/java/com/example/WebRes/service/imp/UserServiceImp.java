package com.example.WebRes.service.imp;

import com.example.WebRes.entity.Enum.Role;
import com.example.WebRes.entity.Follower;
import com.example.WebRes.entity.Location;
import com.example.WebRes.entity.User;
import com.example.WebRes.entity.UserInterest;
import com.example.WebRes.repository.UserRepository;
import com.example.WebRes.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Log4j

@Service
@AllArgsConstructor
public class UserServiceImp implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean createUser( User user) {

        BCryptPasswordEncoder encoder = new  BCryptPasswordEncoder();
        user.setPassword(encoder.encode(user.getPassword()));
        User userFromDB = userRepository.findUserByEmail(user.getEmail());
        if (userFromDB != null) {
            return false;
        }

        List<UserInterest> userInterests = new ArrayList<>();
        user.setUserInterests(userInterests);
        List<Follower> followerList = new ArrayList<>();
        user.setFollowers(followerList);
        //user.setRole(Role.USER);

        userRepository.save(user);
        return true;
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    @Override
    public boolean deleteUserId(Long userId) {
        if (userRepository.findById(userId).isPresent()) {
            userRepository.deleteById(userId);
            return true;
        }
        return false;
    }

    @Override
    public User findUserById(Long userId) {
        return userRepository.findUserById(userId);
    }

    @Override
    public User findUserByLastName(String lastName) {
        return userRepository.findUserByLastName(lastName);
    }

    @Override
    public User findUserByPhone(String phone) {
        return userRepository.findUserByPhone(phone);
    }

    @Override
    public List<User> allUsers() {
        return (List<User>) userRepository.findAll();
    }

}



