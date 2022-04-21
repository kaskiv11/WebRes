package com.example.WebRes.service;

import com.example.WebRes.entity.Category;

import java.util.List;

public interface CategoryService {
    Category findByTitle(String title);
    Category findCategoryById(Long id);
    boolean createCategory(Category category);
    List<Category> allCategories();
    boolean deleteCategoryById(Long commentId);
    void UpdateCategory(Category category);
}
