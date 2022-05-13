package com.example.WebRes.service.imp;

import com.example.WebRes.entity.Category;
import com.example.WebRes.repository.CategoryRepository;
import com.example.WebRes.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImp implements CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public Category findByTitle(String title) {
        return categoryRepository.findByTitle(title);
    }

    @Override
    public Category findCategoryById(Long id) {
        return categoryRepository.findCategoryById(id);
    }

    @Override
    public boolean createCategory(Category category) {
        categoryRepository.save(category);
        return true;
    }

    @Override
    public List<Category> allCategories() {
        return (List<Category>) categoryRepository.findAll();
    }

    @Override
    public boolean deleteCategoryById(Long commentId) {
        if (categoryRepository.findById(commentId).isPresent()) {
            categoryRepository.deleteById(commentId);
            return true;
        }
        return false;
    }


    @Override
    public void UpdateCategory(Category category) {
        categoryRepository.save(category);
    }
}
