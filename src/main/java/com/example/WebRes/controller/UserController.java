package com.example.WebRes.controller;

import com.example.WebRes.entity.Post;
import com.example.WebRes.entity.User;
import com.example.WebRes.message.FileUploadUtil;
import com.example.WebRes.message.ResponseMessage;
import com.example.WebRes.service.imp.PostContentServiceImp;
import com.example.WebRes.service.imp.PostServiceImp;
import com.example.WebRes.service.imp.UserServiceImp;
import lombok.AllArgsConstructor;

import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.view.RedirectView;

import java.io.IOException;
import java.util.List;
import java.util.logging.Logger;

@Controller
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {

    @Autowired
    private UserServiceImp userService;
    @Autowired
    PostServiceImp postService;
    @Autowired
    PostContentServiceImp postContentService;

    static final Logger log = Logger.getLogger(String.valueOf(UserController.class));

    @PostMapping("/post/save")
    public RedirectView saveUser(Post post,
                                 @RequestParam("image") MultipartFile multipartFile) throws IOException {
        log.info("Save post method post");

        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        post.setImage(fileName);
        Post savedPost = postService.createPost(post);

        String uploadDir = "post-photos/" + savedPost.getId();

        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);

        return new RedirectView("/posts", true);
    }

    @GetMapping("/all-posts")
    public void ListPostGet(Model model){

        List<Post> postList= postService.allPost();
        model.addAttribute("users",postList);
    }


    @GetMapping("/user-update/{id}")
    public void updateUserForm(@PathVariable("id") Long id, Model model){
        User user = userService.findUserById(id);
        model.addAttribute("user", user);
    }

    @PostMapping("/user-update")
    public void updateUser(User user){
        userService.createUser(user);
    }

    @GetMapping("post-delete/{id}")
    public String deleteUser(@PathVariable("id") Long id){
        postService.deletePostById(id);
        return "redirect:/all-posts";
    }


}
