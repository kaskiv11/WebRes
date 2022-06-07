package com.example.WebRes.service.imp;

import com.example.WebRes.entity.Comment;
import com.example.WebRes.entity.Enum.Status;
import com.example.WebRes.entity.Post;
import com.example.WebRes.entity.PostContent;
import com.example.WebRes.repository.PostRepository;
import com.example.WebRes.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostServiceImp implements PostService {
    @Autowired
    PostRepository postRepository;
    @Override
    public Post createPost(Post post) {
        List<PostContent> postContents = new ArrayList<>();
        post.setPostContents(postContents);
        List<Comment> commentList = new ArrayList<>();
        post.setComments(commentList);
        post.setStatus(Status.ACTIVE);
        postRepository.save(post);
        return post;
    }

    @Override
    public Post findByTitle(String title) {
        return postRepository.findByTitle(title);
    }

    @Override
    public Post findByPostContents(String content) {
        return postRepository.findByPostContents(content);
    }

    @Override
    public List<Post> allPost() {
        return (List<Post>) postRepository.findAll();
    }
    @Override
    public boolean deletePostById(Long postId) {
        if (postRepository.findById(postId).isPresent()) {
            postRepository.deleteById(postId);
            return true;
        }
        return false;
    }

}
