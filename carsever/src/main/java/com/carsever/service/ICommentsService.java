package com.carsever.service;

import com.carsever.pojo.Comments;
import com.baomidou.mybatisplus.extension.service.IService;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
public interface ICommentsService extends IService<Comments> {
    Comments GetComment_Eva(@PathVariable Integer id);

    List<Comments> GetCommentListByEvaId(@PathVariable Integer id);
}
