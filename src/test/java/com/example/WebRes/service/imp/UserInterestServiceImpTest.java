package com.example.WebRes.service.imp;

import com.example.WebRes.entity.UserInterest;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserInterestServiceImpTest {

    @Mock
    UserInterestServiceImp userInterestService;

    @Test
    void createUserInterest() {

        UserInterest userInterest = new UserInterest();
        userInterest.setId(111111111L);
        userInterest.setContent("Technology");

        when(userInterestService.createUserInterest(userInterest)).thenReturn(true);

        boolean isUserCreated = userInterestService.createUserInterest(userInterest);

        assertTrue(isUserCreated);
    }

    @Test
    void findByContent() {
        UserInterest userInterest = new UserInterest();
        userInterest.setId(111111111L);
        userInterest.setContent("Technology");

        when(userInterestService.findByContent("Technology")).thenReturn(userInterest);
        UserInterest foundUserInterest = userInterestService.findByContent("Technology");

        assertEquals(111111111L, foundUserInterest.getId());
    }

    @Test
    void deleteUserInterest() {
        UserInterest userInterest = new UserInterest();
        userInterest.setId(111111111L);
        userInterest.setContent("Technology");

        when(userInterestService.deleteUserInterest(userInterest.getId())).thenReturn(true);

        boolean isUserCreated = userInterestService.deleteUserInterest(userInterest.getId());

        assertTrue(isUserCreated);
    }

    @Test
    void findUserById() {
        UserInterest userInterest = new UserInterest();
        userInterest.setId(111111111L);
        userInterest.setContent("Technology");

        when(userInterestService.findUserById(111111111L)).thenReturn(Optional.of(userInterest));
        Optional<UserInterest> foundUserInterest = userInterestService.findUserById(111111111L);

        assertEquals("Technology", foundUserInterest.get().getContent());
    }

    @Test
    void allUserInterests() {
        UserInterest techUserInterest = new UserInterest();
        techUserInterest.setId(111111111L);
        techUserInterest.setContent("Technology");

        UserInterest mathUserInterest = new UserInterest();
        mathUserInterest.setId(111111112L);
        mathUserInterest.setContent("Technology");

        when(userInterestService.allUserInterests()).thenReturn(List.of(techUserInterest, mathUserInterest));
        List<UserInterest> foundUserInterests = userInterestService.allUserInterests();

        assertEquals(2, foundUserInterests.size());
    }
}