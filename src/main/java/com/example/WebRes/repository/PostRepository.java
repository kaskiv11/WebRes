package com.example.WebRes.repository;


import com.example.WebRes.entity.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends CrudRepository<Post, Long> {
    Post findByTitle(String title);
    Post findByPostContents(String content);


}
