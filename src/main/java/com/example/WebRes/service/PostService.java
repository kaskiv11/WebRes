package com.example.WebRes.service;

import com.example.WebRes.entity.Post;

import java.util.List;

public interface PostService {
    Post createPost(Post post);
    Post findByTitle(String title);
    Post findByPostContents(String content);
    List<Post> allPost();

    boolean deletePostById(Long postId);
}
