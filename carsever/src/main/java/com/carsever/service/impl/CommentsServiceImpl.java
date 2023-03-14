package com.carsever.service.impl;

import com.carsever.pojo.Comments;
import com.carsever.dao.CommentsDao;
import com.carsever.service.ICommentsService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

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

}
