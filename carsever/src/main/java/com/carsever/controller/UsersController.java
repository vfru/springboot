package com.carsever.controller;


import com.carsever.pojo.Users;
import com.carsever.service.IUsersService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author carSystem
 * @since 2023-03-12
 */
@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private IUsersService usersService;

    //得到用户的全部列表
    @GetMapping("/list")
    public List<Users> list() {
        return usersService.list();
    }

    //拉黑
    @PatchMapping("/{id}")
    public boolean block(@PathVariable Integer id) {
        Users blockUser = usersService.getById(id);
        blockUser.setBlock(1);
        return usersService.updateById(blockUser);
    }

    //删除
    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable Integer id) {
        return usersService.removeById(id);
    }

    //增加
    @PostMapping
    public boolean save(@RequestBody Users user){
        return usersService.save(user);
    }

    //修改
    @PatchMapping
    public boolean update(@RequestBody Users user){
       return usersService.updateById(user);
    }



}

