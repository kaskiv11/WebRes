package com.example.WebRes.service;

import com.example.WebRes.entity.Follower;

import java.util.Optional;

public interface FollowerService {
    boolean createFollower(Follower follower);
    Iterable<Follower> allFollowers();
    boolean deleteFollowerById(Long followerId);


    Optional<Follower> findFollowerById(long id);
}
