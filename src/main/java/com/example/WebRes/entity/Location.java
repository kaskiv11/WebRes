package com.example.WebRes.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "location")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "city")
    @Size(min=2, message = "Не менше 5 знаків")
    private String city;

    @Column(name = "street")
    private String street;

    @Column(name = "portal_code")
    private String portalCode;


    @OneToMany(mappedBy = "location", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<User> users;

}
