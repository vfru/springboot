# 七、侧边栏和顶部TopHeader


###1.发送原来的axios请求查看获得的数据格式

![](C:\Users\Learn\Desktop\CarSystem\springboot\新建文件夹 (2)\侧边栏.png)

###2.新增pojo中Rights类的属性
####新增 childrenList 属性,并且对其进行注释表示当前属性不是数据库的字段，但在项目中必须使用。
```
@Data
@EqualsAndHashCode(callSuper = false)
public class Rights implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    private String label;

    private String key;

    private Integer grade;

    private Integer pagepermission;

    @TableField(exist = false)//不是数据库的字段
    private List<Children> childrenList;

}
```

###3.通过mysql命令得到数据,并按要求格式返回
####a. 在rightsDao接口定义一个方法
####b. 通过xml映射文件实现方法
####c. 左连接把两个表连接得到想要的数据,再将查询到的数据按要求的格式返回
####d. 在IRightsService接口定义方法
####e. 在impl中实现方法
####f. 在RightsController对请求进行响应,返回侧边栏的数据

```
/*------RightsDao------*/
@Mapper
public interface RightsDao extends BaseMapper<Rights> {

     List<Rights> getSideMenuList();

     List<Rights> GetRightsList();
}
```

```
/*------RightsDao.xml------*/
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.carsever.dao.RightsDao">
    <resultMap id="rights_childrenMap" type="com.carsever.pojo.Rights">
        <!--
            手动指定字段与实体属性的映射关系
            column 数据表的字段名称
            property 实体类的属性名称
    -->
        <id column="id" property="id"></id>
        <result column="label" property="label"></result>
        <result column="key" property="key"></result>
        <result column="grade" property="grade"></result>
        <result column="pagepermission" property="pagepermission"></result>
        <!--
        配置集合信息
            property 集合名称
            ofType 集合中的数据类型
        -->
        <collection property="childrenList" ofType="com.carsever.pojo.Children">
            <!--封装children的数据-->
            <id column="cid" property="id"></id>
            <result column="clabel" property="label"></result>
            <result column="ckey" property="key"></result>
            <result column="cgrade" property="grade"></result>
            <result column="cpagepermission" property="pagepermission"></result>
            <result column="crightId" property="rightId"></result>
            <result column="croutepermission" property="routepermission"></result>
        </collection>

    </resultMap>

    
    <select id="getSideMenuList" resultMap="rights_childrenMap">
        SELECT *,
               c.id cid,
               c.label clabel,
               c.key ckey, c.grade cgrade,
               c.pagepermission cpagepermission,
               c.rightId crightId,
               c.routepermission croutepermission
        FROM rights r
                 Left JOIN children c ON r.id = c.rightId
    </select>

</mapper>
```

```
/*------IRightsService------*/
public interface IRightsService extends IService<Rights> {
    List<Rights> getSideMenuList();
    List<Rights> GetRightsList();
}
```

```
/*------RightsServiceImpl------*/
@Service
public class RightsServiceImpl extends ServiceImpl<RightsDao, Rights> implements IRightsService {
    @Autowired
    RightsDao rightsDao;
   public List<Rights> getSideMenuList(){
       List<Rights> sideMenuList = rightsDao.getSideMenuList();
       return sideMenuList;
    }
}
```

```
/*------RightsController------*/
@RestController
@RequestMapping("/rights")
public class RightsController {
    @Autowired
    RightsServiceImpl rightsService;
    
    @GetMapping("/children")
    public WebResult GetSideMenuList(){
        List<Rights> list = rightsService.getSideMenuList();
        return WebResult.success(list);
    }
}
```

###4.修改前端 SideMenu.jsx 侧边栏文件
####a. 修改axios请求
####b. 将之前 item.children 改为 item.childrenList

```   useEffect(() => {
        axios.get("/rights/children").then(res => {
            setMenu(res.data.data)
        })
    }, [])




    //筛选pagepermission等于显示页面，有子组件的要用下拉菜单
    const check = (list) => {
        //console.log(list)
        // const list = menu.pagepermission&&checked.includes(menu.key)
        


        return list.map(item => {
            // 要有children属性且大于1，而且要权限中包括的页面
            if (item.childrenList && item.pagepermission && item.childrenList.length > 0 && rights.includes(item.key)) {
                //console.log(item)
                return {
                    key: item.key,
                    icon: iconList[item.key],
                    label: item.label,
                    children: item.childrenList.map(item => {
                        //console.log(item)
                        if (item.pagepermission && rights.includes(item.key)) {
                            return {
                                key: item.key,
                                label: item.label,
                                icon: iconList[item.key],
                            }
                        }
                        return null
                    })
                }
            }
            //首页，或者其他的被权限禁用时
            if (rights.includes(item.key) && item.pagepermission) {
                return {
                    key: item.key,
                    label: item.label,
                    icon: iconList[item.key],
                }
            } else {
                return null
            }

        })
    }
```

###5.在RolesController新增对请求的响应
####根据请求的id获得对应的角色名称
```
@RestController
@RequestMapping("/roles")
public class RolesController {
    @Autowired
    RolesServiceImpl rolesService;
 
 @GetMapping("/{id}")
    public WebResult GetRoleById(@PathVariable Integer id) {
        Roles role = rolesService.getById(id);
        return WebResult.success(role);
    }
    
}
```

###6.修改前端 TopHeader.jsx 文件
```
useEffect(() => {
        axios.get(`/roles/${roleId}`).then(res => {
            setroleName(res.data.data.roleName)
            //console.log(res.data.data)
        })
    }, [roleId])
```