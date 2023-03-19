package com.carsever.dao;

import com.carsever.pojo.Children;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
@Mapper
public interface ChildrenDao extends BaseMapper<Children> {

    @Select("SELECT * from children")
    public List<Children> GetChildrenList();

}
