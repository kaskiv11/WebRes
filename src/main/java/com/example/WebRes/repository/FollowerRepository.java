package com.example.WebRes.repository;

import com.example.WebRes.entity.Follower;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FollowerRepository extends CrudRepository<Follower, Long> {
}
