package com.example.WebRes.service;

import com.example.WebRes.entity.UserInterest;

import java.util.List;
import java.util.Optional;

public interface UserInterestService {
    boolean createUserInterest(UserInterest userInterest);
    UserInterest findByContent(String content);
    boolean deleteUserInterest(Long userInterestId);
    Optional<UserInterest> findUserById(Long userId);
    List<UserInterest> allUserInterests();
}
