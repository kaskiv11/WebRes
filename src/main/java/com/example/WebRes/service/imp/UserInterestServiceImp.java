package com.example.WebRes.service.imp;

import com.example.WebRes.entity.UserInterest;
import com.example.WebRes.repository.UserInterestRepository;
import com.example.WebRes.service.UserInterestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserInterestServiceImp implements UserInterestService {
    @Autowired
    UserInterestRepository userInterestRepository;
    @Override
    public boolean createUserInterest(UserInterest userInterest) {
        userInterestRepository.save(userInterest);
        return true;
    }

    @Override
    public UserInterest findByContent(String content) {
        return userInterestRepository.findByContent(content);
    }

    @Override
    public boolean deleteUserInterest(Long userInterestId) {
        if (userInterestRepository.findById(userInterestId).isPresent()) {
            userInterestRepository.deleteById(userInterestId);
            return true;
        }
        return false;
    }

    @Override
    public Optional<UserInterest> findUserById(Long userId) {
        return userInterestRepository.findById(userId);
    }

    @Override
    public List<UserInterest> allUserInterests() {
        return (List<UserInterest>) userInterestRepository.findAll();
    }
}
