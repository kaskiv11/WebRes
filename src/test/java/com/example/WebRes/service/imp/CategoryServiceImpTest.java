package com.example.WebRes.service.imp;

import com.example.WebRes.entity.Category;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class CategoryServiceImpTest {

    @Mock
    CategoryServiceImp categoryService;

    @Test
    void findByTitle() {
        Category category = new Category();
        category.setId(111111111L);
        category.setTitle("Tech");

        when(categoryService.findByTitle("Tech")).thenReturn(category);
        Category foundCategory = categoryService.findByTitle("Tech");

        assertEquals(111111111L, foundCategory.getId());
    }

    @Test
    void findCategoryById() {
        Category category = new Category();
        category.setId(111111111L);
        category.setTitle("Tech");

        when(categoryService.findCategoryById(111111111L)).thenReturn(category);
        Category foundCategory = categoryService.findCategoryById(111111111L);

        assertEquals("Tech", foundCategory.getTitle());
    }

    @Test
    void createCategory() {
        Category category = new Category();
        category.setId(111111111L);
        category.setTitle("Tech");

        when(categoryService.createCategory(category)).thenReturn(true);
        Boolean result = categoryService.createCategory(category);

        assertEquals(true, result);
    }

    @Test
    void allCategories() {
        Category techCategory = new Category();
        techCategory.setId(111111111L);
        techCategory.setTitle("Tech");

        Category mathCategory = new Category();
        mathCategory.setId(111111112L);
        mathCategory.setTitle("Math");

        when(categoryService.allCategories()).thenReturn(List.of(techCategory, mathCategory));
        List<Category> foundCategories = categoryService.allCategories();

        assertEquals(2, foundCategories.size());
    }

    @Test
    void deleteCategoryById() {
        Category category = new Category();
        category.setId(111111111L);
        category.setTitle("Tech");

        when(categoryService.deleteCategoryById(111111111L)).thenReturn(true);
        Boolean result = categoryService.deleteCategoryById(111111111L);

        assertEquals(true, result);
    }
}