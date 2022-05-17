package com.example.WebRes.service.imp;

import com.example.WebRes.entity.User;
import com.example.WebRes.repository.UserRepository;
import com.example.WebRes.service.UserService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceImpTest {

    @Mock
    UserServiceImp userService;

    @Test
    void createUser() {
        User us = new User();
        us.setId(111111111L);
        us.setFirstName("San");
        us.setLastName("Diego");

        when(userService.createUser(us)).thenReturn(true);
        boolean isCreated = userService.createUser(us);
        assertTrue(isCreated);
    }

    @Test
    void findUserByEmail() {
        User us = new User();
        us.setId(111111111L);
        us.setEmail("test@test.com");
        us.setFirstName("Vitaliy");
        us.setLastName("Drapak");

        when(userService.findUserByEmail("test@test.com")).thenReturn(us);

        User foundUser = userService.findUserByEmail("test@test.com");

        assertEquals("Vitaliy", foundUser.getFirstName());
        assertEquals("Drapak", foundUser.getLastName());
    }

    @Test
    void deleteUserId() {
        when(userService.deleteUserId(111111111L)).thenReturn(true);
        boolean isDeleted = userService.deleteUserId(111111111L);
        assertTrue(isDeleted);
    }

    @Test
    void findUserById() {
        User us = new User();
        us.setId(111111111L);
        us.setFirstName("San");
        us.setLastName("Diego");

        when(userService.findUserById(111111111L)).thenReturn(us);

        User foundUser = userService.findUserById(111111111L);

        assertEquals("San", foundUser.getFirstName());
        assertEquals("Diego", foundUser.getLastName());
    }

    @Test
    void findUserByLastName() {
        User us = new User();
        us.setId(111111111L);
        us.setFirstName("Volodya");
        us.setLastName("Kaskiv");

        when(userService.findUserByLastName("Kaskiv")).thenReturn(us);

        User foundUser = userService.findUserByLastName("Kaskiv");

        assertEquals("Volodya", foundUser.getFirstName());
        assertEquals("Kaskiv", foundUser.getLastName());
    }

    @Test
    void findUserByPhone() {
        User us = new User();
        us.setId(111111111L);
        us.setFirstName("Ronald");
        us.setLastName("Duck");
        us.setPhone("066 823 20 30");

        when(userService.findUserByPhone("066 823 20 30")).thenReturn(us);

        User foundUser = userService.findUserByPhone("066 823 20 30");

        assertEquals("Ronald", foundUser.getFirstName());
        assertEquals("Duck", foundUser.getLastName());
    }

    @Test
    void allUsers() {
        User us = new User();
        us.setId(111111111L);
        us.setFirstName("Ronald");
        us.setLastName("Duck");
        us.setPhone("066 823 20 30");

        User us2 = new User();
        us2.setId(111111112L);
        us2.setFirstName("Ronald");
        us2.setLastName("Duck");
        us2.setPhone("066 823 20 30");

        when(userService.allUsers()).thenReturn(List.of(us, us2));

        List<User> users = (List<User>) userService.allUsers();
        assertEquals(2, users.size());
    }
}