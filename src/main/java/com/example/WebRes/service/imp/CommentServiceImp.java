package com.example.WebRes.service.imp;

import com.example.WebRes.entity.Comment;
import com.example.WebRes.repository.CommentRepository;
import com.example.WebRes.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImp implements CommentService {
    @Autowired
    CommentRepository commentRepository;

    @Override
    public boolean createComment(Comment comment) {
         commentRepository.save(comment);
        return true;
    }

    @Override
    public List<Comment> allComments() {
        return (List<Comment>) commentRepository.findAll();
    }

    @Override
    public boolean deleteCommentById(Long commentId) {
        if (commentRepository.findById(commentId).isPresent()) {
            commentRepository.deleteById(commentId);
            return true;
        }
        return false;
    }

    @Override
    public Comment findCommentById(long commentId) {
        return commentRepository.findCommentById(commentId);
    }

    @Override
    public Comment findCommentByContent(String content) {
        return commentRepository.findByContent(content);
    }

    @Override
    public void UpdateComment(Comment comment) {
        commentRepository.save(comment);
    }
}
