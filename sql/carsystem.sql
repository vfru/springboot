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

 Date: 31/03/2023 01:11:53
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
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of carbrands
-- ----------------------------
INSERT INTO `carbrands` VALUES (1, '奔驰', '奔驰');
INSERT INTO `carbrands` VALUES (2, '奥迪', '奥迪');
INSERT INTO `carbrands` VALUES (3, '宝马', '宝马');
INSERT INTO `carbrands` VALUES (4, '保时捷', '保时捷');
INSERT INTO `carbrands` VALUES (5, '五菱宏光', '五菱宏光');

-- ----------------------------
-- Table structure for cardetail
-- ----------------------------
DROP TABLE IF EXISTS `cardetail`;
CREATE TABLE `cardetail`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `carId` int NULL DEFAULT NULL,
  `seat` int NULL DEFAULT NULL,
  `describe` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `dateOfProduction` date NULL DEFAULT NULL,
  `lhw` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `fuelTypes` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `oilTank` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of cardetail
-- ----------------------------
INSERT INTO `cardetail` VALUES (1, 1, 5, 'C 200 Kompressor（增压型），面对挑战，勇往直前，带驱动式的增压器，显著地提高了车辆的功率和扭矩。0到100公里加速仅需9.4秒钟，最高车速则高达231公里/小时。令人沉陷其间的豪华精饰，只消一刻便钟爱一生。任由驾驭的欲望融入身体的各个感官中，眼中所见，耳中所闻，双手所触，躯体所感，皆是尽致的愉悦与激情。令人倍感踏实的智能护航系统，尽享动感驾驭的同时更可安适乘享。搭载各式辅助系统，将安全理念演绎得尤为鲜活。扎实稳固的联网功能，更使领略者悠然。', '2020-10-05', '4526/1728/1427(mm)', '97号以上无铅汽油', '62/8(L)');
INSERT INTO `cardetail` VALUES (2, 2, 5, '非常的nice，无与伦比的外观，鲜艳的色彩', '2019-05-05', '4526/1728/1427(mm)', '97号以上无铅汽油', '62/8(L)');
INSERT INTO `cardetail` VALUES (3, 3, 5, '好', '2018-05-05', '4526/1728/1427(mm)', '97号以上无铅汽油', '62/8(L)');
INSERT INTO `cardetail` VALUES (4, 4, 5, '帅', '2017-10-05', '4526/1728/1427(mm)', '97号以上无铅汽油', '62/8(L)');
INSERT INTO `cardetail` VALUES (5, 5, 2, '完美', '2018-06-08', '4526/1728/1427(mm)', '97号以上无铅汽油', '62/8(L)');
INSERT INTO `cardetail` VALUES (6, 6, 5, '666', '2018-12-08', '4526/1728/1427(mm)', '97号以上无铅汽油', '62/8(L)');

-- ----------------------------
-- Table structure for cars
-- ----------------------------
DROP TABLE IF EXISTS `cars`;
CREATE TABLE `cars`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `carbrandId` int NULL DEFAULT NULL,
  `carname` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `deposit` int NULL DEFAULT NULL,
  `price` double NULL DEFAULT NULL,
  `discounts` double NULL DEFAULT NULL,
  `adminId` int NULL DEFAULT NULL,
  `state` int NULL DEFAULT NULL,
  `img` longtext CHARACTER SET utf8 COLLATE utf8_bin NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of cars
