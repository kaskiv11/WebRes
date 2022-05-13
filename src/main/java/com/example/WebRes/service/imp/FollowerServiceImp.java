package com.example.WebRes.service.imp;

import com.example.WebRes.entity.Follower;
import com.example.WebRes.repository.FollowerRepository;
import com.example.WebRes.service.FollowerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FollowerServiceImp implements FollowerService {
    @Autowired
    FollowerRepository followerRepository;


    @Override
    public boolean createFollower(Follower follower) {
        followerRepository.save(follower);
        return true;
    }

    @Override
    public Iterable<Follower> allFollowers() {
        return followerRepository.findAll();
    }
    @Override
    public boolean deleteFollowerById(Long followerId) {
        if (followerRepository.findById(followerId).isPresent()) {
           followerRepository.deleteById(followerId);
            return true;
        }
        return false;
    }
    @Override
    public Optional<Follower> findFollowerById(long id){
        return followerRepository.findById(id);
    }


}
