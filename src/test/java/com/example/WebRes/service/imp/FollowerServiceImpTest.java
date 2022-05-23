package com.example.WebRes.service.imp;

import com.example.WebRes.entity.Follower;
import com.example.WebRes.entity.User;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class FollowerServiceImpTest {

    @Mock
    FollowerServiceImp followerService;

    @Test
    void createFollower() {
        User user = new User();
        user.setFirstName("Test");
        user.setLastName("Test");

        Follower follower = new Follower();
        follower.setId(111111111L);
        follower.setUser(user);

        when(followerService.createFollower(follower)).thenReturn(true);

        Boolean result = followerService.createFollower(follower);
        assertEquals(true, result);
    }

    @Test
    void allFollowers() {
        User user = new User();
        user.setFirstName("Test");
        user.setLastName("Test");

        Follower follower = new Follower();
        follower.setId(111111111L);
        follower.setUser(user);

        User adminUser = new User();
        adminUser.setFirstName("Admin");
        adminUser.setLastName("Admin");

        Follower adminFollower = new Follower();
        adminFollower.setId(111111111L);
        adminFollower.setUser(user);


        when(followerService.allFollowers()).thenReturn(List.of(follower, adminFollower));

        List<Follower> followers = (List<Follower>) followerService.allFollowers();
        assertEquals(2, followers.size());
    }

    @Test
    void deleteFollowerById() {

        User user = new User();
        user.setFirstName("Test");
        user.setLastName("Test");

        Follower follower = new Follower();
        follower.setId(111111111L);
        follower.setUser(user);

        when(followerService.deleteFollowerById(111111111L)).thenReturn(true);

        Boolean result = followerService.deleteFollowerById(111111111L);
        assertEquals(true, result);
    }

    @Test
    void findFollowerById() {

        User user = new User();
        user.setFirstName("Test");
        user.setLastName("Test");

        Follower follower = new Follower();
        follower.setId(111111111L);
        follower.setUser(user);

        when(followerService.findFollowerById(111111111L)).thenReturn(Optional.of(follower));

        Optional<Follower> followers = followerService.findFollowerById(111111111L);
        assertEquals(111111111L, followers.get().getId());
    }
}