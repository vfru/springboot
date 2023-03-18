package com.carsever.controller;


import com.carsever.pojo.Comments;
import com.carsever.service.impl.CommentsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 *  前端控制器
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
    public Comments GetComments_EvaluatesById(@PathVariable Integer id){
        return commentsService.GetComment_Eva(id);
    }

    //新增
    @PostMapping
    public Boolean saveComment(@RequestBody Comments comments){
        return commentsService.save(comments);
    }
}

