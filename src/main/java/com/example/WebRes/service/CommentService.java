package com.example.WebRes.service;

import com.example.WebRes.entity.Comment;

import java.util.List;

public interface CommentService {
    boolean createComment(Comment comment);
    List<Comment> allComments();
    boolean deleteCommentById(Long commentId);
    Comment findFollowerById(long commentId);
    Comment findCommentByContent(String content);
    void UpdateComment(Comment comment);
}
