package com.example.WebRes.service.imp;

import com.example.WebRes.entity.Enum.Status;
import com.example.WebRes.entity.Post;
import com.example.WebRes.entity.PostContent;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class PostContentServiceImpTest {

    @Mock
    PostContentServiceImp postContentService;

    @Test
    void findByName() {
        PostContent techContent = new PostContent();
        techContent.setId(111111111L);
        techContent.setName("Tech content");
        techContent.setType("Tech");

        Post post = new Post();
        post.setId(111111111L);
        post.setStatus(Status.ACTIVE);
        post.setTitle("Tech");
        post.setContent("Tech Content");

        techContent.setPost(post);

        when(postContentService.findByName("Tech content")).thenReturn(techContent);

        PostContent foundTechContent = postContentService.findByName("Tech content");

        assertEquals("Tech", foundTechContent.getType());
    }

    @Test
    void allPostContent() {
        PostContent techContent = new PostContent();
        techContent.setId(111111111L);
        techContent.setName("Tech content");
        techContent.setType("Tech");

        PostContent mathContent = new PostContent();
        mathContent.setId(111111112L);
        mathContent.setName("Math content");
        mathContent.setType("Math");

        when(postContentService.allPostContent()).thenReturn(List.of(techContent, mathContent));

        List<PostContent> foundPostsContent = postContentService.allPostContent();
        assertEquals(2, foundPostsContent.size());
    }

    @Test
    void deletePostContentById() {
        PostContent techContent = new PostContent();
        techContent.setId(111111111L);
        techContent.setName("Tech content");
        techContent.setType("Tech");
        when(postContentService.deletePostContentById(111111111L)).thenReturn(true);
        boolean isDeleted = postContentService.deletePostContentById(111111111L);
        assertTrue(isDeleted);
    }

    @Test
    void createPostContent() throws IOException {
        PostContent techContent = new PostContent();
        techContent.setId(111111111L);
        techContent.setType("Tech");

        Post post = new Post();
        post.setId(111111111L);
        post.setStatus(Status.ACTIVE);
        post.setTitle("Tech");
        post.setContent("Tech Content");

        techContent.setPost(post);


        MultipartFile mf = new MultipartFile() {

            @Override
            public String getName() {
                return "Tech";
            }

            @Override
            public String getOriginalFilename() {
                return null;
            }

            @Override
            public String getContentType() {
                return null;
            }

            @Override
            public boolean isEmpty() {
                return false;
            }

            @Override
            public long getSize() {
                return 0;
            }

            @Override
            public byte[] getBytes() throws IOException {
                return new byte[0];
            }

            @Override
            public InputStream getInputStream() throws IOException {
                return null;
            }

            @Override
            public void transferTo(File dest) throws IOException, IllegalStateException {

            }
        };
        when(postContentService.createPostContent(mf)).thenReturn(true);
        boolean isCreated = postContentService.createPostContent(mf);

        assertEquals(true, isCreated);
    }
}