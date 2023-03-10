package com.carsever.service.impl;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.carsever.dao.UserMapper;
import com.carsever.domain.User;
import com.carsever.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper,User> implements UserService {
}
