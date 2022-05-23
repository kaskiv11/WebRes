package com.example.WebRes.service.imp;

import com.example.WebRes.entity.Location;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class LocationServiceImpTest {

    @Mock
    LocationServiceImp locationService;
    @Test
    void createLocation() {
        Location location = new Location();
        location.setCity("Lviv");
        location.setId(111111111L);
        location.setCountry("Ukraine");
        location.setPortalCode("81100");

        when(locationService.createLocation(location)).thenReturn(true);

        Boolean result = locationService.createLocation(location);

        assertEquals(true, result);
    }

    @Test
    void findByCity() {
        Location location = new Location();
        location.setCity("Lviv");
        location.setId(111111111L);
        location.setCountry("Ukraine");
        location.setPortalCode("81100");

        when(locationService.findByCity("Lviv")).thenReturn(location);

        Location foundLocation = locationService.findByCity("Lviv");

        assertEquals(111111111L, foundLocation.getId());
    }

    @Test
    void findByCountry() {
        Location location = new Location();
        location.setCity("Lviv");
        location.setId(111111111L);
        location.setCountry("Ukraine");
        location.setPortalCode("81100");

        when(locationService.findByCountry("Ukraine")).thenReturn(location);

        Location foundLocation = locationService.findByCountry("Ukraine");

        assertEquals(111111111L, foundLocation.getId());
    }

    @Test
    void findByStreet() {
        Location location = new Location();
        location.setCity("Lviv");
        location.setId(111111111L);
        location.setCountry("Ukraine");
        location.setPortalCode("81100");
        location.setStreet("random street");

        when(locationService.findByStreet("random street")).thenReturn(location);

        Location foundLocation = locationService.findByStreet("random street");

        assertEquals(111111111L, foundLocation.getId());
    }

    @Test
    void deleteLocationId() {
        Location location = new Location();
        location.setCity("Lviv");
        location.setId(111111111L);
        location.setCountry("Ukraine");
        location.setPortalCode("81100");

        when(locationService.deleteLocationId(111111111L)).thenReturn(true);

        Boolean result = locationService.deleteLocationId(111111111L);

        assertEquals(true, result);

    }

    @Test
    void allLocations() {
        Location lvivLocation = new Location();
        lvivLocation.setCity("Lviv");
        lvivLocation.setId(111111111L);
        lvivLocation.setCountry("Ukraine");
        lvivLocation.setPortalCode("81100");

        Location tokyoLocation = new Location();
        tokyoLocation.setCity("Tokyo");
        tokyoLocation.setId(111111112L);
        tokyoLocation.setCountry("Japan");
        tokyoLocation.setPortalCode("34321");

        when(locationService.allLocations()).thenReturn(List.of(lvivLocation, tokyoLocation));

        List<Location> locations = locationService.allLocations();
        assertEquals(2, locations.size());
    }
}