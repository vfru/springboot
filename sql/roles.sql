/*
 Navicat Premium Data Transfer

 Source Server         : carsystem
 Source Server Type    : MySQL
 Source Server Version : 80032 (8.0.32)
 Source Host           : localhost:3306
 Source Schema         : carsystem

 Target Server Type    : MySQL
 Target Server Version : 80032 (8.0.32)
 File Encoding         : 65001

 Date: 04/04/2023 17:12:15
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for role_0
-- ----------------------------
DROP TABLE IF EXISTS `role_0`;
CREATE TABLE `role_0`  (
  `id` int NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `key` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `grade` int NULL DEFAULT NULL,
  `pagepermission` int NULL DEFAULT NULL,
  `routepermission` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of role_0
-- ----------------------------
INSERT INTO `role_0` VALUES (1, '首页', '/home', 1, 1, NULL);
INSERT INTO `role_0` VALUES (2, '用户管理', '/user', 1, 1, NULL);
INSERT INTO `role_0` VALUES (3, '修改用户', '/user/update', 2, NULL, NULL);
INSERT INTO `role_0` VALUES (4, '拉黑用户', '/user/block', 2, NULL, NULL);
INSERT INTO `role_0` VALUES (5, '删除用户', '/user/delete', 2, NULL, NULL);
INSERT INTO `role_0` VALUES (6, '添加用户', '/user/add', 2, NULL, NULL);
INSERT INTO `role_0` VALUES (7, '用户列表', '/user/list', 2, 1, NULL);
INSERT INTO `role_0` VALUES (8, '汽车管理', '/car', 1, 1, NULL);
INSERT INTO `role_0` VALUES (9, '汽车列表', '/car/list', 2, 1, NULL);
INSERT INTO `role_0` VALUES (10, '汽车添加', '/car/add', 2, NULL, NULL);
INSERT INTO `role_0` VALUES (11, '汽车修改', '/car/update', 2, NULL, NULL);
INSERT INTO `role_0` VALUES (12, '汽车删除', '/car/delete', 2, NULL, NULL);
INSERT INTO `role_0` VALUES (13, '汽车租车', '/car/rental', 2, NULL, NULL);
INSERT INTO `role_0` VALUES (14, '汽车细节', '/car/detail/:id', 2, NULL, 1);
INSERT INTO `role_0` VALUES (15, '车辆租赁', '/rental', 1, 1, NULL);
INSERT INTO `role_0` VALUES (16, '租赁状态', '/rental/list', 2, 1, NULL);
INSERT INTO `role_0` VALUES (17, '租赁审核', '/rental/check', 2, NULL, NULL);
INSERT INTO `role_0` VALUES (18, '租赁记录', '/rental/record', 2, NULL, NULL);
INSERT INTO `role_0` VALUES (19, '租赁取消', '/rental/delete', 2, NULL, NULL);
INSERT INTO `role_0` VALUES (20, '租赁细节', '/rental/detail/:id', 2, NULL, 1);
INSERT INTO `role_0` VALUES (21, '评价管理', '/appraise', 1, 1, NULL);
INSERT INTO `role_0` VALUES (22, '评价列表', '/appraise/list', 2, 1, NULL);
INSERT INTO `role_0` VALUES (23, '评价细节', '/appraise/detail/:id', 2, NULL, 1);
INSERT INTO `role_0` VALUES (24, '角色管理', '/role', 1, 1, NULL);
INSERT INTO `role_0` VALUES (25, '角色列表', '/role/list', 2, 1, NULL);

-- ----------------------------
-- Table structure for role_1
-- ----------------------------
DROP TABLE IF EXISTS `role_1`;
CREATE TABLE `role_1`  (
  `id` int NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `key` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `grade` int NULL DEFAULT NULL,
  `pagepermission` int NULL DEFAULT NULL,
  `routepermission` int NULL DEFAULT NULL,
  `deleted` int UNSIGNED NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of role_1
-- ----------------------------
INSERT INTO `role_1` VALUES (1, '首页', '/home', 1, 1, NULL, 0);
INSERT INTO `role_1` VALUES (2, '用户管理', '/user', 1, 1, NULL, 0);
INSERT INTO `role_1` VALUES (3, '修改用户', '/user/update', 2, NULL, NULL, 0);
INSERT INTO `role_1` VALUES (4, '拉黑用户', '/user/block', 2, NULL, NULL, 0);
INSERT INTO `role_1` VALUES (5, '删除用户', '/user/delete', 2, NULL, NULL, 0);
INSERT INTO `role_1` VALUES (6, '添加用户', '/user/add', 2, NULL, NULL, 0);
INSERT INTO `role_1` VALUES (7, '用户列表', '/user/list', 2, 1, NULL, 0);
INSERT INTO `role_1` VALUES (8, '汽车管理', '/car', 1, 1, NULL, 0);
INSERT INTO `role_1` VALUES (9, '汽车列表', '/car/list', 2, 1, NULL, 0);
INSERT INTO `role_1` VALUES (10, '汽车添加', '/car/add', 2, NULL, NULL, 0);
INSERT INTO `role_1` VALUES (11, '汽车修改', '/car/update', 2, NULL, NULL, 0);
INSERT INTO `role_1` VALUES (12, '汽车删除', '/car/delete', 2, NULL, NULL, 0);
INSERT INTO `role_1` VALUES (13, '汽车租车', '/car/rental', 2, NULL, NULL, 0);
INSERT INTO `role_1` VALUES (14, '汽车细节', '/car/detail/:id', 2, NULL, 1, 0);
INSERT INTO `role_1` VALUES (15, '车辆租赁', '/rental', 1, 1, NULL, 0);
INSERT INTO `role_1` VALUES (16, '租赁状态', '/rental/list', 2, 1, NULL, 0);
INSERT INTO `role_1` VALUES (17, '租赁审核', '/rental/check', 2, NULL, NULL, 0);
INSERT INTO `role_1` VALUES (18, '租赁记录', '/rental/record', 2, NULL, NULL, 0);
INSERT INTO `role_1` VALUES (19, '租赁取消', '/rental/delete', 2, NULL, NULL, 0);
INSERT INTO `role_1` VALUES (20, '租赁细节', '/rental/detail/:id', 2, NULL, 1, 0);
INSERT INTO `role_1` VALUES (21, '评价管理', '/appraise', 1, 1, NULL, 0);
INSERT INTO `role_1` VALUES (22, '评价列表', '/appraise/list', 2, 1, NULL, 0);
INSERT INTO `role_1` VALUES (23, '评价细节', '/appraise/detail/:id', 2, NULL, 1, 0);
INSERT INTO `role_1` VALUES (24, '角色管理', '/role', 1, 1, NULL, 0);
INSERT INTO `role_1` VALUES (25, '角色列表', '/role/list', 2, 1, NULL, 0);

-- ----------------------------
-- Table structure for role_2
-- ----------------------------
DROP TABLE IF EXISTS `role_2`;
CREATE TABLE `role_2`  (
  `id` int NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `key` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `grade` int NULL DEFAULT NULL,
  `pagepermission` int NULL DEFAULT NULL,
  `routepermission` int NULL DEFAULT NULL,
  `deleted` int UNSIGNED NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of role_2
-- ----------------------------
INSERT INTO `role_2` VALUES (1, '首页', '/home', 1, 1, NULL, 0);
INSERT INTO `role_2` VALUES (2, '用户管理', '/user', 1, 1, NULL, 0);
INSERT INTO `role_2` VALUES (3, '修改用户', '/user/update', 2, NULL, NULL, 0);
INSERT INTO `role_2` VALUES (4, '拉黑用户', '/user/block', 2, NULL, NULL, 0);
INSERT INTO `role_2` VALUES (5, '删除用户', '/user/delete', 2, NULL, NULL, 1);
INSERT INTO `role_2` VALUES (6, '添加用户', '/user/add', 2, NULL, NULL, 1);
INSERT INTO `role_2` VALUES (7, '用户列表', '/user/list', 2, 1, NULL, 0);
INSERT INTO `role_2` VALUES (8, '汽车管理', '/car', 1, 1, NULL, 0);
INSERT INTO `role_2` VALUES (9, '汽车列表', '/car/list', 2, 1, NULL, 0);
INSERT INTO `role_2` VALUES (10, '汽车添加', '/car/add', 2, NULL, NULL, 0);
INSERT INTO `role_2` VALUES (11, '汽车修改', '/car/update', 2, NULL, NULL, 0);
INSERT INTO `role_2` VALUES (12, '汽车删除', '/car/delete', 2, NULL, NULL, 0);
INSERT INTO `role_2` VALUES (13, '汽车租车', '/car/rental', 2, NULL, NULL, 0);
INSERT INTO `role_2` VALUES (14, '汽车细节', '/car/detail/:id', 2, NULL, 1, 0);
INSERT INTO `role_2` VALUES (15, '车辆租赁', '/rental', 1, 1, NULL, 0);
INSERT INTO `role_2` VALUES (16, '租赁状态', '/rental/list', 2, 1, NULL, 0);
INSERT INTO `role_2` VALUES (17, '租赁审核', '/rental/check', 2, NULL, NULL, 0);
INSERT INTO `role_2` VALUES (18, '租赁记录', '/rental/record', 2, NULL, NULL, 0);
INSERT INTO `role_2` VALUES (19, '租赁取消', '/rental/delete', 2, NULL, NULL, 0);
INSERT INTO `role_2` VALUES (20, '租赁细节', '/rental/detail/:id', 2, NULL, 1, 0);
INSERT INTO `role_2` VALUES (21, '评价管理', '/appraise', 1, 1, NULL, 0);
INSERT INTO `role_2` VALUES (22, '评价列表', '/appraise/list', 2, 1, NULL, 0);
INSERT INTO `role_2` VALUES (23, '评价细节', '/appraise/detail/:id', 2, NULL, 1, 0);
INSERT INTO `role_2` VALUES (24, '角色管理', '/role', 1, 1, NULL, 1);
INSERT INTO `role_2` VALUES (25, '角色列表', '/role/list', 2, 1, NULL, 1);

-- ----------------------------
-- Table structure for role_3
-- ----------------------------
DROP TABLE IF EXISTS `role_3`;
CREATE TABLE `role_3`  (
  `id` int NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `key` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `grade` int NULL DEFAULT NULL,
  `pagepermission` int NULL DEFAULT NULL,
  `routepermission` int NULL DEFAULT NULL,
  `deleted` int UNSIGNED NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of role_3
-- ----------------------------
INSERT INTO `role_3` VALUES (1, '首页', '/home', 1, 1, NULL, 0);
INSERT INTO `role_3` VALUES (2, '用户管理', '/user', 1, 1, NULL, 0);
INSERT INTO `role_3` VALUES (3, '修改用户', '/user/update', 2, NULL, NULL, 1);
INSERT INTO `role_3` VALUES (4, '拉黑用户', '/user/block', 2, NULL, NULL, 1);
INSERT INTO `role_3` VALUES (5, '删除用户', '/user/delete', 2, NULL, NULL, 0);
INSERT INTO `role_3` VALUES (6, '添加用户', '/user/add', 2, NULL, NULL, 1);
INSERT INTO `role_3` VALUES (7, '用户列表', '/user/list', 2, 1, NULL, 0);
INSERT INTO `role_3` VALUES (8, '汽车管理', '/car', 1, 1, NULL, 0);
INSERT INTO `role_3` VALUES (9, '汽车列表', '/car/list', 2, 1, NULL, 0);
INSERT INTO `role_3` VALUES (10, '汽车添加', '/car/add', 2, NULL, NULL, 1);
INSERT INTO `role_3` VALUES (11, '汽车修改', '/car/update', 2, NULL, NULL, 1);
INSERT INTO `role_3` VALUES (12, '汽车删除', '/car/delete', 2, NULL, NULL, 1);
INSERT INTO `role_3` VALUES (13, '汽车租车', '/car/rental', 2, NULL, NULL, 0);
INSERT INTO `role_3` VALUES (14, '汽车细节', '/car/detail/:id', 2, NULL, 1, 0);
INSERT INTO `role_3` VALUES (15, '车辆租赁', '/rental', 1, 1, NULL, 0);
INSERT INTO `role_3` VALUES (16, '租赁状态', '/rental/list', 2, 1, NULL, 0);
INSERT INTO `role_3` VALUES (17, '租赁审核', '/rental/check', 2, NULL, NULL, 0);
INSERT INTO `role_3` VALUES (18, '租赁记录', '/rental/record', 2, NULL, NULL, 0);
INSERT INTO `role_3` VALUES (19, '租赁取消', '/rental/delete', 2, NULL, NULL, 0);
INSERT INTO `role_3` VALUES (20, '租赁细节', '/rental/detail/:id', 2, NULL, 1, 0);
INSERT INTO `role_3` VALUES (21, '评价管理', '/appraise', 1, 1, NULL, 0);
INSERT INTO `role_3` VALUES (22, '评价列表', '/appraise/list', 2, 1, NULL, 0);
INSERT INTO `role_3` VALUES (23, '评价细节', '/appraise/detail/:id', 2, NULL, 1, 0);
INSERT INTO `role_3` VALUES (24, '角色管理', '/role', 1, 1, NULL, 1);
INSERT INTO `role_3` VALUES (25, '角色列表', '/role/list', 2, 1, NULL, 1);

SET FOREIGN_KEY_CHECKS = 1;
