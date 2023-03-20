package com.carsever.controller;


import com.carsever.pojo.Comments;
import com.carsever.service.impl.CommentsServiceImpl;
import com.carsever.web.WebResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
@RestController
@RequestMapping("/comments")
public class CommentsController {
    @Autowired
    CommentsServiceImpl commentsService;

    @GetMapping("/evaluates/{id}")
    public WebResult GetComments_EvaluatesById(@PathVariable Integer id) {
        Comments comments = commentsService.GetComment_Eva(id);
        return WebResult.success(comments);
    }

    //新增
    @PostMapping
    public WebResult saveComment(@RequestBody Comments comments) {
        boolean save = commentsService.save(comments);
        return save == true ? WebResult.success() : WebResult.fail();
    }
}

