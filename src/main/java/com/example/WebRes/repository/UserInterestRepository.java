package com.example.WebRes.repository;

import com.example.WebRes.entity.Location;
import com.example.WebRes.entity.UserInterest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserInterestRepository extends CrudRepository<UserInterest,Long> {
    UserInterest findByContent(String content);


}
