package com.carsever.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BlogServiceImpl implements BlogService {

    @Autowired
    BlogDao blogDao;

    @Override
    public Blog getBlogById(Integer id) {
        return blogDao.getBlogById(id);
    }
}
