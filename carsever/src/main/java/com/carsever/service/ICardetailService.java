package com.carsever.service;

import com.carsever.pojo.Cardetail;
import com.baomidou.mybatisplus.extension.service.IService;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
public interface ICardetailService extends IService<Cardetail> {
    Cardetail getCarDetail_CarById(@PathVariable Integer id);
}
