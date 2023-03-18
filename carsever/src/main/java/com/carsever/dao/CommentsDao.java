package com.carsever.dao;

import com.carsever.pojo.Comments;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.bind.annotation.PathVariable;



/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
@Mapper
public interface CommentsDao extends BaseMapper<Comments> {
    Comments GetComment_Eva(@PathVariable Integer id);
}
