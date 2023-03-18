package com.carsever.service.impl;

import com.carsever.pojo.Comments;
import com.carsever.dao.CommentsDao;
import com.carsever.service.ICommentsService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
@Service
public class CommentsServiceImpl extends ServiceImpl<CommentsDao, Comments> implements ICommentsService {


    @Autowired
    CommentsDao commentsDao;

    @Override
    public Comments GetComment_Eva( @PathVariable Integer id) {
        return commentsDao.GetComment_Eva(id);
    }
}
