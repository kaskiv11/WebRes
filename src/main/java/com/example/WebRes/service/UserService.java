package com.example.WebRes.service;

import com.example.WebRes.entity.User;

import java.util.List;

public interface UserService {
    boolean createUser(User user);
    User findUserByEmail(String email);
    boolean deleteUserId(Long userId);
    User findUserById(Long userId);
    User findUserByLastName(String lastName);
    User findUserByPhone(String phone);
    List<User> allUsers();

    void updateUser(User user);
}
