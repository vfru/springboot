package com.carsever.controller;


import com.carsever.pojo.Users;
import com.carsever.service.IUsersService;
import com.carsever.web.WebResult;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.xml.transform.Result;
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

    //登陆
    @PostMapping("/login")
    public WebResult loginIn(@RequestBody Users users) {
        //查询数据库数据
        List list = usersService.lambdaQuery()
                .eq(Users::getUsername, users.getUsername())
                .eq(Users::getPassword, users.getPassword()).list();

        //是否有数据
        return list.size() > 0 ? WebResult.success(list.get(0)) : WebResult.fail();
    }

    //得到用户的全部列表
    @GetMapping
    public List<Users> list() {
        return usersService.list();
    }

    //根据用户id得到用户信息
    @GetMapping("/{id}")
    public Users getUserById(@PathVariable Integer id) {
        return usersService.getById(id);
    }

    //拉黑
    @PatchMapping("/{id}")
    public boolean block(@PathVariable Integer id) {
        //得到相对id的用户的数据
        Users blockUser = usersService.getById(id);
        //将数据的Block属性设置为1    0为没拉黑，1为拉黑
        blockUser.setBlock(1);
        //更新数据库
        return usersService.updateById(blockUser);
    }

    //删除
    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable Integer id) {
        return usersService.removeById(id);
    }

    //增加
    @PostMapping
    public boolean save(@RequestBody Users user) {
        return usersService.save(user);
    }

    //修改
    @PatchMapping
    public boolean update(@RequestBody Users user) {
        return usersService.updateById(user);
    }

    //得到一样角色权限的用户
    @PatchMapping("/roles/{id}")
    public Users getRoles(@PathVariable Integer id) {
        return usersService.getUser(id);
    }

    @PatchMapping("/roles")
    public List<Users> getAllUserRole() {
        return usersService.getAllUser();
    }


}

