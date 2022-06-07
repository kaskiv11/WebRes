package com.example.WebRes.repository;

import com.example.WebRes.entity.UserInterest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserInterestRepository extends CrudRepository<UserInterest,Long> {
    UserInterest findByContent(String content);


}
