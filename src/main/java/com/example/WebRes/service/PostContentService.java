package com.example.WebRes.service;

import com.example.WebRes.entity.PostContent;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface PostContentService {
    boolean createPostContent(MultipartFile file) throws IOException;
    PostContent findByName(String name);
    List<PostContent> allPostContent();

    boolean deletePostContentById(Long postContentId);
}