-- ----------------------------
INSERT INTO `cars` VALUES (1, 1, '奔驰c200', 4100, 1600, 1200, 3, 1, 'https://cdn.carsandcoffee.com.sg/web/brandnew/sub/lBUBTYyS4uhPoakchxeA/mercedes-benz-c200-amg-saloon-cars-and-coffee-singapore-06_1440x1440.jpg?alt=media&token=4fe13dbd-dc13-46c6-b86c-9d24207bd1f3');
INSERT INTO `cars` VALUES (2, 2, '奥迪q3', 3000, 666, 555, 6, 4, 'https://www.topgear.com/sites/default/files/cars-car/carousel/2019/08/042tkp_0952.jpg?w=976&h=549');
INSERT INTO `cars` VALUES (3, 3, '宝马x3', 4000, 699, 500, 6, 1, 'https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X3/8712/1664016641788/front-left-side-47.jpg');
INSERT INTO `cars` VALUES (4, 5, '五菱宏光plus', 1500, 250, 300, 6, 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWiYhzMsdhHTIOZQRnn0sQkUkoN2afRxkWQ&usqp=CAU');
INSERT INTO `cars` VALUES (5, 4, '保时捷718', 6000, 2000, 1800, 6, 4, 'https://www.270top.com/img/20210625/3644072.jpg');
INSERT INTO `cars` VALUES (6, 1, '奔驰G63', 5000, 1800, 1600, 3, 1, 'https://hips.hearstapps.com/hmg-prod/images/2019-mercedes-amg-g63-104-1549404384.jpg');

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
  `routepermission` int NULL DEFAULT NULL,
  `rightId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1024 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of children
-- ----------------------------
INSERT INTO `children` VALUES (3, '修改用户', '/user/update', 2, NULL, NULL, 2);
INSERT INTO `children` VALUES (4, '拉黑用户', '/user/block', 2, NULL, NULL, 2);
INSERT INTO `children` VALUES (5, '删除用户', '/user/delete', 2, NULL, NULL, 2);
INSERT INTO `children` VALUES (6, '添加用户', '/user/add', 2, NULL, NULL, 2);
INSERT INTO `children` VALUES (7, '用户列表', '/user/list', 2, 1, NULL, 2);
INSERT INTO `children` VALUES (9, '汽车列表', '/car/list', 2, 1, NULL, 8);
INSERT INTO `children` VALUES (10, '汽车添加', '/car/add', 2, NULL, NULL, 8);
INSERT INTO `children` VALUES (11, '汽车修改', '/car/update', 2, NULL, NULL, 8);
INSERT INTO `children` VALUES (12, '汽车删除', '/car/delete', 2, NULL, NULL, 8);
INSERT INTO `children` VALUES (13, '汽车租车', '/car/rental', 2, NULL, NULL, 8);
INSERT INTO `children` VALUES (14, '汽车细节', '/car/detail/:id', 2, NULL, 1, 8);
INSERT INTO `children` VALUES (16, '租赁状态', '/rental/list', 2, 1, NULL, 15);
INSERT INTO `children` VALUES (17, '租赁审核', '/rental/check', 2, NULL, NULL, 15);
INSERT INTO `children` VALUES (18, '租赁记录', '/rental/record', 2, NULL, NULL, 15);
INSERT INTO `children` VALUES (19, '租赁取消', '/rental/delete', 2, NULL, NULL, 15);
INSERT INTO `children` VALUES (20, '租赁细节', '/rental/detail/:id', 2, NULL, 1, 15);
INSERT INTO `children` VALUES (22, '评价列表', '/appraise/list', 2, 1, NULL, 21);
INSERT INTO `children` VALUES (23, '评价细节', '/appraise/detail/:id', 2, NULL, 1, 21);

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `author` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `roleId` int NULL DEFAULT NULL,
  `datetime` date NULL DEFAULT NULL,
  `evaluatesId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of comments
-- ----------------------------
INSERT INTO `comments` VALUES (1, '大力', '<p>222</p>', 3, '2022-11-21', 2);
INSERT INTO `comments` VALUES (2, '天命', '<p>T.T</p>', 3, '2022-11-23', 2);
INSERT INTO `comments` VALUES (3, '天命', '<p>阿斯达四大</p>', 3, '2022-11-23', 2);
INSERT INTO `comments` VALUES (4, '本杰明', '<p>好像不错</p>', 3, '2022-12-11', 2);
INSERT INTO `comments` VALUES (6, '本杰明', '<p>😜</p>', 3, '2023-03-26', 3);
INSERT INTO `comments` VALUES (7, '本杰明', '<p>🤗</p>', 3, '2023-03-26', 4);
INSERT INTO `comments` VALUES (8, '本杰明', '<p>🤣</p>', 3, '2023-03-26', 3);
INSERT INTO `comments` VALUES (9, '本杰明', '<p>😘</p>', 3, '2023-03-26', 3);
INSERT INTO `comments` VALUES (10, '本杰明', '<p>🤣</p>', 3, '2023-03-26', 3);
INSERT INTO `comments` VALUES (11, '本杰明', '<p>😷</p>', 3, '2023-03-26', 4);
INSERT INTO `comments` VALUES (12, '本杰明', '<div data-w-e-type=\"todo\"><input type=\"checkbox\" disabled checked>２１２３</div>', 3, '2023-03-31', 3);

-- ----------------------------
-- Table structure for evaluates
-- ----------------------------
DROP TABLE IF EXISTS `evaluates`;
CREATE TABLE `evaluates`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `historyOrderId` int NULL DEFAULT NULL,
  `carId` int NULL DEFAULT NULL,
  `carname` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `userId` int NULL DEFAULT NULL,
  `roleId` int NULL DEFAULT NULL,
  `author` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `createTime` date NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `appraiseState` int NULL DEFAULT NULL,
  `star` double NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of evaluates
-- ----------------------------
INSERT INTO `evaluates` VALUES (3, 3, 6, '奔驰G63', 4, 3, '大力', '2022-11-23', '<p>你好</p>', 1, 5);
INSERT INTO `evaluates` VALUES (4, 1, 2, '奥迪q3', 4, 3, '大力', '2022-11-25', '<p><span style=\\\"font-size: 24px;\\\">666</span></p>', 1, 4.5);

-- ----------------------------
-- Table structure for historyorders
-- ----------------------------
DROP TABLE IF EXISTS `historyorders`;
CREATE TABLE `historyorders`  (
  `id` int NOT NULL AUTO_INCREMENT,
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
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of historyorders
-- ----------------------------
INSERT INTO `historyorders` VALUES (1, 'C2122-12300102-24', 2, 5, '奥迪q3', '大力', '1235855555', 3, '2021-12-30', '2022-01-02', 4, 2664, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失', 100, 6764, 4000, '', '没有问题', '无', 0);
INSERT INTO `historyorders` VALUES (2, 'C2222-11131216-64', 6, 4, '奔驰G63', '大力', '1235855555', 3, '2022-11-13', '2022-12-16', 34, 61200, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失,每座乘客保障5万', 120, 66470, 5000, '', ' ', '超速', 150);
INSERT INTO `historyorders` VALUES (3, 'C2222-11131113-64', 6, 4, '奔驰G63', '大力', '1235855555', 4, '2022-11-13', '2022-11-13', 1, 1800, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失', 100, 6900, 5000, '选错日期', '已取消订单', '', 0);
INSERT INTO `historyorders` VALUES (4, 'C2222-08310905-55', 5, 5, '保时捷718', '天命', '1235855555', 5, '2022-08-31', '2022-09-05', 5, 9000, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失,三者保障增至100万,每座乘客保障5万', 180, 15180, 6000, '有点后悔了', NULL, '', 0);
INSERT INTO `historyorders` VALUES (5, 'C2222-11301209-45', 4, 5, '五菱宏光plus', '天命', '1235855555', 2, '2022-11-30', '2022-12-09', 10, 2500, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失,每座乘客保障5万', 120, 4120, 1500, NULL, NULL, NULL, 0);
INSERT INTO `historyorders` VALUES (6, 'C2222-11301205-37', 3, 7, '宝马x3', '大大', '1235855555', 3, '2022-11-30', '2022-12-05', 6, 3000, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失,三者保障增至100万', 160, 7160, 4000, '', '', '一切正常', 0);
INSERT INTO `historyorders` VALUES (7, 'C2222-11231123-75', 7, 5, '宝马430i', '天命', '1235855555', 3, '2022-11-23', '2022-11-23', 1, 999, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失', 100, 7099, 6000, NULL, NULL, NULL, 0);
INSERT INTO `historyorders` VALUES (9, 'C2323-03240324-15', 1, 5, '奔驰c200', '天命', '1235855555', 4, '2023-03-24', '2023-03-24', 1, 1600, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失,每座乘客保障5千', 100, 5800, 4100, 'haha', '没钱', '', 0);
INSERT INTO `historyorders` VALUES (10, 'C2323-03310421-25', 2, 5, '奥迪q3', '天命', '1235855555', 5, '2023-03-31', '2023-04-21', 22, 12210, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失,每座乘客保障5万              ', 120, 15330, 3000, '不想租了', '', '', 0);

-- ----------------------------
-- Table structure for insurances
-- ----------------------------
DROP TABLE IF EXISTS `insurances`;
CREATE TABLE `insurances`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `label` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `price` int NULL DEFAULT NULL,
  `details` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of insurances
-- ----------------------------
INSERT INTO `insurances` VALUES (1, 'A', '尊享服务       ', 100, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失,每座乘客保障5千                              ');
INSERT INTO `insurances` VALUES (2, 'B', '尊享驾乘守护', 120, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失,每座乘客保障5万                               ');
INSERT INTO `insurances` VALUES (3, 'C', '尊享百万服务', 160, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失,三者保障增至100万                           ');
INSERT INTO `insurances` VALUES (4, 'D', '全程无忧       ', 180, '车损险理赔范围的本车损失以及车损险理赔范围外的轮胎损失,三者保障增至100万,每座乘客保障5万   ');

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

-- ----------------------------
-- Table structure for role_0
-- ----------------------------
DROP TABLE IF EXISTS `role_0`;
CREATE TABLE `role_0`  (
  `id` int NOT NULL,
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `key` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `grade` int NULL DEFAULT NULL,
  `pagepermission` int NULL DEFAULT NULL,
  `routepermission` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

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
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `key` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `grade` int NULL DEFAULT NULL,
  `pagepermission` int NULL DEFAULT NULL,
  `routepermission` int NULL DEFAULT NULL,
  `deleted` int UNSIGNED NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of role_1
-- ----------------------------
INSERT INTO `role_1` VALUES (1, '首页', '/home', 1, 1, NULL, 1);
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
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `key` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `grade` int NULL DEFAULT NULL,
  `pagepermission` int NULL DEFAULT NULL,
  `routepermission` int NULL DEFAULT NULL,
  `deleted` int UNSIGNED NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

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
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `key` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `grade` int NULL DEFAULT NULL,
  `pagepermission` int NULL DEFAULT NULL,
  `routepermission` int NULL DEFAULT NULL,
  `deleted` int UNSIGNED NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

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
-- Table structure for roles_rights
-- ----------------------------
DROP TABLE IF EXISTS `roles_rights`;
CREATE TABLE `roles_rights`  (
  `rightId` int NULL DEFAULT NULL,
  `roleId` int NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of roles_rights
-- ----------------------------
INSERT INTO `roles_rights` VALUES (14, 1);
INSERT INTO `roles_rights` VALUES (3, 1);
INSERT INTO `roles_rights` VALUES (11, 1);
INSERT INTO `roles_rights` VALUES (5, 1);
INSERT INTO `roles_rights` VALUES (6, 1);
INSERT INTO `roles_rights` VALUES (7, 1);
INSERT INTO `roles_rights` VALUES (2, 1);
INSERT INTO `roles_rights` VALUES (9, 1);
INSERT INTO `roles_rights` VALUES (10, 1);
INSERT INTO `roles_rights` VALUES (1, 1);
INSERT INTO `roles_rights` VALUES (8, 1);
INSERT INTO `roles_rights` VALUES (12, 1);
INSERT INTO `roles_rights` VALUES (13, 1);
INSERT INTO `roles_rights` VALUES (4, 1);
INSERT INTO `roles_rights` VALUES (15, 1);
INSERT INTO `roles_rights` VALUES (16, 1);
INSERT INTO `roles_rights` VALUES (17, 1);
INSERT INTO `roles_rights` VALUES (18, 1);
INSERT INTO `roles_rights` VALUES (19, 1);
INSERT INTO `roles_rights` VALUES (20, 1);
INSERT INTO `roles_rights` VALUES (21, 1);
INSERT INTO `roles_rights` VALUES (22, 1);
INSERT INTO `roles_rights` VALUES (23, 1);
INSERT INTO `roles_rights` VALUES (24, 1);
INSERT INTO `roles_rights` VALUES (25, 1);
INSERT INTO `roles_rights` VALUES (1, 2);
INSERT INTO `roles_rights` VALUES (2, 2);
INSERT INTO `roles_rights` VALUES (3, 2);
INSERT INTO `roles_rights` VALUES (4, 2);
INSERT INTO `roles_rights` VALUES (23, 2);
INSERT INTO `roles_rights` VALUES (22, 2);
INSERT INTO `roles_rights` VALUES (7, 2);
INSERT INTO `roles_rights` VALUES (8, 2);
INSERT INTO `roles_rights` VALUES (9, 2);
INSERT INTO `roles_rights` VALUES (10, 2);
INSERT INTO `roles_rights` VALUES (11, 2);
INSERT INTO `roles_rights` VALUES (12, 2);
INSERT INTO `roles_rights` VALUES (13, 2);
INSERT INTO `roles_rights` VALUES (14, 2);
INSERT INTO `roles_rights` VALUES (15, 2);
INSERT INTO `roles_rights` VALUES (16, 2);
INSERT INTO `roles_rights` VALUES (17, 2);
INSERT INTO `roles_rights` VALUES (18, 2);
INSERT INTO `roles_rights` VALUES (19, 2);
INSERT INTO `roles_rights` VALUES (20, 2);
INSERT INTO `roles_rights` VALUES (21, 2);
INSERT INTO `roles_rights` VALUES (1, 3);
INSERT INTO `roles_rights` VALUES (2, 3);
INSERT INTO `roles_rights` VALUES (20, 3);
INSERT INTO `roles_rights` VALUES (19, 3);
INSERT INTO `roles_rights` VALUES (5, 3);
INSERT INTO `roles_rights` VALUES (21, 3);
INSERT INTO `roles_rights` VALUES (7, 3);
INSERT INTO `roles_rights` VALUES (8, 3);
INSERT INTO `roles_rights` VALUES (9, 3);
INSERT INTO `roles_rights` VALUES (22, 3);
INSERT INTO `roles_rights` VALUES (23, 3);
INSERT INTO `roles_rights` VALUES (18, 3);
INSERT INTO `roles_rights` VALUES (13, 3);
INSERT INTO `roles_rights` VALUES (14, 3);
INSERT INTO `roles_rights` VALUES (15, 3);
INSERT INTO `roles_rights` VALUES (16, 3);
INSERT INTO `roles_rights` VALUES (17, 3);

-- ----------------------------
-- Table structure for swiper
-- ----------------------------
DROP TABLE IF EXISTS `swiper`;
CREATE TABLE `swiper`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `carId` int NULL DEFAULT NULL,
  `carname` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of swiper
-- ----------------------------
INSERT INTO `swiper` VALUES (1, 1, '奔驰c200', 'https://cdn.carsandcoffee.com.sg/web/brandnew/sub/lBUBTYyS4uhPoakchxeA/mercedes-benz-c200-amg-saloon-cars-and-coffee-singapore-06_1440x1440.jpg?alt=media&token=4fe13dbd-dc13-46c6-b86c-9d24207bd1f3');
INSERT INTO `swiper` VALUES (2, 2, '奥迪q3', 'https://www.topgear.com/sites/default/files/cars-car/carousel/2019/08/042tkp_0952.jpg?w=976&h=549');
INSERT INTO `swiper` VALUES (3, 3, '宝马x3', 'https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X3/8712/1664016641788/front-left-side-47.jpg');
INSERT INTO `swiper` VALUES (4, 4, '五菱宏光plus', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWiYhzMsdhHTIOZQRnn0sQkUkoN2afRxkWQ&usqp=CAU');
INSERT INTO `swiper` VALUES (5, 5, '保时捷718', 'https://www.270top.com/img/20210625/3644072.jpg');
INSERT INTO `swiper` VALUES (6, 6, '奔驰G63', 'https://hips.hearstapps.com/hmg-prod/images/2019-mercedes-amg-g63-104-1549404384.jpg');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `roleId` int NOT NULL,
  `name` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `block` tinyint NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `username`, `password`, `roleId`, `name`, `phone`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'admin', 'admin', 0, '本杰明', '7039833096', NULL);
INSERT INTO `users` VALUES (2, 'react0', '123', 1, '达力', '1235855555', 0);
INSERT INTO `users` VALUES (3, '556', '123', 2, '巨力', '12358555556', 0);
INSERT INTO `users` VALUES (4, 'feichi', '123', 3, '大力', '65165', 0);
INSERT INTO `users` VALUES (5, 'chi', '123', 3, '天命', '1235855555', 0);

SET FOREIGN_KEY_CHECKS = 1;
