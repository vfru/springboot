/*
 Navicat Premium Data Transfer

 Source Server         : carsystem
 Source Server Type    : MySQL
 Source Server Version : 80022 (8.0.22)
 Source Host           : localhost:3306
 Source Schema         : carsystem

 Target Server Type    : MySQL
 Target Server Version : 80022 (8.0.22)
 File Encoding         : 65001

 Date: 03/04/2023 10:47:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'admin', 'admin', 0, '本杰明', '7039833096', NULL);
INSERT INTO `users` VALUES (2, 'react0', '123', 1, '力达力', '1235855555', 0);
INSERT INTO `users` VALUES (3, '556', '123', 2, '巨力', '1235855555', 0);
INSERT INTO `users` VALUES (4, 'feichi', '123', 3, '大力', '65165', 0);
INSERT INTO `users` VALUES (5, 'chi', '123', 3, '天命', '1235855555', 0);
INSERT INTO `users` VALUES (6, '778', '123', 2, '665', '123132132', 0);

SET FOREIGN_KEY_CHECKS = 1;
