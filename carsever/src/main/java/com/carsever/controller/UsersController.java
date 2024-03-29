package com.carsever.controller;


import com.carsever.pojo.Roles;
import com.carsever.pojo.Users;
import com.carsever.service.IRoles_RightDaoService;
import com.carsever.service.IUsersService;
import com.carsever.service.impl.RolesServiceImpl;
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
    @Autowired
    private IRoles_RightDaoService roles_rightDaoService;
    @Autowired
    private RolesServiceImpl rolesService;


    //登陆
    @PostMapping("/login")
    public WebResult loginIn(@RequestBody Users users) {
        //查询数据库数据
        List list = usersService.lambdaQuery()
                .eq(Users::getUsername, users.getUsername())
                .eq(Users::getPassword, users.getPassword()).list();
        if (list.size() < 1) return WebResult.fail("用户名或密码错误");
        if (list.size() > 1) return WebResult.fail("用户出现异常,请稍后登录");
        Users u = (Users) list.get(0);


        //u.setRights(roles_rightDaoService.GetRoleByNumber(u.getRoleId()));
        u.setRights(rolesService.getRightByRoleId(u.getRoleId()));



        return WebResult.success(u);

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

    //修改
    @PatchMapping
    public WebResult update(@RequestBody Users user) {
        //System.out.println(user);
        if(user.getRoleId()==0)return WebResult.fail("总管理员不能修改");
        boolean updateUser = usersService.updateById(user);
        return updateUser == true ? WebResult.success("修改成功") : WebResult.fail("");
    }

    //拉黑
    @PatchMapping("/{id}")
    public WebResult block(@PathVariable Integer id, @RequestBody Users users) {
        //得到相对id的用户的数据
        Users blockUser = usersService.getById(id);
        if (blockUser == null) {
            return WebResult.fail("未找到用户");
        }else if (blockUser.getRoleId()==0){
            return WebResult.fail("总管理员无法拉黑");
        }
        //将数据的Block属性设置为1    0为没拉黑，1为拉黑
        int block = users.getBlock();
        if (block == 1 || block == 0) {
            blockUser.setBlock(block);
            //更新数据库
            usersService.updateById(blockUser);
            return WebResult.success("已成功拉黑用户");
        } else {
            return WebResult.fail("修改的数据有误");
        }
    }

    //删除
    @DeleteMapping("/{id}")
    public WebResult delete(@PathVariable Integer id) {
        Users users = usersService.getById(id);
        if (users.getRoleId()==0)return WebResult.fail("不能删除总管理员");
        boolean remove = usersService.removeById(id);
        return remove == true ? WebResult.success() : WebResult.fail();
    }

    //增加用户
    @PostMapping
    public WebResult save(@RequestBody Users user) {

        if (user.getRoleId()==0) return WebResult.fail("不能添加总管理员");

        List<Users> list = usersService.lambdaQuery().eq(Users::getUsername, user.getUsername()).list();

        if (list.size() > 0) return WebResult.fail("用户名已被注册");

        boolean Thesave = usersService.save(user);
        //System.out.println(user);
        return Thesave == true ? WebResult.success("注册成功") : WebResult.fail("注册失败");
    }


    //得到一样角色权限的用户
    @GetMapping("/roles/{id}")
    public WebResult getRoles(@PathVariable Integer id) {
        List<Users> list = usersService.getUserByRolesId(id);
        return WebResult.success(list);
    }

    @GetMapping("/roles")
    public WebResult getAllUserRole() {
        List<Users> allUser = usersService.getAllUser();
        return WebResult.success(allUser);
    }

    @GetMapping("/list")
    public WebResult getListAll(){
        List<Users> list = usersService.list();
        return WebResult.success(list);
    }

}

