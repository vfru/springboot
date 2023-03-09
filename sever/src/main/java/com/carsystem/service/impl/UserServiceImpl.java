package com.carsystem.service.impl;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.carsystem.mapper.UserMapper;
import com.carsystem.pojo.User;
import com.carsystem.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

}
