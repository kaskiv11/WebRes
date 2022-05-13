package com.example.WebRes.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "post_content")
public class PostContent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotNull
    @Column(name = "name")
    private String name;

    @NotNull
    @Column(name = "type")
    private String type;

    @Column(name = "content")
    private byte[] content;

    @ManyToOne
    @JoinColumn(name="post_id",nullable = false)
    private Post post;


    public PostContent(String fileName, String contentType, byte[] bytes) {
    }
}
