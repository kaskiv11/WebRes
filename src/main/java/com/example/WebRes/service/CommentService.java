package com.example.WebRes.service;

import com.example.WebRes.entity.Comment;
import com.example.WebRes.entity.Follower;

import java.util.List;
import java.util.Optional;

public interface CommentService {
    boolean createComment(Comment comment);
    List<Comment> allComments();
    boolean deleteCommentById(Long commentId);
    Comment findFollowerById(long commentId);
    Comment findCommentByContent(String content);
    void UpdateComment(Comment comment);
}
