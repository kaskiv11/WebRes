package com.example.WebRes.repository;


import com.example.WebRes.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findUserByEmail(String email);
    User findUserById(Long userId);
    User findUserByName(String lastName);
    User findUserByPhone(String phone);

    Optional<User> findByEmail(String email);

    Boolean existsByEmail(String email);
}
