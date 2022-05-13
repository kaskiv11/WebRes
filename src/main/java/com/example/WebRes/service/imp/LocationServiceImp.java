package com.example.WebRes.service.imp;

import com.example.WebRes.entity.Location;
import com.example.WebRes.entity.User;
import com.example.WebRes.repository.LocationRepository;
import com.example.WebRes.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LocationServiceImp implements LocationService {
    @Autowired
    private LocationRepository locationRepository;
    @Override
    public boolean createLocation(Location location) {
        Location locationFromDB = locationRepository.findByStreet(location.getStreet());
        if (locationFromDB != null) {
            return false;
        }
        List<User> userList = new ArrayList<>();
        location.setUsers(userList);
        locationRepository.save(location);
        return true;
    }

    @Override
    public Location findByCity(String city) {

        return locationRepository.findByCity(city);
    }

    @Override
    public Location findByCountry(String country) {
        return locationRepository.findByCountry(country);
    }

    @Override
    public Location findByStreet(String street) {
        return locationRepository.findByStreet(street);
    }

    @Override
    public boolean deleteLocationId(Long id) {
        if (locationRepository.findById(id).isPresent()) {
            locationRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public List<Location> allLocations() {
        return (List<Location>) locationRepository.findAll();
    }
}
