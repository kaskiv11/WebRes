package com.example.WebRes.service;

import com.example.WebRes.entity.Post;
import com.example.WebRes.entity.User;

import java.util.Date;
import java.util.List;

public interface PostService {
    boolean createPost(Post post);
    Post findByTitle(String title);
    Post findByPostContents(String content);
    List<Post> allPost();

    boolean deletePostById(Long postId);
}
