package com.example.WebRes.repository;

import com.example.WebRes.entity.Follower;
import com.example.WebRes.entity.PostContent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostContentRepository extends CrudRepository<PostContent, Long> {
    PostContent findPostContentByContent(byte[] content);
    PostContent findByName(String name);
}
