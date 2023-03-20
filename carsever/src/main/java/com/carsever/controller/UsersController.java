package com.carsever.controller;


import com.carsever.pojo.Roles;
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

        if (list.size() > 1) return WebResult.fail();
        Users u = (Users) list.get(0);

        Users user = usersService.getUser(u.getId());
        System.out.println(u);
        return WebResult.success(user);

    }


    //得到用户的全部列表
    @GetMapping
    public WebResult list() {
        List<Users> list = usersService.list();
        return WebResult.success(list);
    }

    //根据用户id得到用户信息
    @GetMapping("/{id}")
    public WebResult getUserById(@PathVariable Integer id) {
        Users user = usersService.getById(id);
        return WebResult.success(user);
    }

    //拉黑
    @PatchMapping("/{id}")
    public WebResult block(@PathVariable Integer id) {
        //得到相对id的用户的数据
        Users blockUser = usersService.getById(id);
        //将数据的Block属性设置为1    0为没拉黑，1为拉黑
        blockUser.setBlock(1);
        //更新数据库
        usersService.updateById(blockUser);
        return WebResult.success();
    }

    //删除
    @DeleteMapping("/{id}")
    public WebResult delete(@PathVariable Integer id) {
        boolean remove = usersService.removeById(id);
        return remove == true ? WebResult.success() : WebResult.fail();
    }

    //增加
    @PostMapping
    public WebResult save(@RequestBody Users user) {
        boolean Thesave = usersService.save(user);
        return Thesave == true ? WebResult.success() : WebResult.fail();
    }

    //修改
    @PatchMapping
    public WebResult update(@RequestBody Users user) {
        boolean updateUser = usersService.updateById(user);
        return updateUser == true ? WebResult.success() : WebResult.fail();
    }

    //得到一样角色权限的用户
    @PatchMapping("/roles/{id}")
    public WebResult getRoles(@PathVariable Integer id) {
        Users user = usersService.getUser(id);
        return WebResult.success(user);
    }

    @PatchMapping("/roles")
    public WebResult getAllUserRole() {
        List<Users> list = usersService.getAllUser();
        return WebResult.success(list);
    }


}

