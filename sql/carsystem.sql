/*
 Navicat Premium Data Transfer

 Source Server         : carsystem
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : carsystem

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 09/03/2023 02:32:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for carbrands
-- ----------------------------
DROP TABLE IF EXISTS `carbrands`;
CREATE TABLE `carbrands`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `label` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of carbrands
-- ----------------------------

-- ----------------------------
-- Table structure for children
-- ----------------------------
DROP TABLE IF EXISTS `children`;
CREATE TABLE `children`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `key` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `grade` int NULL DEFAULT NULL,
  `pagepermission` int NULL DEFAULT NULL,
  `rightId` int NULL DEFAULT NULL,
  `routepermission` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1024 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of children
-- ----------------------------
INSERT INTO `children` VALUES (3, '添加用户', '/user/add', 2, NULL, 2, NULL);
INSERT INTO `children` VALUES (4, '删除用户', '/user/delete', 2, NULL, 2, NULL);
INSERT INTO `children` VALUES (5, '修改用户', '/user/update', 2, NULL, 2, NULL);
INSERT INTO `children` VALUES (6, '拉黑用户', '/user/block', 2, NULL, 2, NULL);
INSERT INTO `children` VALUES (7, '用户列表', '/user/list', 2, 1, 2, NULL);
INSERT INTO `children` VALUES (9, '汽车列表', '/car/list', 2, 1, 7, NULL);
INSERT INTO `children` VALUES (10, '汽车添加', '/car/add', 2, NULL, 7, NULL);
INSERT INTO `children` VALUES (11, '汽车修改', '/car/update', 2, NULL, 7, NULL);
INSERT INTO `children` VALUES (12, '汽车删除', '/car/delete', 2, NULL, 7, NULL);
INSERT INTO `children` VALUES (13, '汽车租车', '/car/rental', 2, NULL, 7, NULL);
INSERT INTO `children` VALUES (14, '汽车细节', '/car/detail/:id', 2, NULL, 7, 1);
INSERT INTO `children` VALUES (16, '租赁状态', '/rental/list', 2, 1, 14, NULL);
INSERT INTO `children` VALUES (17, '租赁审核', '/rental/check', 2, NULL, 14, NULL);
INSERT INTO `children` VALUES (18, '租赁记录', '/rental/record', 2, NULL, 14, NULL);
INSERT INTO `children` VALUES (19, '租赁取消', '/rental/delete', 2, NULL, 14, NULL);
INSERT INTO `children` VALUES (20, '租赁细节', '/rental/detail/:id', 2, NULL, 14, 1);
INSERT INTO `children` VALUES (22, '评价列表', '/appraise/list', 2, 1, 20, NULL);
INSERT INTO `children` VALUES (23, '评价细节', '/appraise/detail/:id', 2, NULL, 20, 1);

-- ----------------------------
-- Table structure for historyorders
-- ----------------------------
DROP TABLE IF EXISTS `historyorders`;
CREATE TABLE `historyorders`  (
  `id` int NOT NULL,
  `hisid` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `carId` int NULL DEFAULT NULL,
  `userId` int NULL DEFAULT NULL,
  `carname` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `orderState` int NULL DEFAULT NULL,
  `startdate` date NULL DEFAULT NULL,
  `endingdate` date NULL DEFAULT NULL,
  `totalDay` int NULL DEFAULT NULL,
  `totalPrice` double NULL DEFAULT NULL,
  `insurancedate` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `insurancedatePrice` double NULL DEFAULT NULL,
  `totalAllPrice` double NULL DEFAULT NULL,
  `deposit` int NULL DEFAULT NULL,
  `clientMessage` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `descriptions` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT 'descriptions',
  `other` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `extraExpense` double NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of historyorders
-- ----------------------------
INSERT INTO `historyorders` VALUES (1, 'C2122-12300102-24', 2, 5, '奥迪q3', '大力', '1235855555', 3, '2021-12-30', '2022-01-02', 4, 2664, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失', 100, 6764, 4000, '', '没有问题', '无', 0);
INSERT INTO `historyorders` VALUES (2, 'C2222-11131216-64', 6, 4, '奔驰G63', '大力', '1235855555', 3, '2022-11-13', '2022-12-16', 34, 61200, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失,每座乘客保障5万', 120, 66470, 5000, '', ' ', '超速', 150);
INSERT INTO `historyorders` VALUES (3, 'C2222-11131113-64', 6, 4, '奔驰G63', '大力', '1235855555', 4, '2022-11-13', '2022-11-13', 1, 1800, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失', 100, 6900, 5000, '选错日期', '已取消订单', '', 0);
INSERT INTO `historyorders` VALUES (4, 'C2222-08310905-55', 5, 5, '保时捷718', '天命', '1235855555', 5, '2022-08-31', '2022-09-05', 5, 9000, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失,三者保障增至100万,每座乘客保障5万', 180, 15180, 6000, '有点后悔了', NULL, '', 0);
INSERT INTO `historyorders` VALUES (5, 'C2222-11301209-45', 4, 5, '五菱宏光plus', '天命', '1235855555', 0, '2022-11-30', '2022-12-09', 10, 2500, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失,每座乘客保障5万', 120, 4120, 1500, NULL, NULL, NULL, 0);
INSERT INTO `historyorders` VALUES (6, 'C2222-11301205-37', 3, 7, '宝马x3', '大大', '1235855555', 2, '2022-11-30', '2022-12-05', 6, 3000, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失,三者保障增至100万', 160, 7160, 4000, '', '', NULL, 0);
INSERT INTO `historyorders` VALUES (7, 'C2222-11231123-75', 7, 5, '宝马430i', '天命', '1235855555', 3, '2022-11-23', '2022-11-23', 1, 999, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失', 100, 7099, 6000, NULL, NULL, NULL, 0);

-- ----------------------------
-- Table structure for rights
-- ----------------------------
DROP TABLE IF EXISTS `rights`;
CREATE TABLE `rights`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `key` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `grade` int NULL DEFAULT NULL,
  `pagepermission` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1022 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of rights
-- ----------------------------
INSERT INTO `rights` VALUES (1, '首页', '/home', 1, 1);
INSERT INTO `rights` VALUES (2, '用户管理', '/user', 1, 1);
INSERT INTO `rights` VALUES (8, '汽车管理', '/car', 1, 1);
INSERT INTO `rights` VALUES (15, '车辆租赁', '/rental', 1, 1);
INSERT INTO `rights` VALUES (21, '评价管理', '/appraise', 1, 1);
INSERT INTO `rights` VALUES (1017, 'TegSfPLT4O', 'UHltBbFLB4', 262, 973);
INSERT INTO `rights` VALUES (1018, '6zbXNMOwRk', 'vycuAgh536', 687, 478);
INSERT INTO `rights` VALUES (1019, 'zrRhBPE8no', 'SyRG8SK3Nh', 962, 412);
INSERT INTO `rights` VALUES (1020, 'vcxSmt4W7m', 'leNWQtQ0rC', 919, 582);
INSERT INTO `rights` VALUES (1021, '170jP0v6Q6', 'bAc8AW93ui', 157, 158);

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` int NOT NULL,
  `roleName` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `roleType` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (0, '超级管理员', 0);
INSERT INTO `roles` VALUES (1, '管理员', 1);
INSERT INTO `roles` VALUES (2, '销售', 2);
INSERT INTO `roles` VALUES (3, '客户', 3);

-- ----------------------------
-- Table structure for roles_children
-- ----------------------------
DROP TABLE IF EXISTS `roles_children`;
CREATE TABLE `roles_children`  (
  `id` int NOT NULL,
  `childrenId` int NULL DEFAULT NULL,
  `roleId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of roles_children
-- ----------------------------
INSERT INTO `roles_children` VALUES (1, 3, 0);
INSERT INTO `roles_children` VALUES (2, 4, 0);
INSERT INTO `roles_children` VALUES (3, 5, 0);
INSERT INTO `roles_children` VALUES (4, 6, 0);
INSERT INTO `roles_children` VALUES (5, 7, 0);
INSERT INTO `roles_children` VALUES (6, 9, 0);
INSERT INTO `roles_children` VALUES (7, 10, 0);
INSERT INTO `roles_children` VALUES (8, 11, 0);
INSERT INTO `roles_children` VALUES (9, 12, 0);
INSERT INTO `roles_children` VALUES (10, 13, 0);
INSERT INTO `roles_children` VALUES (11, 14, 0);
INSERT INTO `roles_children` VALUES (12, 16, 0);
INSERT INTO `roles_children` VALUES (13, 17, 0);
INSERT INTO `roles_children` VALUES (14, 18, 0);
INSERT INTO `roles_children` VALUES (15, 19, 0);
INSERT INTO `roles_children` VALUES (16, 20, 0);
INSERT INTO `roles_children` VALUES (17, 22, 0);
INSERT INTO `roles_children` VALUES (18, 23, 0);
INSERT INTO `roles_children` VALUES (19, 3, 1);
INSERT INTO `roles_children` VALUES (20, 4, 1);
INSERT INTO `roles_children` VALUES (21, 5, 1);
INSERT INTO `roles_children` VALUES (22, 6, 1);
INSERT INTO `roles_children` VALUES (23, 7, 1);
INSERT INTO `roles_children` VALUES (24, 9, 1);
INSERT INTO `roles_children` VALUES (25, 10, 1);
INSERT INTO `roles_children` VALUES (26, 11, 1);
INSERT INTO `roles_children` VALUES (27, 12, 1);
INSERT INTO `roles_children` VALUES (28, 13, 1);
INSERT INTO `roles_children` VALUES (29, 14, 1);
INSERT INTO `roles_children` VALUES (30, 16, 1);
INSERT INTO `roles_children` VALUES (31, 17, 1);
INSERT INTO `roles_children` VALUES (32, 18, 1);
INSERT INTO `roles_children` VALUES (33, 19, 1);
INSERT INTO `roles_children` VALUES (34, 20, 1);
INSERT INTO `roles_children` VALUES (35, 22, 1);
INSERT INTO `roles_children` VALUES (36, 23, 1);
INSERT INTO `roles_children` VALUES (37, 5, 2);
INSERT INTO `roles_children` VALUES (38, 6, 2);
INSERT INTO `roles_children` VALUES (39, 7, 2);
INSERT INTO `roles_children` VALUES (40, 9, 2);
INSERT INTO `roles_children` VALUES (41, 10, 2);
INSERT INTO `roles_children` VALUES (42, 11, 2);
INSERT INTO `roles_children` VALUES (43, 12, 2);
INSERT INTO `roles_children` VALUES (44, 13, 2);
INSERT INTO `roles_children` VALUES (45, 14, 2);
INSERT INTO `roles_children` VALUES (46, 16, 2);
INSERT INTO `roles_children` VALUES (47, 17, 2);
INSERT INTO `roles_children` VALUES (48, 18, 2);
INSERT INTO `roles_children` VALUES (49, 19, 2);
INSERT INTO `roles_children` VALUES (50, 20, 2);
INSERT INTO `roles_children` VALUES (51, 22, 2);
INSERT INTO `roles_children` VALUES (52, 23, 2);
INSERT INTO `roles_children` VALUES (53, 5, 3);
INSERT INTO `roles_children` VALUES (54, 7, 3);
INSERT INTO `roles_children` VALUES (55, 9, 3);
INSERT INTO `roles_children` VALUES (56, 14, 3);
INSERT INTO `roles_children` VALUES (57, 16, 3);
INSERT INTO `roles_children` VALUES (58, 17, 3);
INSERT INTO `roles_children` VALUES (59, 18, 3);
INSERT INTO `roles_children` VALUES (60, 19, 3);
INSERT INTO `roles_children` VALUES (61, 20, 3);
INSERT INTO `roles_children` VALUES (62, 22, 3);
INSERT INTO `roles_children` VALUES (63, 23, 3);

-- ----------------------------
-- Table structure for roles_rights
-- ----------------------------
DROP TABLE IF EXISTS `roles_rights`;
CREATE TABLE `roles_rights`  (
  `id` int NOT NULL,
  `rightId` int NULL DEFAULT NULL,
  `roleId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of roles_rights
-- ----------------------------
INSERT INTO `roles_rights` VALUES (1, 1, 0);
INSERT INTO `roles_rights` VALUES (2, 2, 0);
INSERT INTO `roles_rights` VALUES (3, 8, 0);
INSERT INTO `roles_rights` VALUES (4, 15, 0);
INSERT INTO `roles_rights` VALUES (5, 21, 0);
INSERT INTO `roles_rights` VALUES (6, 1, 1);
INSERT INTO `roles_rights` VALUES (7, 2, 1);
INSERT INTO `roles_rights` VALUES (8, 8, 1);
INSERT INTO `roles_rights` VALUES (9, 15, 1);
INSERT INTO `roles_rights` VALUES (10, 21, 1);
INSERT INTO `roles_rights` VALUES (11, 1, 2);
INSERT INTO `roles_rights` VALUES (12, 2, 2);
INSERT INTO `roles_rights` VALUES (13, 8, 2);
INSERT INTO `roles_rights` VALUES (14, 15, 2);
INSERT INTO `roles_rights` VALUES (15, 21, 2);
INSERT INTO `roles_rights` VALUES (16, 1, 3);
INSERT INTO `roles_rights` VALUES (17, 2, 3);
INSERT INTO `roles_rights` VALUES (18, 8, 3);
INSERT INTO `roles_rights` VALUES (19, 15, 3);
INSERT INTO `roles_rights` VALUES (20, 21, 3);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `roleId` int NOT NULL,
  `name` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `block` tinyint NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `username`, `password`, `roleId`, `name`, `phone`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'admin', 'admin', 0, '本杰明', '7039833096', NULL);
INSERT INTO `users` VALUES (2, 'react0', '123', 1, '力达力', '1235855555', 0);
INSERT INTO `users` VALUES (3, '556', '123', 2, '巨力', '1235855555', 0);
INSERT INTO `users` VALUES (4, 'feichi', '123', 3, '大力', '65165', 0);
INSERT INTO `users` VALUES (5, 'chi', '123', 3, '天命', '1235855555', 0);

SET FOREIGN_KEY_CHECKS = 1;
