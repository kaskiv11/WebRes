package com.example.WebRes.repository;

import com.example.WebRes.entity.Location;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends CrudRepository<Location, Long> {
    Location findByCity(String city);
    Location findByCountry(String country);
    Location findByStreet(String street);
}
