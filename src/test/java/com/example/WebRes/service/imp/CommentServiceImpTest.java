package com.example.WebRes.service.imp;

import com.example.WebRes.entity.Comment;
import com.example.WebRes.entity.Enum.Status;
import com.example.WebRes.entity.Post;
import com.example.WebRes.entity.User;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class CommentServiceImpTest {

    @Mock
    CommentServiceImp commentServiceImp;

    @Test
    void createComment() {
        Post post = new Post();
        post.setId(111111111L);
        post.setStatus(Status.ACTIVE);
        post.setTitle("Tech");
        post.setContent("Tech Content");

        User user = new User();
        user.setFirstName("Test");
        user.setLastName("Test");

        Comment comment = new Comment();
        comment.setId(111111112L);
        comment.setUser(user);
        comment.setPost(post);

        when(commentServiceImp.createComment(comment)).thenReturn(true);

        Boolean result = commentServiceImp.createComment(comment);

        assertEquals(true, result);
    }

    @Test
    void allComments() {
        Post post = new Post();
        post.setId(111111111L);
        post.setStatus(Status.ACTIVE);
        post.setTitle("Tech");
        post.setContent("Tech Content");

        User user = new User();
        user.setFirstName("Test");
        user.setLastName("Test");

        Comment comment = new Comment();
        comment.setId(111111112L);
        comment.setUser(user);
        comment.setPost(post);

        Comment secondComment = new Comment();
        secondComment.setId(111111112L);
        secondComment.setUser(user);
        secondComment.setPost(post);

        when(commentServiceImp.allComments()).thenReturn(List.of(comment, secondComment));

        List<Comment> result = commentServiceImp.allComments();

        assertEquals(2, result.size());
    }

    @Test
    void deleteCommentById() {
        Post post = new Post();
        post.setId(111111111L);
        post.setStatus(Status.ACTIVE);
        post.setTitle("Tech");
        post.setContent("Tech Content");

        User user = new User();
        user.setFirstName("Test");
        user.setLastName("Test");

        Comment comment = new Comment();
        comment.setId(111111112L);
        comment.setUser(user);
        comment.setPost(post);

        when(commentServiceImp.deleteCommentById(111111112L)).thenReturn(true);

        Boolean result = commentServiceImp.deleteCommentById(111111112L);

        assertEquals(true, result);
    }

    @Test
    void findFollowerById() {
        Post post = new Post();
        post.setId(111111111L);
        post.setStatus(Status.ACTIVE);
        post.setTitle("Tech");
        post.setContent("Tech Content");

        User user = new User();
        user.setFirstName("Test");
        user.setLastName("Test");

        Comment comment = new Comment();
        comment.setId(111111112L);
        comment.setUser(user);
        comment.setPost(post);

        when(commentServiceImp.findCommentById(111111112L)).thenReturn(comment);

        Comment result = commentServiceImp.findCommentById(111111112L);

        assertEquals(111111112L, result.getId());
    }

}