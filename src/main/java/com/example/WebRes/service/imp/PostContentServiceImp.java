package com.example.WebRes.service.imp;

import com.example.WebRes.entity.PostContent;
import com.example.WebRes.repository.PostContentRepository;
import com.example.WebRes.service.PostContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class PostContentServiceImp implements PostContentService {
    @Autowired
    PostContentRepository postContentRepository;

    @Override
    public boolean createPostContent(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
         PostContent postContent1= new PostContent(fileName, file.getContentType(), file.getBytes());

        postContentRepository.save(postContent1);
        return true;
    }

    @Override
    public PostContent findByName(String name) {

        return postContentRepository.findByName(name);
    }

    @Override
    public List<PostContent> allPostContent() {
        return (List<PostContent>) postContentRepository.findAll();
    }

    @Override
    public boolean deletePostContentById(Long postContentId) {
        return false;
    }
}
