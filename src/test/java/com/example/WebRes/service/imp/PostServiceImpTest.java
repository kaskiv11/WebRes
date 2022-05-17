package com.example.WebRes.service.imp;

import com.example.WebRes.entity.Enum.Status;
import com.example.WebRes.entity.Post;
import com.example.WebRes.entity.PostContent;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class PostServiceImpTest {

    @Mock
    PostServiceImp postService;

    @Test
    void createPost() {
        Post post = new Post();
        post.setId(111111111L);
        post.setStatus(Status.ACTIVE);

        PostContent techContent = new PostContent();
        PostContent mathContent = new PostContent();

        post.setPostContents(List.of(techContent, mathContent));

        when(postService.createPost(post)).thenReturn(true);

        boolean isCreated = postService.createPost(post);

        assertTrue(isCreated);

    }

    @Test
    void findByTitle() {
        Post post = new Post();
        post.setId(111111111L);
        post.setStatus(Status.ACTIVE);
        post.setTitle("Tech");

        PostContent techContent = new PostContent();
        PostContent mathContent = new PostContent();

        post.setPostContents(List.of(techContent, mathContent));

        when(postService.findByTitle("Tech")).thenReturn(post);

        Post foundPost = postService.findByTitle("Tech");

        assertEquals(Status.ACTIVE, foundPost.getStatus());
    }

    @Test
    void findByPostContents() {
        Post post = new Post();
        post.setId(111111111L);
        post.setStatus(Status.ACTIVE);
        post.setTitle("Tech");
        post.setContent("Tech Content");

        PostContent techContent = new PostContent();
        PostContent mathContent = new PostContent();

        post.setPostContents(List.of(techContent, mathContent));

        when(postService.findByPostContents("Tech Content")).thenReturn(post);

        Post foundPost = postService.findByPostContents("Tech Content");

        assertEquals(Status.ACTIVE, foundPost.getStatus());
    }

    @Test
    void allPost() {
        Post techPost = new Post();
        techPost.setId(111111111L);
        techPost.setStatus(Status.ACTIVE);
        techPost.setTitle("Tech");
        techPost.setContent("Tech Content");

        PostContent techContent = new PostContent();
        PostContent mathContent = new PostContent();

        techPost.setPostContents(List.of(techContent, mathContent));


        when(postService.allPost()).thenReturn(List.of(techPost));

        List<Post> foundPosts = postService.allPost();

        assertEquals(1, foundPosts.size());
    }

    @Test
    void deletePostById() {
        Post post = new Post();
        post.setId(111111111L);
        post.setStatus(Status.ACTIVE);
        post.setTitle("Tech");
        post.setContent("Tech Content");

        PostContent techContent = new PostContent();
        PostContent mathContent = new PostContent();

        post.setPostContents(List.of(techContent, mathContent));

        when(postService.deletePostById(111111111L)).thenReturn(true);

        boolean isDeleted = postService.deletePostById(111111111L);

        assertTrue(isDeleted);
    }
}