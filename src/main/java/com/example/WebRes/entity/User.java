package com.example.WebRes.entity;

import com.example.WebRes.entity.Enum.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "first_name")
    @Size(min=2, message = "Не менше 5 знаків")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "portfolio_description")
    @Size(min=2, message = "Не менше 5 знаків")
    private String portfolioDescription;

    @Column(name = "email")
    @Size(min=2, message = "Не менше 5 знаків")
    @Email
    private String email;

    @Column(name = "password")
    @Size(min=2, message = "Не менше 5 знаків")
    private String password;

    @Transient
    private String passwordConfirm;

    @Column(name = "birthdate")
    private Date birthdate;

    @Column(name = "phone")
    private String phone;

    @Column(name = "isActive")
    private Boolean isActive;

    @Column(name = "isFrozen")
    private Boolean isFrozen;

    //@ElementCollection(targetClass = Role.class, fetch = FetchType.EAGER)
    //@CollectionTable(name = "user_role", joinColumns = @JoinColumn(referencedColumnName = "user_id"))
    //@Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<UserInterest> userInterests;

    @ManyToOne
    @JoinColumn(name="location_id",nullable = false)
    private Location location;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Comment> comments;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Follower> followers;


}
