package com.example.WebRes.service;

import com.example.WebRes.entity.User;
import org.springframework.stereotype.Service;


import com.example.WebRes.entity.Location;

import java.util.List;
@Service
public interface LocationService {
    boolean createLocation(Location location);
    Location findByCity(String city);
    Location findByCountry(String country);
    Location findByStreet(String street);
    boolean deleteLocationId(Long id);
    List<Location> allLocations();
}
