/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 100422 (10.4.22-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : laravel

 Target Server Type    : MySQL
 Target Server Version : 100422 (10.4.22-MariaDB)
 File Encoding         : 65001

 Date: 08/10/2022 15:50:58
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for app_updates
-- ----------------------------
DROP TABLE IF EXISTS `app_updates`;
CREATE TABLE `app_updates`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `version` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of app_updates
-- ----------------------------

-- ----------------------------
-- Table structure for balances
-- ----------------------------
DROP TABLE IF EXISTS `balances`;
CREATE TABLE `balances`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` decimal(8, 2) NOT NULL DEFAULT 0.00,
  `currency` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of balances
-- ----------------------------

-- ----------------------------
-- Table structure for billing_alerts
-- ----------------------------
DROP TABLE IF EXISTS `billing_alerts`;
CREATE TABLE `billing_alerts`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` decimal(8, 2) NOT NULL,
  `triggered` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of billing_alerts
-- ----------------------------

-- ----------------------------
-- Table structure for credit_cards
-- ----------------------------
DROP TABLE IF EXISTS `credit_cards`;
CREATE TABLE `credit_cards`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last4` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `service` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `reference` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `expiration` timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of credit_cards
-- ----------------------------

-- ----------------------------
-- Table structure for customers
-- ----------------------------
DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers`  (
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `driver` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `driver_user_id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of customers
-- ----------------------------

-- ----------------------------
-- Table structure for dunnings
-- ----------------------------
DROP TABLE IF EXISTS `dunnings`;
CREATE TABLE `dunnings`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sequence` int NOT NULL,
  `type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  INDEX `dunnings_user_id_index`(`user_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dunnings
-- ----------------------------

-- ----------------------------
-- Table structure for exifs
-- ----------------------------
DROP TABLE IF EXISTS `exifs`;
CREATE TABLE `exifs`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_time_original` timestamp NULL DEFAULT NULL,
  `artist` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `height` int NULL DEFAULT NULL,
  `width` int NULL DEFAULT NULL,
  `x_resolution` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `y_resolution` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `color_space` int NULL DEFAULT NULL,
  `camera` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `model` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `aperture_value` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `exposure_time` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `focal_length` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `iso` int NULL DEFAULT NULL,
  `aperture_f_number` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `ccd_width` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `longitude` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `latitude` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `longitude_ref` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `latitude_ref` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `exifs_file_id_index`(`file_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of exifs
-- ----------------------------

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for failed_payments
-- ----------------------------
DROP TABLE IF EXISTS `failed_payments`;
CREATE TABLE `failed_payments`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` decimal(8, 2) NOT NULL,
  `currency` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` int NOT NULL DEFAULT 0,
  `source` enum('balance','credit-card') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `metadata` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  INDEX `failed_payments_id_index`(`id` ASC) USING BTREE,
  INDEX `failed_payments_user_id_index`(`user_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of failed_payments
-- ----------------------------

-- ----------------------------
-- Table structure for favourite_folder
-- ----------------------------
DROP TABLE IF EXISTS `favourite_folder`;
CREATE TABLE `favourite_folder`  (
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of favourite_folder
-- ----------------------------
INSERT INTO `favourite_folder` VALUES ('8dacdcc1-6d5f-431b-afe1-8d7a376e7a7b', '88d6ed94-0888-4e13-a22f-e682caf77f00');

-- ----------------------------
-- Table structure for files
-- ----------------------------
DROP TABLE IF EXISTS `files`;
CREATE TABLE `files`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `creator_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `parent_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `basename` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `mimetype` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `filesize` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `tipo_id` int NULL DEFAULT NULL,
  `status` tinyint(1) NULL DEFAULT 0,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `files_user_id_index`(`user_id` ASC) USING BTREE,
  INDEX `files_basename_index`(`basename` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of files
-- ----------------------------
INSERT INTO `files` VALUES ('02a9b46b-3adb-4b99-992f-fabb4e55520b', 'bc68b1c7-90d2-4c39-862b-c7e43f837626', 'ae7301aa-7e55-4943-a062-82995f056e5c', '84547c93-6bad-444d-ae0f-f8da15533108', 'ccc.pdf', '795fe360-1f25-4879-a03e-b9280fac1441.pdf', 'pdf', '125301', 'file', 16, 0, NULL, '2022-10-06 01:03:21', '2022-10-06 01:03:21');
INSERT INTO `files` VALUES ('09ffa4b6-299f-42d0-aa03-052053355558', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '05071547-c28a-4b80-9ebd-2a19e5b8a44d', 'aaa.pdf', 'aea81b81-5a79-48f3-b48d-3897723cb9bc.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-04 00:32:06', '2022-10-04 00:27:16', '2022-10-04 00:32:06');
INSERT INTO `files` VALUES ('1004a2fb-2176-4987-b924-1f26807489a4', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'ccc.pdf', '6eee3e7d-bb20-44ba-a0b4-d0dbb27a5a0e.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 21:32:49', '2022-10-03 21:26:16', '2022-10-03 21:32:49');
INSERT INTO `files` VALUES ('12a9e2cb-c0da-4992-ae82-35f8c0f8b477', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '765acd95-ab93-4d50-8cee-3bdf618e3902.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 20:58:36', '2022-10-03 20:50:58', '2022-10-03 20:58:36');
INSERT INTO `files` VALUES ('130672af-9550-4996-a7ed-1bff70081ce2', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '0313b1b5-4075-4f41-af53-a94aa60800d8', 'aaa.pdf', 'fd9bbee4-7fc1-4f35-9355-165ac555d768.pdf', 'pdf', '125301', 'file', 31, 0, NULL, '2022-10-04 22:06:40', '2022-10-04 22:06:42');
INSERT INTO `files` VALUES ('18ae28fb-ea66-4dcb-a7ce-e9a9b0625d16', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '54fb8851-e145-4303-9111-399aa45585cd', 'bbb.pdf', '7e6a7cf3-2e8b-4d6b-bf0c-9a578aa160ed.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 20:16:00', '2022-10-03 20:15:17', '2022-10-03 20:16:00');
INSERT INTO `files` VALUES ('19c8f23d-966c-495f-947e-d068e221abd9', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '4dea7521-31e1-45c2-a6b8-1de8520ed78c.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 20:37:32', '2022-10-03 20:35:43', '2022-10-03 20:37:32');
INSERT INTO `files` VALUES ('1a57aaff-245a-4c69-9f20-bcabf60c71da', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '74f25fad-97e6-464d-8a4c-67edc7f18fb4.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 19:34:50', '2022-10-03 19:32:30', '2022-10-03 19:34:50');
INSERT INTO `files` VALUES ('1d3ca176-493c-4e4b-b4fa-657fac080ad4', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '00f27b6f-bd42-4523-8d8c-01851ff84e6e', 'aaa.pdf', '965e17ba-ad90-4ebf-ab19-bc65f9697da1.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 20:37:27', '2022-10-03 20:32:22', '2022-10-03 20:37:27');
INSERT INTO `files` VALUES ('1d4d4f4e-ef8f-4ec3-9502-3cdc1798dd50', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'bbb.pdf', '11d23ace-ff67-4e19-a930-8716db203bfc.pdf', 'pdf', '125301', 'file', 16, 0, '2022-10-03 20:32:13', '2022-10-03 20:21:15', '2022-10-03 20:32:13');
INSERT INTO `files` VALUES ('1e40fce4-d756-4d55-99fe-12bedf294064', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '65516ac0-4470-4b1d-9ae7-bfd869ae3f74.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-03 22:47:09', '2022-10-03 21:23:09', '2022-10-03 22:47:09');
INSERT INTO `files` VALUES ('1e89db47-3821-4e45-9e52-40cfda0481ad', '9f395167-276f-41fa-aa78-54a858273fae', '9f395167-276f-41fa-aa78-54a858273fae', 'f1725d3b-81d3-4ee2-a2c9-3f15823138b9', 'Hero-abc.pdf', 'c6a0a4b1-fca9-48d0-8231-9cee57b836b5.pdf', 'pdf', '125301', 'file', 16, 0, NULL, '2022-10-04 01:19:43', '2022-10-04 17:07:01');
INSERT INTO `files` VALUES ('2132c27e-7887-4d84-b00c-ff99e05da909', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'fbbc7dcf-fb7c-425f-bce9-36e730141843', 'ccc.pdf', '89d2b825-4df8-4210-9f15-15469ba951df.pdf', 'pdf', '125301', 'file', 16, 0, NULL, '2022-10-06 01:22:20', '2022-10-06 01:22:22');
INSERT INTO `files` VALUES ('234e8c7a-9e5f-41f0-b2ca-21fa1d23fe8f', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'b78856a5-159e-4879-a71a-288675645468', 'aaa.pdf', '4514a098-9ee4-4e90-a636-d2e28041ef09.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 16:26:30', '2022-10-03 07:33:57', '2022-10-03 16:26:30');
INSERT INTO `files` VALUES ('23de2645-78a6-4eca-b4da-839f1339cc8b', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '650c88a0-672f-484d-88a8-090a79625708', 'aaa.pdf', '5d0fab7e-a0a8-42ef-8ad2-2132905cdf2d.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-04 17:07:56', '2022-10-04 00:32:53', '2022-10-04 17:07:56');
INSERT INTO `files` VALUES ('278650b5-114d-4d63-a8e2-9ac64eb0ebbc', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '65abd07c-a168-4388-a9f4-6b4957381b3d.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 18:02:17', '2022-10-03 17:53:04', '2022-10-03 18:02:17');
INSERT INTO `files` VALUES ('29b2504e-1318-4e22-ae3f-bf87e4f55528', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'b78856a5-159e-4879-a71a-288675645468', '03.10.2022_23.00.32_REC.mp4', '12c4e078-62f6-42d2-8070-e67d2d4568e0.mp4', 'mp4', '6197410', 'video', 18, 0, '2022-10-03 16:26:31', '2022-10-03 12:21:47', '2022-10-03 16:26:31');
INSERT INTO `files` VALUES ('2b831998-96af-4c1e-8ee9-00bb39e64166', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '2ea7ca2c-9a32-481f-a9c2-f0562a76dec1', 'ccc.pdf', '233b6e42-a744-48ca-b235-595712a68b90.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-03 23:52:08', '2022-10-03 19:19:13', '2022-10-03 23:52:08');
INSERT INTO `files` VALUES ('2ba1284e-2759-4258-aae1-993840b10592', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '26613c66-f132-4fd6-8109-575263a677bf.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 17:41:18', '2022-10-03 17:36:56', '2022-10-03 17:41:18');
INSERT INTO `files` VALUES ('2bca99ba-50eb-4964-969f-a0a7cdf155f6', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '7724647f-b8ac-4160-b548-e9d8f197e6e9', 'bbb.pdf', 'd6b62794-8cdf-43d6-ba42-38b14d33b90d.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-04 19:30:05', '2022-10-04 19:23:01', '2022-10-04 19:30:05');
INSERT INTO `files` VALUES ('312a15fd-5e3c-494c-a4ca-10a226f707ac', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '57baeb01-e33c-422a-823a-3741ba597058.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 17:48:11', '2022-10-03 17:41:24', '2022-10-03 17:48:11');
INSERT INTO `files` VALUES ('34a6e937-bf4e-4953-a3d2-d74700a9dae4', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'ccc.pdf', 'c5d1d8e9-10dd-4f51-8da4-6976267ae528.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 21:20:24', '2022-10-03 20:41:10', '2022-10-03 21:20:24');
INSERT INTO `files` VALUES ('358500ec-784a-4467-b8ab-7a4f6b55f656', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ecc7fe7c-4b59-47f0-b746-e5a22a9abad1', 'bbb.pdf', 'a64fe621-8254-49d8-894e-8c868df2fb1d.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 21:20:16', '2022-10-03 20:40:21', '2022-10-03 21:20:16');
INSERT INTO `files` VALUES ('362140a6-d21d-45d2-94ec-4a88c7008e12', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', 'acb06972-c56f-4f50-915a-00b29eec5e69.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 20:58:34', '2022-10-03 20:51:47', '2022-10-03 20:58:34');
INSERT INTO `files` VALUES ('3ae3ab09-b73e-4ddc-beac-faebfb2bb73e', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'ccc.pdf', 'a12e3cc9-74b1-4ca1-b800-32c5102303b6.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 20:30:20', '2022-10-03 20:29:17', '2022-10-03 20:30:20');
INSERT INTO `files` VALUES ('3badd0ab-a84a-4dff-b23f-139b582ea0e4', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'ccc.pdf', '9ac09227-0d61-462d-b3ee-17e5970599d5.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 20:58:33', '2022-10-03 20:52:39', '2022-10-03 20:58:33');
INSERT INTO `files` VALUES ('3da20061-937a-4947-b9e5-83bd29b65365', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'ccc.pdf', '87458de2-7ca3-41a4-a98f-4dd209f09494.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-03 21:23:24', '2022-10-03 21:21:49', '2022-10-03 21:23:24');
INSERT INTO `files` VALUES ('42419392-bf92-4e7b-835f-43aa96e350e7', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '9ac90afa-256b-40b9-b3b7-e98d854c6958.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 21:23:25', '2022-10-03 21:21:01', '2022-10-03 21:23:25');
INSERT INTO `files` VALUES ('44c8b729-4781-4c2c-b1c2-e0becc910374', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '6b702014-9178-4c59-8159-2bdf42008317', 'ccc.pdf', 'ad0f7bef-c568-46c4-b776-16cae95c1220.pdf', 'pdf', '125301', 'file', 19, 0, NULL, '2022-10-04 19:22:32', '2022-10-04 19:22:32');
INSERT INTO `files` VALUES ('46efc9a0-55fa-4e2f-9459-bc0181d91f36', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '628ec869-db2b-4b95-bffe-0dd922338158.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-03 17:15:10', '2022-10-03 16:59:16', '2022-10-03 17:15:10');
INSERT INTO `files` VALUES ('48cd3250-712a-4c9f-bbb5-efc121a52ab4', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '3a0b66a5-a3b1-4f72-9f7c-a9183605b779.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 21:41:35', '2022-10-03 21:35:26', '2022-10-03 21:41:35');
INSERT INTO `files` VALUES ('4b763c28-7b86-4dea-96d8-efbd17241df9', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', 'ec2ee033-bbf4-48ec-b4e9-0fc41d36ed9c.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 20:05:22', '2022-10-03 19:58:54', '2022-10-03 20:05:22');
INSERT INTO `files` VALUES ('503d0d21-6c14-44fd-9192-a6c1b7cc42cc', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', 'd924e6ef-e686-41ab-880c-e4895374740e.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 20:05:20', '2022-10-03 20:03:56', '2022-10-03 20:05:20');
INSERT INTO `files` VALUES ('50f5ed43-77b6-4298-bfc9-21a692a168d3', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'a22864b1-5dce-4368-bbb5-c43fcf2a948c', 'aaa.pdf', 'a66a44cf-9fb5-47a7-835a-1bddf26c6e5d.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-04 00:26:12', '2022-10-03 22:47:25', '2022-10-04 00:26:12');
INSERT INTO `files` VALUES ('562e2ff8-24bb-42a8-ab5e-dec4ecd360f0', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '58ddaa47-547f-4074-bb57-14f0b4e129cc.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 19:43:02', '2022-10-03 19:39:17', '2022-10-03 19:43:02');
INSERT INTO `files` VALUES ('57411882-23f8-4181-aea8-48b88ab5ae35', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'be287922-28a6-412a-9970-8f7603f892fc', '03.10.2022_23.00.32_REC.mp4', 'e0aba2c1-099f-46f2-b85e-c106e5df072b.mp4', 'mp4', '6197410', 'video', 19, 0, '2022-10-07 21:59:53', '2022-10-07 21:59:26', '2022-10-07 21:59:53');
INSERT INTO `files` VALUES ('5bc3352f-01e8-419e-9894-d27d11bae3a8', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'b78856a5-159e-4879-a71a-288675645468', 'aaa.pdf', '49efa213-4745-4571-bcaa-8a8d94362d64.pdf', 'pdf', '125301', 'file', 16, 0, '2022-10-03 07:23:42', '2022-10-03 07:04:19', '2022-10-03 07:23:42');
INSERT INTO `files` VALUES ('5c7ffe1c-2be2-48b6-88a0-95435863cb54', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '21c258ca-36a2-4d3b-abef-16731ef18b30.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 19:19:38', '2022-10-03 18:02:34', '2022-10-03 19:19:38');
INSERT INTO `files` VALUES ('5ccad29c-3191-475b-a0a5-c2f5156468cb', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'bbb.pdf', '07b1b298-d157-4ae7-b6e9-1a58f519d0a0.pdf', 'pdf', '125301', 'file', 16, 0, '2022-10-03 19:39:01', '2022-10-03 19:37:59', '2022-10-03 19:39:01');
INSERT INTO `files` VALUES ('5d94cc45-f896-4ea1-8d70-998d0422ae35', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'ccc.pdf', 'ee9646df-a409-467d-8eed-ccd890d21843.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-03 19:38:59', '2022-10-03 19:34:59', '2022-10-03 19:38:59');
INSERT INTO `files` VALUES ('61734b6c-74aa-4a33-905f-887d13096d34', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'bbb.pdf', '894411cc-3224-43ba-a65c-fa2e69c00764.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 20:58:37', '2022-10-03 20:49:32', '2022-10-03 20:58:37');
INSERT INTO `files` VALUES ('632be19f-edb4-420f-8062-8ba7f33594ec', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '6b702014-9178-4c59-8159-2bdf42008317', 'bbb.pdf', '6e14b7e4-7838-492c-88b2-ba40ee070226.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-04 17:07:51', '2022-10-04 00:53:05', '2022-10-04 17:07:51');
INSERT INTO `files` VALUES ('66905c26-f785-45fb-a6cc-acf5a89aa083', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '865f0ecd-4fda-4003-bb13-6d668b190289.pdf', 'pdf', '125301', 'file', 16, 0, '2022-10-03 19:43:03', '2022-10-03 19:42:03', '2022-10-03 19:43:03');
INSERT INTO `files` VALUES ('6c9d6375-7afd-4fe2-a435-47e5ef551ff6', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'd7dc4205-cb00-4acf-9fbd-6c6b2811669b', 'createSQL.py', '73375c2f-ec12-40c0-9a9e-a1212d511d69.py', 'py', '724', 'file', 21, 0, '2022-10-05 01:30:07', '2022-10-05 01:30:01', '2022-10-05 01:30:07');
INSERT INTO `files` VALUES ('6de7791d-ded1-42c5-8605-b0b3fda69fbc', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '6de7791d-ded1-42c5-8605-b0b3fda69fbc', 'bbb.pdf', '1c26ecf4-fea2-40ae-9509-1905840851d0.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-04 17:08:02', '2022-10-03 20:16:27', '2022-10-04 17:08:02');
INSERT INTO `files` VALUES ('78ade228-6a36-489e-8e7f-c18d01adcee1', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'ccc.pdf', 'd9f0132e-a2bd-47b1-9485-13651d21323d.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-03 20:37:29', '2022-10-03 20:34:21', '2022-10-03 20:37:29');
INSERT INTO `files` VALUES ('7a88c548-5274-4ed0-901e-e459991f69db', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'c9976bc6-7651-4531-9021-4eacb997839a', 'aaa.pdf', '37b17a66-4f69-457b-bc77-f6f6902cd94a.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-04 00:54:34', '2022-10-04 00:53:47', '2022-10-04 00:54:34');
INSERT INTO `files` VALUES ('7adc82ec-d41d-4c83-99c7-3b38fb796068', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', 'b748a67b-362f-456f-992d-b2136e1ca307.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 18:02:14', '2022-10-03 17:48:19', '2022-10-03 18:02:14');
INSERT INTO `files` VALUES ('7e1049e0-069d-421a-963f-39a64a126642', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '99fc2b76-e8a3-4508-b8d6-908277eb2b7e.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 20:05:23', '2022-10-03 19:43:09', '2022-10-03 20:05:23');
INSERT INTO `files` VALUES ('8162fa4c-51a3-4088-93c2-91daeb4a1784', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'ccc.pdf', '10988970-678f-46d1-a74d-25ee83b884db.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-03 21:41:33', '2022-10-03 21:39:01', '2022-10-03 21:41:33');
INSERT INTO `files` VALUES ('838091f2-a0bf-4c11-bc9e-fd525986c1e0', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'b78856a5-159e-4879-a71a-288675645468', 'bbb.pdf', 'a9559ddb-3afc-416d-b2e0-f6ac634776c6.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-03 09:57:42', '2022-10-03 09:57:35', '2022-10-03 09:57:42');
INSERT INTO `files` VALUES ('85790347-f232-437d-8299-c21d4bd0dafa', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '9fa4c62e-63ba-40d5-aae2-0547db733cf8.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 17:48:09', '2022-10-03 17:47:34', '2022-10-03 17:48:09');
INSERT INTO `files` VALUES ('88491713-fa03-470b-9731-2f74ab551111', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'ccc.pdf', '6d64fbc6-d461-4fbb-928a-95a0a60c7494.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 21:20:20', '2022-10-03 21:02:03', '2022-10-03 21:20:20');
INSERT INTO `files` VALUES ('88b94177-d801-42fd-9e17-75aa56e340f1', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '2094c2a1-62a1-48d2-95e1-9c07eeff0ca7.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 20:37:30', '2022-10-03 20:27:00', '2022-10-03 20:37:30');
INSERT INTO `files` VALUES ('8ba0867a-865a-4e50-8b39-b23a2a70a66f', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', 'ffa784fc-bec7-4acc-b0b4-3c81c75e3f70.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 17:36:48', '2022-10-03 17:36:02', '2022-10-03 17:36:48');
INSERT INTO `files` VALUES ('8bb92fe5-d521-41ff-a1a7-830180a0f8f1', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '2ea7ca2c-9a32-481f-a9c2-f0562a76dec1', 'aaa.pdf', 'dc6d4e3b-d038-4a92-b4b5-557e03338356.pdf', 'pdf', '125301', 'file', 16, 0, '2022-10-03 20:05:32', '2022-10-03 16:41:34', '2022-10-03 20:05:32');
INSERT INTO `files` VALUES ('8d69da1c-4850-430b-86af-64d7b9a43b59', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'fe448e62-ab14-48a3-8d68-2c7b7fae94a9', '1.gif', '3059e1db-fa30-41ab-b67e-0a8761d249c9.gif', 'gif', '779894', 'image', 21, 0, '2022-10-06 01:13:49', '2022-10-04 19:21:58', '2022-10-06 01:13:49');
INSERT INTO `files` VALUES ('90dcacf2-8aa7-4f8f-ae59-71ae112a5fe0', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'ccc.pdf', '61c3895e-72b4-4e34-95b6-440083a3590a.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 21:20:19', '2022-10-03 21:13:22', '2022-10-03 21:20:19');
INSERT INTO `files` VALUES ('9346ae5c-e338-4fc4-b385-2c8dde53aa12', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'ccc.pdf', 'f29c797f-2273-4d57-bd35-c5ec8d3bba2f.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 21:32:51', '2022-10-03 21:24:42', '2022-10-03 21:32:51');
INSERT INTO `files` VALUES ('94329e75-1e52-455c-9457-757213315348', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '5248d29b-9fd9-41f8-b7d3-5e6f24b92471', 'Fullstack_Engineer_Coding_Challenge_v5.0.pdf', '2f53eb84-c505-41d6-87b5-ce4f7fc89390.pdf', 'pdf', '168581', 'file', 18, 0, NULL, '2022-10-08 01:23:23', '2022-10-08 01:23:24');
INSERT INTO `files` VALUES ('96f3d830-f8b0-4355-8992-3245601d6621', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', 'c7d97a4f-a529-44ea-aa69-1920b671a742.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 17:15:08', '2022-10-03 17:08:33', '2022-10-03 17:15:08');
INSERT INTO `files` VALUES ('9d81ba80-2a62-4d2f-85a9-0ac4bf9236a0', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'b78856a5-159e-4879-a71a-288675645468', 'bbb.pdf', 'e40f8afc-00be-46ea-a47d-6cb9a9fa9068.pdf', 'pdf', '125301', 'file', 16, 0, '2022-10-03 07:23:41', '2022-10-03 07:00:27', '2022-10-03 07:23:41');
INSERT INTO `files` VALUES ('a3d89992-5d1e-4d93-bb13-15283c6775a0', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '2ea7ca2c-9a32-481f-a9c2-f0562a76dec1', 'aaa.pdf', '332564bc-7f99-4c50-bab4-5ac7f51fc43d.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-04 17:08:09', '2022-10-03 17:50:54', '2022-10-04 17:08:09');
INSERT INTO `files` VALUES ('a414b2ef-7b87-49af-931f-a2b1bafd137a', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'eb739952-88e4-45c6-b805-ecc7ecb5ba41', 'aaa.pdf', 'fba44a9d-eecc-45b8-96ec-de46e1f19287.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 16:26:28', '2022-10-03 10:01:18', '2022-10-03 16:26:28');
INSERT INTO `files` VALUES ('a5b940d5-bc62-4a7a-808e-6cef170d0979', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '8e0e924a-9595-4404-b3e6-434360c3a69a.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 17:41:16', '2022-10-03 17:40:01', '2022-10-03 17:41:16');
INSERT INTO `files` VALUES ('a67237f3-88c0-4b61-a1f4-92530dce10cb', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', 'cc590f51-2d5f-42de-aa7e-82f3bd37de32.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 19:19:36', '2022-10-03 19:18:48', '2022-10-03 19:19:36');
INSERT INTO `files` VALUES ('a7a4d375-1eb1-4c5c-892b-29137783775f', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'b38fc2c9-1a30-41ca-a0a6-bf1ccec6a4c5', 'ccc.pdf', '86450d82-f37d-40e9-b355-28e7c38371d9.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 20:11:29', '2022-10-03 20:10:16', '2022-10-03 20:11:29');
INSERT INTO `files` VALUES ('aa83cfef-b2d7-49a1-ac1b-d12371aeeeea', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '144ff858-2c60-444a-bf0b-d2dab4effddd.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 16:44:32', '2022-10-03 16:40:23', '2022-10-03 16:44:32');
INSERT INTO `files` VALUES ('ab719e8d-9fc1-4b5c-8ee2-ab73733da3cd', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '523a2171-843b-4f47-b540-cec3a691c826.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 17:22:34', '2022-10-03 17:19:58', '2022-10-03 17:22:34');
INSERT INTO `files` VALUES ('ae06f567-ee0c-4cd9-b440-265fee5cefc0', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '0da0cc36-2aa1-4a28-9035-3f0a19ce3c1d', 'ccc.pdf', 'a226dcda-5c34-4882-8cd2-7b1e5996106b.pdf', 'pdf', '125301', 'file', 21, 1, '2022-10-06 01:13:55', '2022-10-05 01:37:41', '2022-10-06 01:13:55');
INSERT INTO `files` VALUES ('b0c04b3d-dda9-4069-8202-93a40dda1128', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '3d305d75-86a5-4e64-89a9-680e75713c3b.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 17:34:20', '2022-10-03 17:23:27', '2022-10-03 17:34:20');
INSERT INTO `files` VALUES ('b34092f8-f030-4a45-bf65-8cbe1202ac56', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'ccc.pdf', 'ad8a4f7a-9778-4ba0-9d85-52b5439ac5aa.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 19:14:02', '2022-10-03 19:13:33', '2022-10-03 19:14:02');
INSERT INTO `files` VALUES ('b3d96813-6e5d-457b-8ce8-165623163e3d', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '00f27b6f-bd42-4523-8d8c-01851ff84e6e', 'bbb.pdf', 'dcb7feb1-1cd5-40d1-b4b7-cfe0ec329b6c.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 20:37:28', '2022-10-03 20:33:40', '2022-10-03 20:37:28');
INSERT INTO `files` VALUES ('b49bb070-3f99-451c-a2e8-763e97caa2a0', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '357faa6a-5cb1-47a5-9675-b5c990cb8682', 'bbb.pdf', '0dedf00f-36c3-47b6-b523-b9169f7a7e58.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 20:16:01', '2022-10-03 20:13:10', '2022-10-03 20:16:01');
INSERT INTO `files` VALUES ('b5f48c29-71e8-409d-8e67-256c2ace01ec', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'a76d3d99-3eca-434c-a35a-178063d291d4', 'aaa.pdf', '2deb6874-706d-47ed-866f-52a08b12e0a9.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 20:16:02', '2022-10-03 20:14:59', '2022-10-03 20:16:02');
INSERT INTO `files` VALUES ('b67eca50-e89a-4163-ac82-c4d6f7f478ab', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '8994d916-1bc1-4ff3-9c70-76e1789c90b1.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-03 21:20:21', '2022-10-03 20:58:44', '2022-10-03 21:20:21');
INSERT INTO `files` VALUES ('b99a0085-67a8-4cbc-8522-63ae3e7ac2fe', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'bdbae75d-93ea-433e-9ecc-b459c5754bda', 'ccc.pdf', '5dcadd54-9a36-44d6-99f9-5d8b4a554eeb.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 16:26:29', '2022-10-03 05:19:33', '2022-10-03 16:26:29');
INSERT INTO `files` VALUES ('babbf568-1852-4885-8a64-0c13520ab781', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'fbbc7dcf-fb7c-425f-bce9-36e730141843', 'iTattoo.pdf', 'c13b158a-6c3a-4595-90d3-5c3b7894a8ec.pdf', 'pdf', '132394', 'file', 19, 0, NULL, '2022-10-07 22:45:31', '2022-10-07 22:45:31');
INSERT INTO `files` VALUES ('bc06caab-94af-4da0-9767-c736c91407d5', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'b78856a5-159e-4879-a71a-288675645468', 'aaa.pdf', 'cd8cbfc6-16db-4810-8c38-de1b5eb173db.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-03 07:23:41', '2022-10-03 07:02:41', '2022-10-03 07:23:41');
INSERT INTO `files` VALUES ('bdcacd2f-8447-40e1-80de-3c9aebf17226', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'ccc.pdf', '87160bb7-267f-4e38-b017-2cd4914b6008.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 18:02:16', '2022-10-03 17:28:03', '2022-10-03 18:02:16');
INSERT INTO `files` VALUES ('bfa3f34b-6257-4759-9628-2bc669433d9f', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'caaf7030-a71c-4c6d-9fcd-777a1d30a565', 'aaa.pdf', 'b4cd49b3-901b-493b-9ee0-7cc7d8678cee.pdf', 'pdf', '125301', 'file', 18, 0, NULL, '2022-10-04 21:26:05', '2022-10-04 21:26:05');
INSERT INTO `files` VALUES ('c1f9b1a2-45ab-461a-866b-7ed767ac8b41', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', 'f367d7df-951c-412f-8378-44aaddd41267.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 12:03:45', '2022-10-03 04:48:13', '2022-10-03 12:03:45');
INSERT INTO `files` VALUES ('c2d20add-d7a0-4f28-88e0-b4a4a2ba3622', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', 'e2ad962e-769e-456c-8932-2d574d1c303c.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 16:44:25', '2022-10-03 16:44:09', '2022-10-03 16:44:25');
INSERT INTO `files` VALUES ('c88fa43c-9926-4077-bf21-d5be292e88ef', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '2ea7ca2c-9a32-481f-a9c2-f0562a76dec1', 'bbb.pdf', '9461f5bc-01c1-484f-8d62-54c92b114a31.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 23:52:02', '2022-10-03 20:11:38', '2022-10-03 23:52:02');
INSERT INTO `files` VALUES ('ca32d0b7-23cd-4b58-97d7-6b89b36f3b4b', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'ccc.pdf', 'e9b3b119-5170-47a2-9ad2-9b71c495f9db.pdf', 'pdf', '125301', 'file', 19, 1, '2022-10-03 17:20:59', '2022-10-03 14:49:41', '2022-10-03 17:20:59');
INSERT INTO `files` VALUES ('ca82858a-a3fd-413f-ad0b-29bebceddb68', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'bdbae75d-93ea-433e-9ecc-b459c5754bda', 'aaa.pdf', 'b559cac5-6928-4754-9285-64dcf99f247d.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 16:26:29', '2022-10-03 07:23:50', '2022-10-03 16:26:29');
INSERT INTO `files` VALUES ('cab15dce-3bed-40a4-a3cb-d831e1db5e4f', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '6b702014-9178-4c59-8159-2bdf42008317', 'aaa.pdf', '94a335e4-7719-4db8-8e24-ea87237e8d69.pdf', 'pdf', '125301', 'file', 16, 0, NULL, '2022-10-04 18:00:45', '2022-10-04 18:00:45');
INSERT INTO `files` VALUES ('cc987358-900c-4a81-a083-b2c43ff3a38d', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'bdbae75d-93ea-433e-9ecc-b459c5754bda', 'bbb.pdf', 'e89da453-eb22-414f-90a6-2c5afdec45a8.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 16:26:30', '2022-10-03 05:09:46', '2022-10-03 16:26:30');
INSERT INTO `files` VALUES ('cd208bd7-8b15-487f-ac21-6b6b5e5672f4', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '9e084982-c05e-473b-994c-e1e747a9822a.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 21:35:08', '2022-10-03 21:33:51', '2022-10-03 21:35:08');
INSERT INTO `files` VALUES ('ce9163cb-eeb4-452b-ba37-d80754da2ab6', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '2ea7ca2c-9a32-481f-a9c2-f0562a76dec1', 'ccc.pdf', '77fab408-a671-46c3-ae2a-05af1315c52b.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-03 20:05:35', '2022-10-03 16:43:58', '2022-10-03 20:05:35');
INSERT INTO `files` VALUES ('d1dbba0f-0481-4ab6-a779-61003fd69e7b', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '2ea7ca2c-9a32-481f-a9c2-f0562a76dec1', 'ccc.pdf', '440fce5c-473e-4c8f-89b7-7d5498f308da.pdf', 'pdf', '125301', 'file', 16, 0, '2022-10-04 17:07:53', '2022-10-04 00:39:50', '2022-10-04 17:07:53');
INSERT INTO `files` VALUES ('d238d380-3f5c-4dbb-830e-0e22871d96e7', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '564a53ff-814a-4458-b8ad-aa31b852208b.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 21:20:22', '2022-10-03 20:46:40', '2022-10-03 21:20:22');
INSERT INTO `files` VALUES ('d59d4870-3642-480f-a78d-677cca4cbc25', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '43ad0e8d-7c70-4704-bc2c-e16d23ced632.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-03 17:22:33', '2022-10-03 17:21:12', '2022-10-03 17:22:33');
INSERT INTO `files` VALUES ('d8dc138d-3956-4040-b072-51b2825b2956', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'ccc.pdf', '0db9fadb-1a98-4e63-8b5d-c0ceccc5a019.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-03 17:52:58', '2022-10-03 17:51:04', '2022-10-03 17:52:58');
INSERT INTO `files` VALUES ('dc00d5f9-3a1f-4cd4-b430-7372a8835519', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '9b40d934-70f0-4940-aa1b-1e77e4a97e1e.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 17:36:50', '2022-10-03 17:34:48', '2022-10-03 17:36:50');
INSERT INTO `files` VALUES ('dc63b8cd-aa5e-480f-adf9-4aeeec771442', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'b78856a5-159e-4879-a71a-288675645468', 'aaa.pdf', '38d0e2fe-d2c7-4d25-a95b-5b2928b1013d.pdf', 'pdf', '125301', 'file', 16, 0, '2022-10-03 07:23:41', '2022-10-03 05:21:41', '2022-10-03 07:23:41');
INSERT INTO `files` VALUES ('de6d2713-6597-4a56-b5ba-f4fb4e510598', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '2ea7ca2c-9a32-481f-a9c2-f0562a76dec1', 'aaa.pdf', '4a7772a5-dbf6-4b5b-b712-1ebaf24c935b.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-04 00:05:15', '2022-10-03 20:05:59', '2022-10-04 00:05:15');
INSERT INTO `files` VALUES ('df85452c-7c0a-4181-a294-f25ffefce44f', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'af5b4faa-8c61-4e53-8126-eaef8f1c837a', '2.gif', '7de8242e-6f21-4269-b887-010b512ca9cc.gif', 'gif', '779894', 'image', 16, 0, '2022-10-04 19:29:56', '2022-10-04 19:27:13', '2022-10-04 19:29:56');
INSERT INTO `files` VALUES ('e60f9d68-b63c-4ce2-83e0-9ddaaafede76', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'b78856a5-159e-4879-a71a-288675645468', 'bbb.pdf', '044c4afc-3927-462b-a53f-19ecaafe6f83.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 07:23:40', '2022-10-03 05:08:29', '2022-10-03 07:23:40');
INSERT INTO `files` VALUES ('e653a982-f059-4255-b833-9bdd68f3bc79', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '155ecdd2-64aa-4caa-a26a-038a16132290', '1.gif', 'ca43f94b-f811-4aa3-be9b-f68714cd034a.gif', 'gif', '779894', 'image', 18, 0, NULL, '2022-10-04 21:41:09', '2022-10-04 21:41:10');
INSERT INTO `files` VALUES ('e8494a85-9fe1-4d74-a962-ef6b76ff8a1f', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '0d8c4eca-fe85-42c6-8e66-0ea771fc0a62', 'PPP.pdf', 'afc26229-3b23-4c02-acc9-43828b4b40ce.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-05 20:49:04', '2022-10-05 16:07:01', '2022-10-05 20:49:04');
INSERT INTO `files` VALUES ('e992c88a-df4b-4287-8708-d363cc08967d', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'f84cce8b-3901-4e84-af37-37c5bf45dadd', 'aaa.pdf', 'c92601fc-5378-452e-87ea-b40e785bf335.pdf', 'pdf', '125301', 'file', 16, 0, '2022-10-04 17:07:59', '2022-10-03 21:59:37', '2022-10-04 17:07:59');
INSERT INTO `files` VALUES ('ec33eca6-d9b5-4f9e-be32-d65a5ce245e8', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'caaf7030-a71c-4c6d-9fcd-777a1d30a565', 'bbb.pdf', '87fa34b7-83a2-4582-b497-10f441e43e1a.pdf', 'pdf', '125301', 'file', 16, 0, NULL, '2022-10-04 21:26:14', '2022-10-04 21:26:14');
INSERT INTO `files` VALUES ('ed26cdee-a8ef-4d2d-8f58-0f9a2e619304', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'bbb.pdf', 'b3f0434d-e9c2-4c1b-923a-4a72ccf0559c.pdf', 'pdf', '125301', 'file', 19, 1, '2022-10-03 17:34:22', '2022-10-03 15:28:23', '2022-10-03 17:34:22');
INSERT INTO `files` VALUES ('f7f57908-1326-4f91-a209-656fa648c4f1', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '2ea7ca2c-9a32-481f-a9c2-f0562a76dec1', 'aaa.pdf', '41a43e51-08fa-47a7-867b-490ee3eca1cd.pdf', 'pdf', '125301', 'file', 16, 0, '2022-10-04 00:51:19', '2022-10-03 20:37:56', '2022-10-04 00:51:19');
INSERT INTO `files` VALUES ('fa424dc7-49eb-4ff7-b7f8-864cefd43c28', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', 'b6662d57-dda3-49d8-a959-58ffd7536e5f.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-03 17:21:03', '2022-10-03 17:17:50', '2022-10-03 17:21:03');
INSERT INTO `files` VALUES ('fa742bbb-f986-46a8-8bdf-179b7d68ef81', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '230de16a-d0c6-424d-94d2-129ebfc29ccf', 'aaa.pdf', 'a5f7a062-312a-43a8-a134-ef6dd2f73f05.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-04 00:04:54', '2022-10-03 21:41:43', '2022-10-04 00:04:54');
INSERT INTO `files` VALUES ('fa9c5cbd-18ca-446a-ba39-d90cce74d57a', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'aaa.pdf', '4da55636-6005-4c24-b860-34f2a78ec1a1.pdf', 'pdf', '125301', 'file', 18, 0, '2022-10-03 17:34:18', '2022-10-03 17:24:13', '2022-10-03 17:34:18');
INSERT INTO `files` VALUES ('fb4d44de-1d8f-4eea-be60-0dd384bf2581', '9f395167-276f-41fa-aa78-54a858273fae', '9f395167-276f-41fa-aa78-54a858273fae', '3f78c90c-1757-46e0-987f-3e7241f819d2', 'Hero-data.pdf', 'ea17848d-c098-481d-9492-7705db9a1b18.pdf', 'pdf', '125301', 'file', 18, 0, NULL, '2022-10-04 01:19:31', '2022-10-04 17:06:38');
INSERT INTO `files` VALUES ('fb97408e-cf56-46c2-8637-d6b0bdd9624e', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'bbb.pdf', '638d5e4a-1b90-4f29-b4e7-54636d6c67f1.pdf', 'pdf', '125301', 'file', 31, 0, '2022-10-03 21:32:53', '2022-10-03 21:23:42', '2022-10-03 21:32:53');
INSERT INTO `files` VALUES ('fbded06d-0a68-4805-b498-002bc3b57199', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'dd37e5c8-62dd-4567-9e54-e2ef82160f33', 'ccc.pdf', 'c0e63f7d-0eb9-4d78-9e31-1bf8daa07b73.pdf', 'pdf', '125301', 'file', 19, 0, '2022-10-03 20:32:10', '2022-10-03 20:30:32', '2022-10-03 20:32:10');
INSERT INTO `files` VALUES ('fda4d8da-c641-4a7f-8a22-885c12e5717a', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '2ea7ca2c-9a32-481f-a9c2-f0562a76dec1', 'aaa.pdf', '054944ce-61bb-4def-974e-4c90bedd5707.pdf', 'pdf', '125301', 'file', 16, 0, '2022-10-03 17:49:53', '2022-10-03 17:48:41', '2022-10-03 17:49:53');
INSERT INTO `files` VALUES ('fdc407c2-b6c0-4b4f-8e8d-3649b8ad1d63', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'ae7301aa-7e55-4943-a062-82995f056e5c', '9040f7ec-ff6f-4ca4-8559-195dcae311ea', 'ccc.pdf', '1345dce4-b118-4022-b0fb-8cce8bdcfb52.pdf', 'pdf', '125301', 'file', 21, 0, '2022-10-04 00:31:59', '2022-10-04 00:27:40', '2022-10-04 00:31:59');

-- ----------------------------
-- Table structure for files_meta
-- ----------------------------
DROP TABLE IF EXISTS `files_meta`;
CREATE TABLE `files_meta`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `file_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `key` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(400) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 121 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of files_meta
-- ----------------------------
INSERT INTO `files_meta` VALUES (15, '7d2e8ab1-9784-47ea-953f-78457119685e', 'Cedula', 'WDQDQWD');
INSERT INTO `files_meta` VALUES (16, '7d2e8ab1-9784-47ea-953f-78457119685e', 'Nombres y apellidos', 'QDQWDQ');
INSERT INTO `files_meta` VALUES (17, 'd8ec733c-9c97-4790-8ceb-1acabb9042a8', 'Numero de cuenta', 'xqdwqdqw');
INSERT INTO `files_meta` VALUES (18, 'd8ec733c-9c97-4790-8ceb-1acabb9042a8', 'Edad', 'dqwdqw');
INSERT INTO `files_meta` VALUES (19, 'fd6a9a49-402e-40f6-9504-4e68b8640681', 'Cedula', 'dscdsc');
INSERT INTO `files_meta` VALUES (20, 'fd6a9a49-402e-40f6-9504-4e68b8640681', 'Nombres y apellidos', 'cdscs');
INSERT INTO `files_meta` VALUES (21, '328e0d49-872d-4a43-8321-f2054bf13f37', 'Numero de cuenta', 'sxsxa');
INSERT INTO `files_meta` VALUES (22, '328e0d49-872d-4a43-8321-f2054bf13f37', 'Edad', 'xsxax');
INSERT INTO `files_meta` VALUES (23, 'd0ca118e-e8b9-4076-8518-40dc4f73ba11', 'Numero de cuenta', '');
INSERT INTO `files_meta` VALUES (24, 'd0ca118e-e8b9-4076-8518-40dc4f73ba11', 'Edad', '');
INSERT INTO `files_meta` VALUES (25, 'ba92bdf1-b531-4a72-aef9-31a6f4944646', 'Cedula', 'dwqd');
INSERT INTO `files_meta` VALUES (26, 'ba92bdf1-b531-4a72-aef9-31a6f4944646', 'Nombres y apellidos', 'dqwdwqd');
INSERT INTO `files_meta` VALUES (27, '36bfc4fd-1b92-4e7c-851f-72c7a62b62e0', 'Cedula', 'kkk');
INSERT INTO `files_meta` VALUES (28, '36bfc4fd-1b92-4e7c-851f-72c7a62b62e0', 'Nombres y apellidos', 'mjj');
INSERT INTO `files_meta` VALUES (31, 'b9c2f726-c6a3-4e23-8f3d-24fca612ff4a', 'Nombres', 'dwadwa');
INSERT INTO `files_meta` VALUES (32, 'b9c2f726-c6a3-4e23-8f3d-24fca612ff4a', 'Numero de cuenta', 'dwq');
INSERT INTO `files_meta` VALUES (33, 'b9c2f726-c6a3-4e23-8f3d-24fca612ff4a', 'Cedula', 'dd');
INSERT INTO `files_meta` VALUES (34, '2d290f18-26cc-4c85-8232-6102c07b59f3', 'Nombres', 'aa');
INSERT INTO `files_meta` VALUES (35, '2d290f18-26cc-4c85-8232-6102c07b59f3', 'Numero de cuenta', 'bb');
INSERT INTO `files_meta` VALUES (36, '2d290f18-26cc-4c85-8232-6102c07b59f3', 'Cedula', 'cc');
INSERT INTO `files_meta` VALUES (37, '79e2f61c-a39d-4365-b0e4-5522b2e60dc9', 'Cedula', 'rr');
INSERT INTO `files_meta` VALUES (38, '79e2f61c-a39d-4365-b0e4-5522b2e60dc9', 'Nombres y apellidos', 'ff');
INSERT INTO `files_meta` VALUES (39, 'dd1688fc-ba01-474b-9ea8-b8c659351bba', 'Nombres', 'qqq');
INSERT INTO `files_meta` VALUES (40, 'dd1688fc-ba01-474b-9ea8-b8c659351bba', 'Numero de cuenta', 'qq');
INSERT INTO `files_meta` VALUES (41, 'dd1688fc-ba01-474b-9ea8-b8c659351bba', 'Cedula', 'qq');
INSERT INTO `files_meta` VALUES (42, '704fdc28-81f7-48c1-8291-b511e84a0f5b', 'Nombres', 'aaa');
INSERT INTO `files_meta` VALUES (43, '704fdc28-81f7-48c1-8291-b511e84a0f5b', 'Numero de cuenta', 'bb');
INSERT INTO `files_meta` VALUES (44, '704fdc28-81f7-48c1-8291-b511e84a0f5b', 'Cedula', 'cc');
INSERT INTO `files_meta` VALUES (45, '8b1cba4b-b19a-469b-86f4-03cfd6f498f7', 'Nombres', 'ddd');
INSERT INTO `files_meta` VALUES (46, '8b1cba4b-b19a-469b-86f4-03cfd6f498f7', 'Numero de cuenta', 'eee');
INSERT INTO `files_meta` VALUES (47, '8b1cba4b-b19a-469b-86f4-03cfd6f498f7', 'Cedula', 'ff');
INSERT INTO `files_meta` VALUES (48, '95222e6a-3511-4134-8034-60eb82948d17', 'Nombres', 'dewdewd');
INSERT INTO `files_meta` VALUES (49, '95222e6a-3511-4134-8034-60eb82948d17', 'Numero de cuenta', 'efrwfewd');
INSERT INTO `files_meta` VALUES (50, '95222e6a-3511-4134-8034-60eb82948d17', 'Cedula', 'edwedef');
INSERT INTO `files_meta` VALUES (53, '0cf691b6-ccad-402f-a474-e671175a03d1', 'Numero de cuenta', 'kjnk');
INSERT INTO `files_meta` VALUES (54, '0cf691b6-ccad-402f-a474-e671175a03d1', 'Edad', 'jnknj');
INSERT INTO `files_meta` VALUES (55, '594ee541-d0a5-434b-a0c3-9e72129a0a3d', 'Nombre', 'Jorge');
INSERT INTO `files_meta` VALUES (56, '594ee541-d0a5-434b-a0c3-9e72129a0a3d', 'Apellido', 'Huacho');
INSERT INTO `files_meta` VALUES (57, '594ee541-d0a5-434b-a0c3-9e72129a0a3d', 'Cedula', '1720736428');
INSERT INTO `files_meta` VALUES (58, '594ee541-d0a5-434b-a0c3-9e72129a0a3d', 'Numero de Cuenta', '12345678');
INSERT INTO `files_meta` VALUES (59, '594ee541-d0a5-434b-a0c3-9e72129a0a3d', 'Telefono', '0995850151');
INSERT INTO `files_meta` VALUES (60, 'dcc84d2e-1091-49b7-8ac3-98aa41583251', 'Nombres', ' h');
INSERT INTO `files_meta` VALUES (61, 'dcc84d2e-1091-49b7-8ac3-98aa41583251', 'Numero de cuenta', 'h');
INSERT INTO `files_meta` VALUES (62, 'dcc84d2e-1091-49b7-8ac3-98aa41583251', 'Cedula', 'g');
INSERT INTO `files_meta` VALUES (63, 'e2145190-1234-4826-9d70-c5ddf1c94841', 'nombre', 'campo1');
INSERT INTO `files_meta` VALUES (64, 'e2145190-1234-4826-9d70-c5ddf1c94841', 'apellido', 'campo2');
INSERT INTO `files_meta` VALUES (65, 'd82ba853-8458-4b65-b58d-f9674639885e', 'Campo 1', 'dato 1');
INSERT INTO `files_meta` VALUES (66, 'd82ba853-8458-4b65-b58d-f9674639885e', 'Campo 2', 'dato 2');
INSERT INTO `files_meta` VALUES (67, 'd82ba853-8458-4b65-b58d-f9674639885e', 'Campo 3', 'dato 3');
INSERT INTO `files_meta` VALUES (68, '66ec211f-aedf-4661-94c2-91a5d4df03f9', 'Fecha', '02-23-2021');
INSERT INTO `files_meta` VALUES (69, '66ec211f-aedf-4661-94c2-91a5d4df03f9', 'Monto', '3000');
INSERT INTO `files_meta` VALUES (70, '1701911c-6910-454e-b2fa-76f5ae64adf4', 'Fecha', '12-21-2021');
INSERT INTO `files_meta` VALUES (71, '1701911c-6910-454e-b2fa-76f5ae64adf4', 'Monto', '1500');
INSERT INTO `files_meta` VALUES (72, '77a1cf34-efe6-40c1-aedf-056faba0f881', 'Fecha', '01/08/2022');
INSERT INTO `files_meta` VALUES (73, '3b81eb99-c0e3-41fb-854b-9e9333b5c1fc', 'Fecha', '01/08/2022');
INSERT INTO `files_meta` VALUES (74, '3b81eb99-c0e3-41fb-854b-9e9333b5c1fc', 'Monto', '1000');
INSERT INTO `files_meta` VALUES (75, '197bf793-6073-4f53-b98e-37ca6049d175', 'Fecha', '31/07/2022');
INSERT INTO `files_meta` VALUES (76, '197bf793-6073-4f53-b98e-37ca6049d175', 'Monto', '1000');
INSERT INTO `files_meta` VALUES (77, 'b0e1ffac-5dec-41f5-9ccb-404000671430', 'Nombre del Documento', 'ORDEN DE PAGO');
INSERT INTO `files_meta` VALUES (78, '810a19d7-ce45-41f1-8a53-6890a42e7073', 'Nombre del Documento', 'PAGARE');
INSERT INTO `files_meta` VALUES (79, '7d616261-0753-4684-9a24-a676d0575ee7', 'Nombre del Documento', 'CROQUIS DOMICILIARIO');
INSERT INTO `files_meta` VALUES (80, '265d7a90-d132-4bfc-9104-2b0d9514fd32', 'Nombre del Documento', 'TABLA DE AMORTIZACION ');
INSERT INTO `files_meta` VALUES (81, 'd0ec8c57-5771-4100-87a0-6e92554835b0', 'Fecha', '01/08/2022');
INSERT INTO `files_meta` VALUES (82, '033437e2-2b7b-475c-a1fb-c6c59ac19248', 'Fecha', '25/07/2022');
INSERT INTO `files_meta` VALUES (83, '033437e2-2b7b-475c-a1fb-c6c59ac19248', 'Monto', '3000');
INSERT INTO `files_meta` VALUES (84, '1e7f7a65-615c-4e6b-bff0-f21c55358aaa', 'Nombre del Documento', 'TABLA DE AMORTIZACION');
INSERT INTO `files_meta` VALUES (85, 'b907f58f-1536-4a75-a66f-bcfe3e4178a0', 'Nombre del Documento', 'PAGARE');
INSERT INTO `files_meta` VALUES (86, '98529335-0bbe-4787-86c2-5a450dfd6f20', 'Fecha', '31/07/2022');
INSERT INTO `files_meta` VALUES (87, '98529335-0bbe-4787-86c2-5a450dfd6f20', 'Monto', '3000');
INSERT INTO `files_meta` VALUES (88, 'cedd5c83-aa89-42df-9d22-08e271169abd', 'Fecha', '27/07/2022');
INSERT INTO `files_meta` VALUES (89, '3378acf1-1049-4286-9904-30f89bdb42d7', 'Nombre del Documento', 'PAGARE ');
INSERT INTO `files_meta` VALUES (90, '97da2698-934a-45e7-bba8-c0ac64d316d0', 'Nombre del Documento', 'SOLICITUD DE CREDITO');
INSERT INTO `files_meta` VALUES (91, 'c795cf78-73c0-4c15-9acd-adb65441ae33', 'Nombre del Documento', 'TABLA DE AMORTIZACION');
INSERT INTO `files_meta` VALUES (93, '3bbe6373-7cd0-468b-89cd-4642ccc0e909', 'Nombre del Documento', 'ORDEN DE PAGO');
INSERT INTO `files_meta` VALUES (94, '0e31fab8-0d40-4038-83cd-6ee846861e2b', 'Fecha', '26/07/2022');
INSERT INTO `files_meta` VALUES (95, '0e31fab8-0d40-4038-83cd-6ee846861e2b', 'Monto', '3000');
INSERT INTO `files_meta` VALUES (96, 'ea4bca0f-7fdf-4eca-9d58-23a0cff72a94', 'Nombre del Documento', 'TABLA DE AMORTIZACION');
INSERT INTO `files_meta` VALUES (97, '5f91b7bd-14f6-4006-8af7-de506b5a10b9', 'Nombre del Documento', 'PAGARE');
INSERT INTO `files_meta` VALUES (98, 'b903eed4-23df-405b-85a6-c6b81ae1106e', 'Nombre del Documento', 'ORDEN DE PAGO');
INSERT INTO `files_meta` VALUES (99, 'f56e9e30-9949-4017-a552-277be9713612', 'Fecha', '28/07/2022');
INSERT INTO `files_meta` VALUES (100, 'f56e9e30-9949-4017-a552-277be9713612', 'Monto', '3000');
INSERT INTO `files_meta` VALUES (101, '491c0d12-550e-48c8-8fec-27b64519d4bf', 'Fecha', '21/07/2022');
INSERT INTO `files_meta` VALUES (102, '491c0d12-550e-48c8-8fec-27b64519d4bf', 'Monto', '5000');
INSERT INTO `files_meta` VALUES (103, '007bfee5-0422-46c6-8b18-21b518d34d58', 'Nombre del Documento', 'TABLA DE AMORTIZACION');
INSERT INTO `files_meta` VALUES (104, '29cf91fa-1a10-49e6-b2c9-617a45076882', 'Nombre del Documento', 'ORDEN DE PAGO');
INSERT INTO `files_meta` VALUES (105, 'f1c2dba3-f8c5-4f53-ac77-2da01d49edb4', 'Nombre del Documento', 'PAGARE');
INSERT INTO `files_meta` VALUES (106, '6d08eb08-b2fc-4f88-92b7-52b55bbe6ff6', 'Fecha', '22/07/2022');
INSERT INTO `files_meta` VALUES (107, '6d08eb08-b2fc-4f88-92b7-52b55bbe6ff6', 'Monto', '5000');
INSERT INTO `files_meta` VALUES (111, 'ca32d0b7-23cd-4b58-97d7-6b89b36f3b4b', 'Date', '2022-3-10');
INSERT INTO `files_meta` VALUES (112, 'ca32d0b7-23cd-4b58-97d7-6b89b36f3b4b', 'Transaction type', 'bbbbbbbb');
INSERT INTO `files_meta` VALUES (113, 'ca32d0b7-23cd-4b58-97d7-6b89b36f3b4b', 'Amount', '1');
INSERT INTO `files_meta` VALUES (117, 'ed26cdee-a8ef-4d2d-8f58-0f9a2e619304', 'Date', '2022');
INSERT INTO `files_meta` VALUES (118, 'ed26cdee-a8ef-4d2d-8f58-0f9a2e619304', 'Transaction type', 'bbbbbb');
INSERT INTO `files_meta` VALUES (119, 'ed26cdee-a8ef-4d2d-8f58-0f9a2e619304', 'Amount', '3');
INSERT INTO `files_meta` VALUES (120, 'ae06f567-ee0c-4cd9-b440-265fee5cefc0', 'Document Name', '132');

-- ----------------------------
-- Table structure for folders
-- ----------------------------
DROP TABLE IF EXISTS `folders`;
CREATE TABLE `folders`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `emoji` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `team_folder` tinyint(1) NOT NULL DEFAULT 0,
  `author` enum('user','member','visitor') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `folders_user_id_index`(`user_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of folders
-- ----------------------------
INSERT INTO `folders` VALUES ('00f27b6f-bd42-4523-8d8c-01851ff84e6e', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Loan', NULL, NULL, 0, 'user', '2022-10-03 20:37:28', '2022-10-03 20:21:15', '2022-10-03 20:37:28');
INSERT INTO `folders` VALUES ('0313b1b5-4075-4f41-af53-a94aa60800d8', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Category1', NULL, '{\"codes\":\"1F911\",\"char\":\"\\ud83e\\udd11\",\"name\":\"money-mouth face\",\"category\":\"Smileys & Emotion (face-tongue)\",\"group\":\"Smileys & Emotion\",\"subgroup\":\"face-tongue\"}', 0, 'user', NULL, '2022-10-04 22:06:41', '2022-10-07 23:35:29');
INSERT INTO `folders` VALUES ('05071547-c28a-4b80-9ebd-2a19e5b8a44d', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Withdrawal / Deposits', NULL, NULL, 0, 'user', '2022-10-04 00:32:09', '2022-10-04 00:27:16', '2022-10-04 00:32:09');
INSERT INTO `folders` VALUES ('09a3e008-1479-4f90-b8ba-a614b06b876d', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Category1', NULL, NULL, 0, 'user', '2022-10-03 20:15:59', '2022-10-03 20:15:18', '2022-10-03 20:15:59');
INSERT INTO `folders` VALUES ('0d8c4eca-fe85-42c6-8e66-0ea771fc0a62', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Category1', NULL, NULL, 0, 'user', '2022-10-05 20:49:08', '2022-10-05 16:07:02', '2022-10-05 20:49:08');
INSERT INTO `folders` VALUES ('0da0cc36-2aa1-4a28-9035-3f0a19ce3c1d', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Credit Document', NULL, '{\"codes\":\"1F60D\",\"char\":\"\\ud83d\\ude0d\",\"name\":\"smiling face with heart-eyes\",\"category\":\"Smileys & Emotion (face-affection)\",\"group\":\"Smileys & Emotion\",\"subgroup\":\"face-affection\"}', 0, 'user', '2022-10-06 01:13:55', '2022-10-05 01:37:42', '2022-10-06 01:13:55');
INSERT INTO `folders` VALUES ('155ecdd2-64aa-4caa-a26a-038a16132290', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'caaf7030-a71c-4c6d-9fcd-777a1d30a565', 'Services', NULL, NULL, 0, 'user', NULL, '2022-10-04 21:41:10', '2022-10-04 21:50:39');
INSERT INTO `folders` VALUES ('1aa2f216-d77a-454c-b55c-348816f49a94', '8dacdcc1-6d5f-431b-afe1-8d7a376e7a7b', NULL, '321 - M Corey', NULL, NULL, 0, 'user', '2022-10-02 12:57:47', '2022-10-02 12:57:37', '2022-10-02 12:57:47');
INSERT INTO `folders` VALUES ('1e068ae1-dab4-4e8b-9246-342db06ff7b2', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'b78856a5-159e-4879-a71a-288675645468', '333 - Fernando Juan', NULL, NULL, 0, 'user', '2022-10-03 16:26:28', '2022-10-03 10:01:06', '2022-10-03 16:26:28');
INSERT INTO `folders` VALUES ('22ed9318-0b06-4d47-8cd0-9da931a53ed3', '8dacdcc1-6d5f-431b-afe1-8d7a376e7a7b', NULL, 'New Folder', NULL, NULL, 0, 'user', '2022-10-02 10:28:25', '2022-10-02 09:02:28', '2022-10-02 10:28:25');
INSERT INTO `folders` VALUES ('230de16a-d0c6-424d-94d2-129ebfc29ccf', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Services', NULL, NULL, 0, 'user', '2022-10-04 00:26:08', '2022-10-03 21:41:44', '2022-10-04 00:26:08');
INSERT INTO `folders` VALUES ('2816a393-83e1-4a49-b567-acceec532c87', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Credit Document', NULL, NULL, 0, 'user', '2022-10-03 20:33:24', '2022-10-03 20:32:23', '2022-10-03 20:33:24');
INSERT INTO `folders` VALUES ('2ea7ca2c-9a32-481f-a9c2-f0562a76dec1', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Folder', NULL, NULL, 0, 'user', '2022-10-04 19:29:50', '2022-10-03 16:41:23', '2022-10-04 19:29:50');
INSERT INTO `folders` VALUES ('2eeb4b4c-e146-401f-be26-3a1eb3b3484f', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Credit Document', NULL, NULL, 0, 'user', '2022-10-03 20:05:27', '2022-10-03 19:58:55', '2022-10-03 20:05:27');
INSERT INTO `folders` VALUES ('3486dc4a-b6e4-4c88-baad-c7b9733482f8', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Services', NULL, NULL, 0, 'user', '2022-10-03 20:46:14', '2022-10-03 20:40:22', '2022-10-03 20:46:14');
INSERT INTO `folders` VALUES ('357faa6a-5cb1-47a5-9675-b5c990cb8682', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'a76d3d99-3eca-434c-a35a-178063d291d4', 'Credit Document', NULL, NULL, 0, 'user', '2022-10-03 20:16:02', '2022-10-03 20:11:38', '2022-10-03 20:16:02');
INSERT INTO `folders` VALUES ('37e4c5ec-f7c8-4a55-b74f-6f9c0decc208', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Folder', NULL, NULL, 0, 'user', '2022-10-03 20:58:27', '2022-10-03 20:58:24', '2022-10-03 20:58:27');
INSERT INTO `folders` VALUES ('3e2b1784-a337-41ca-8877-b278ec3ab181', '8dacdcc1-6d5f-431b-afe1-8d7a376e7a7b', NULL, '132 - Corey M', NULL, NULL, 0, 'user', '2022-10-02 12:55:17', '2022-10-02 09:03:16', '2022-10-02 12:55:17');
INSERT INTO `folders` VALUES ('3e4fa539-c708-4cf7-81d8-eaec769ccdba', '69986d86-95a4-41d8-ab4b-d312551b1574', NULL, '3313 - TT HC', NULL, NULL, 0, 'user', NULL, '2022-10-02 20:31:44', '2022-10-02 20:31:44');
INSERT INTO `folders` VALUES ('3f78c90c-1757-46e0-987f-3e7241f819d2', '9f395167-276f-41fa-aa78-54a858273fae', NULL, '629 - M Hero', NULL, NULL, 0, 'user', NULL, '2022-10-02 13:00:49', '2022-10-02 13:00:49');
INSERT INTO `folders` VALUES ('3f9cd066-db99-40cb-8a97-b16e5b0a20d3', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Services', NULL, NULL, 0, 'user', '2022-10-03 21:41:29', '2022-10-03 21:35:27', '2022-10-03 21:41:29');
INSERT INTO `folders` VALUES ('4162f19c-36d8-4bea-92c3-08e3886f8d40', '69986d86-95a4-41d8-ab4b-d312551b1574', NULL, '123 - tt PPP', NULL, NULL, 0, 'user', NULL, '2022-10-02 14:51:04', '2022-10-02 14:51:04');
INSERT INTO `folders` VALUES ('4255b316-b0e5-4f50-89ba-71c229f2f484', 'ae7301aa-7e55-4943-a062-82995f056e5c', '2ea7ca2c-9a32-481f-a9c2-f0562a76dec1', 'Loan', NULL, NULL, 0, 'user', '2022-10-03 17:49:47', '2022-10-03 17:48:42', '2022-10-03 17:49:47');
INSERT INTO `folders` VALUES ('44ce7318-326f-493d-9a49-cc842547f024', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Folder', NULL, NULL, 0, 'user', '2022-10-03 17:06:32', '2022-10-03 16:59:15', '2022-10-03 17:06:32');
INSERT INTO `folders` VALUES ('46710451-7215-4927-800d-4c05e4740c75', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, '123456789 - a z', NULL, NULL, 0, 'user', '2022-10-07 22:02:43', '2022-10-07 22:02:31', '2022-10-07 22:02:43');
INSERT INTO `folders` VALUES ('46aa172d-f2fc-45b3-9e2e-249da7fe9c4e', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Folder', NULL, NULL, 0, 'user', '2022-10-03 05:19:21', '2022-10-03 05:13:56', '2022-10-03 05:19:21');
INSERT INTO `folders` VALUES ('470193f4-53fb-4ee3-805a-2f4e2d520abe', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Withdrawal / Deposits', NULL, NULL, 0, 'user', '2022-10-03 19:38:58', '2022-10-03 19:35:00', '2022-10-03 19:38:58');
INSERT INTO `folders` VALUES ('4d5567ea-0378-4036-9c6c-99f2ad26c2d2', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Loan', NULL, NULL, 0, 'user', '2022-10-03 19:42:59', '2022-10-03 19:42:04', '2022-10-03 19:42:59');
INSERT INTO `folders` VALUES ('5248d29b-9fd9-41f8-b7d3-5e6f24b92471', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Services', NULL, NULL, 0, 'user', NULL, '2022-10-08 01:23:23', '2022-10-08 01:23:23');
INSERT INTO `folders` VALUES ('54fb8851-e145-4303-9111-399aa45585cd', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Category1', NULL, NULL, 0, 'user', '2022-10-03 20:16:01', '2022-10-03 20:15:00', '2022-10-03 20:16:01');
INSERT INTO `folders` VALUES ('5d487a75-00a7-4f07-90bf-e90e0f9299da', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, '123456789 - abc zzz', NULL, NULL, 0, 'user', NULL, '2022-10-08 01:24:31', '2022-10-08 01:24:31');
INSERT INTO `folders` VALUES ('650c88a0-672f-484d-88a8-090a79625708', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Services', NULL, NULL, 0, 'user', '2022-10-04 17:17:20', '2022-10-04 00:32:53', '2022-10-04 17:17:20');
INSERT INTO `folders` VALUES ('6b702014-9178-4c59-8159-2bdf42008317', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Withdrawal /Deposits', NULL, '{\"codes\":\"1F4AF\",\"char\":\"\\ud83d\\udcaf\",\"name\":\"hundred points\",\"category\":\"Smileys & Emotion (emotion)\",\"group\":\"Smileys & Emotion\",\"subgroup\":\"emotion\"}', 0, 'user', NULL, '2022-10-04 00:53:06', '2022-10-05 20:51:05');
INSERT INTO `folders` VALUES ('6cc9c0c1-5971-4fcb-bf2c-3de88c52b331', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Category1', NULL, NULL, 0, 'user', '2022-10-03 20:37:23', '2022-10-03 20:35:44', '2022-10-03 20:37:23');
INSERT INTO `folders` VALUES ('6d694405-e641-41e8-8f98-a74fc3e42987', '9f395167-276f-41fa-aa78-54a858273fae', NULL, 'New Folder', NULL, NULL, 0, 'user', '2022-10-02 12:56:19', '2022-10-02 10:27:29', '2022-10-02 12:56:19');
INSERT INTO `folders` VALUES ('6d76f81a-32b3-49d7-9dc5-d7b8cb38684a', '8dacdcc1-6d5f-431b-afe1-8d7a376e7a7b', NULL, '321 - M Corey', NULL, NULL, 0, 'user', NULL, '2022-10-02 12:56:59', '2022-10-02 12:56:59');
INSERT INTO `folders` VALUES ('7049dbd2-bd14-46dd-816a-751e3c592da6', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Credit Document', NULL, NULL, 0, 'user', '2022-10-03 20:18:42', '2022-10-03 20:16:27', '2022-10-03 20:18:42');
INSERT INTO `folders` VALUES ('71fcb39a-74f6-43b2-a7f8-c2cffd99c89b', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, '123123123 - crypto currency', NULL, NULL, 0, 'user', '2022-10-07 07:48:46', '2022-10-07 07:48:25', '2022-10-07 07:48:46');
INSERT INTO `folders` VALUES ('7238b53a-7c06-45ed-a810-ef8cc8dc9563', '9f395167-276f-41fa-aa78-54a858273fae', NULL, '321 - M Hero', NULL, NULL, 0, 'user', '2022-10-02 12:56:16', '2022-10-02 10:28:58', '2022-10-02 12:56:16');
INSERT INTO `folders` VALUES ('7388ac29-8a73-4dcd-b87f-fccc59ee0eaf', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Category1', NULL, NULL, 0, 'user', '2022-10-03 18:02:11', '2022-10-03 17:53:05', '2022-10-03 18:02:11');
INSERT INTO `folders` VALUES ('7724647f-b8ac-4160-b548-e9d8f197e6e9', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Withdrawal / Deposits', NULL, NULL, 0, 'user', '2022-10-04 19:30:14', '2022-10-04 19:23:02', '2022-10-04 19:30:14');
INSERT INTO `folders` VALUES ('800afd40-6a6d-4036-a7af-d97af0c91df8', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Category1', NULL, NULL, 0, 'user', '2022-10-03 19:19:33', '2022-10-03 19:18:49', '2022-10-03 19:19:33');
INSERT INTO `folders` VALUES ('802b4490-4191-4c21-8914-4cce47fcf2d9', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Services', NULL, NULL, 0, 'user', '2022-10-03 20:05:26', '2022-10-03 20:03:57', '2022-10-03 20:05:26');
INSERT INTO `folders` VALUES ('82b4956a-8746-4da3-b6e6-6108e6cbd8ed', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Services', NULL, NULL, 0, 'user', '2022-10-03 19:34:47', '2022-10-03 19:32:31', '2022-10-03 19:34:47');
INSERT INTO `folders` VALUES ('84547c93-6bad-444d-ae0f-f8da15533108', 'bc68b1c7-90d2-4c39-862b-c7e43f837626', NULL, '5412 - Client lastname Client name', NULL, NULL, 0, 'user', NULL, '2022-10-05 23:56:09', '2022-10-05 23:56:09');
INSERT INTO `folders` VALUES ('848f9a73-7045-410a-881c-ebae03671134', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Category1', NULL, NULL, 0, 'user', '2022-10-03 17:49:44', '2022-10-03 17:48:19', '2022-10-03 17:49:44');
INSERT INTO `folders` VALUES ('86dadb47-f5fb-48b1-85f2-c72610d11d77', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Withdrawal / Deposits', NULL, NULL, 0, 'user', '2022-10-03 21:41:27', '2022-10-03 21:39:01', '2022-10-03 21:41:27');
INSERT INTO `folders` VALUES ('871683b0-4325-4c75-bf21-acad3997e164', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, '234 - as as', NULL, NULL, 0, 'user', '2022-10-03 10:00:05', '2022-10-03 09:59:31', '2022-10-03 10:00:05');
INSERT INTO `folders` VALUES ('88d6ed94-0888-4e13-a22f-e682caf77f00', '8dacdcc1-6d5f-431b-afe1-8d7a376e7a7b', NULL, 'New Folder', NULL, NULL, 1, 'user', NULL, '2022-09-30 17:43:40', '2022-09-30 17:53:40');
INSERT INTO `folders` VALUES ('8e72ff3b-89d5-44ad-9cb3-fb79cbcb2ff4', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Credit Document', NULL, NULL, 0, 'user', '2022-10-03 20:46:12', '2022-10-03 20:41:11', '2022-10-03 20:46:12');
INSERT INTO `folders` VALUES ('9040f7ec-ff6f-4ca4-8559-195dcae311ea', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Credit Document', NULL, NULL, 0, 'user', '2022-10-04 00:32:03', '2022-10-04 00:27:41', '2022-10-04 00:32:03');
INSERT INTO `folders` VALUES ('9b51f418-17d1-4297-85f7-7278b2a511aa', '8dacdcc1-6d5f-431b-afe1-8d7a376e7a7b', NULL, '333 - M Corey', NULL, NULL, 0, 'user', NULL, '2022-10-02 12:57:58', '2022-10-02 12:57:58');
INSERT INTO `folders` VALUES ('9b787251-a08b-4078-bb1f-c6f30b6a62fa', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Withdrawal / Deposits', NULL, NULL, 0, 'user', '2022-10-03 21:20:14', '2022-10-03 20:58:46', '2022-10-03 21:20:14');
INSERT INTO `folders` VALUES ('a22864b1-5dce-4368-bbb5-c43fcf2a948c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Category1', NULL, NULL, 0, 'user', '2022-10-04 00:26:14', '2022-10-03 22:47:25', '2022-10-04 00:26:14');
INSERT INTO `folders` VALUES ('a2afeb29-ef00-4623-be19-5d5b8245e1e8', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Folder', NULL, NULL, 0, 'user', '2022-10-03 21:35:19', '2022-10-03 21:35:15', '2022-10-03 21:35:19');
INSERT INTO `folders` VALUES ('a76d3d99-3eca-434c-a35a-178063d291d4', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Category1', NULL, NULL, 0, 'user', '2022-10-03 20:16:03', '2022-10-03 20:13:11', '2022-10-03 20:16:03');
INSERT INTO `folders` VALUES ('a8af17a9-6e23-413e-8264-c36df733b44a', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Folder', NULL, NULL, 0, 'user', '2022-10-06 03:46:18', '2022-10-06 03:46:09', '2022-10-06 03:46:18');
INSERT INTO `folders` VALUES ('af5b4faa-8c61-4e53-8126-eaef8f1c837a', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Loan', NULL, NULL, 0, 'user', '2022-10-04 19:30:04', '2022-10-04 19:27:14', '2022-10-04 19:30:04');
INSERT INTO `folders` VALUES ('b38fc2c9-1a30-41ca-a0a6-bf1ccec6a4c5', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Category1', NULL, NULL, 0, 'user', '2022-10-03 20:11:29', '2022-10-03 20:06:00', '2022-10-03 20:11:29');
INSERT INTO `folders` VALUES ('b78856a5-159e-4879-a71a-288675645468', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, '333 - M corey', NULL, NULL, 0, 'user', '2022-10-03 16:26:32', '2022-10-02 21:57:55', '2022-10-03 16:26:32');
INSERT INTO `folders` VALUES ('bb3198f8-1741-4e10-b41a-e3c1ceade55f', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, '313 - HH HH', NULL, NULL, 0, 'user', '2022-10-07 07:47:43', '2022-10-07 07:40:28', '2022-10-07 07:47:43');
INSERT INTO `folders` VALUES ('bcd40509-8459-4074-aeef-422e7cbc7015', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Withdrawal / Deposits', NULL, NULL, 0, 'user', '2022-10-03 19:19:35', '2022-10-03 19:19:14', '2022-10-03 19:19:35');
INSERT INTO `folders` VALUES ('bdbae75d-93ea-433e-9ecc-b459c5754bda', 'ae7301aa-7e55-4943-a062-82995f056e5c', 'b78856a5-159e-4879-a71a-288675645468', 'New Folder', NULL, NULL, 0, 'user', '2022-10-03 16:26:30', '2022-10-03 05:09:34', '2022-10-03 16:26:30');
INSERT INTO `folders` VALUES ('be287922-28a6-412a-9970-8f7603f892fc', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Withdrawal / Deposits', NULL, NULL, 0, 'user', '2022-10-07 21:59:55', '2022-10-07 21:59:27', '2022-10-07 21:59:55');
INSERT INTO `folders` VALUES ('be46a9c8-68c5-4d4d-b853-66b0d03b0582', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Category1', NULL, NULL, 0, 'user', '2022-10-03 20:58:28', '2022-10-03 20:52:41', '2022-10-03 20:58:28');
INSERT INTO `folders` VALUES ('c3b5515a-3de5-4b17-8b77-0851c1ae1cd2', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Services', NULL, NULL, 0, 'user', '2022-10-03 20:37:26', '2022-10-03 20:33:41', '2022-10-03 20:37:26');
INSERT INTO `folders` VALUES ('c47be16f-6972-4cf6-96f0-3e8a2ea68576', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Credit Document', NULL, NULL, 0, 'user', '2022-10-03 20:30:23', '2022-10-03 20:29:18', '2022-10-03 20:30:23');
INSERT INTO `folders` VALUES ('c71a5c5c-8f6a-431d-8876-7ab379cbd1c3', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, '123 - aaa aaa', NULL, NULL, 0, 'user', '2022-10-04 00:36:56', '2022-10-04 00:36:48', '2022-10-04 00:36:56');
INSERT INTO `folders` VALUES ('c9976bc6-7651-4531-9021-4eacb997839a', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, '111 - S John', NULL, NULL, 0, 'user', '2022-10-04 17:17:16', '2022-10-04 00:53:33', '2022-10-04 17:17:16');
INSERT INTO `folders` VALUES ('caaf7030-a71c-4c6d-9fcd-777a1d30a565', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, '353 - do Juan', NULL, NULL, 0, 'user', NULL, '2022-10-04 21:25:57', '2022-10-06 01:25:26');
INSERT INTO `folders` VALUES ('ccce11cb-7c70-47d8-bda3-99c3b7dba604', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Loan', NULL, NULL, 0, 'user', '2022-10-03 19:38:56', '2022-10-03 19:38:00', '2022-10-03 19:38:56');
INSERT INTO `folders` VALUES ('d05251b7-d650-4547-b514-2abe945c3e3b', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Category1', NULL, NULL, 0, 'user', '2022-10-03 21:41:30', '2022-10-03 21:24:43', '2022-10-03 21:41:30');
INSERT INTO `folders` VALUES ('d44eea7b-e3c4-49a2-b520-8e9c96c80c2c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Folder', NULL, NULL, 0, 'user', '2022-10-04 00:36:41', '2022-10-04 00:36:36', '2022-10-04 00:36:41');
INSERT INTO `folders` VALUES ('d7dc4205-cb00-4acf-9fbd-6c6b2811669b', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Credit Document', NULL, NULL, 0, 'user', '2022-10-05 01:30:08', '2022-10-05 01:30:02', '2022-10-05 01:30:08');
INSERT INTO `folders` VALUES ('dd00489b-ea6e-4e88-9808-99de49b3e5f4', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Credit Document', NULL, NULL, 0, 'user', '2022-10-03 20:11:30', '2022-10-03 20:10:17', '2022-10-03 20:11:30');
INSERT INTO `folders` VALUES ('dd37e5c8-62dd-4567-9e54-e2ef82160f33', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Category1', NULL, NULL, 0, 'user', '2022-10-03 20:32:11', '2022-10-03 20:27:01', '2022-10-03 20:32:11');
INSERT INTO `folders` VALUES ('dd562ccf-acc7-4e01-8f79-3bc6118c17ae', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Services', NULL, NULL, 0, 'user', '2022-10-03 19:13:52', '2022-10-03 19:13:35', '2022-10-03 19:13:52');
INSERT INTO `folders` VALUES ('de12bd97-9a11-45ef-bd98-ff725409132c', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Services', NULL, NULL, 0, 'user', '2022-10-03 19:42:58', '2022-10-03 19:39:18', '2022-10-03 19:42:58');
INSERT INTO `folders` VALUES ('df2e3bf9-319e-4290-9f7a-77d1c5b86435', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Credit Document', NULL, NULL, 0, 'user', '2022-10-03 17:52:56', '2022-10-03 17:51:05', '2022-10-03 17:52:56');
INSERT INTO `folders` VALUES ('e0083dfc-9ece-4ebc-8e54-7de9f2552015', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Services', NULL, NULL, 0, 'user', '2022-10-03 19:58:42', '2022-10-03 19:43:10', '2022-10-03 19:58:42');
INSERT INTO `folders` VALUES ('e0be005a-d7c6-4e32-a0b0-b24ac13b40b5', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Folder', NULL, NULL, 0, 'user', '2022-10-03 21:35:06', '2022-10-03 21:34:53', '2022-10-03 21:35:06');
INSERT INTO `folders` VALUES ('e984ad69-6656-45ea-b7ac-d9431476ec89', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Withdrawal / Deposits', NULL, NULL, 0, 'user', '2022-10-03 20:32:14', '2022-10-03 20:30:33', '2022-10-03 20:32:14');
INSERT INTO `folders` VALUES ('eb739952-88e4-45c6-b805-ecc7ecb5ba41', 'ae7301aa-7e55-4943-a062-82995f056e5c', '1e068ae1-dab4-4e8b-9246-342db06ff7b2', 'New Folder', NULL, NULL, 0, 'user', '2022-10-03 16:26:28', '2022-10-03 10:01:26', '2022-10-03 16:26:28');
INSERT INTO `folders` VALUES ('ec5b9eee-389c-4914-9818-d38127f15c59', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Credit Document', NULL, NULL, 0, 'user', '2022-10-03 20:58:29', '2022-10-03 20:51:49', '2022-10-03 20:58:29');
INSERT INTO `folders` VALUES ('ecc7fe7c-4b59-47f0-b746-e5a22a9abad1', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Loan', NULL, NULL, 0, 'user', '2022-10-03 21:20:16', '2022-10-03 20:37:57', '2022-10-03 21:20:16');
INSERT INTO `folders` VALUES ('f089e238-647e-42a5-b894-61ce00ba8239', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Category1', NULL, NULL, 0, 'user', '2022-10-03 21:20:12', '2022-10-03 21:13:24', '2022-10-03 21:20:12');
INSERT INTO `folders` VALUES ('f1725d3b-81d3-4ee2-a2c9-3f15823138b9', '9f395167-276f-41fa-aa78-54a858273fae', NULL, '111 - M Hero', NULL, NULL, 0, 'user', NULL, '2022-10-02 13:00:14', '2022-10-02 13:00:14');
INSERT INTO `folders` VALUES ('f1886fd5-f977-4989-9d58-cecb82898beb', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'New Folder', NULL, NULL, 0, 'user', '2022-10-03 05:19:19', '2022-10-03 05:14:01', '2022-10-03 05:19:19');
INSERT INTO `folders` VALUES ('f44a3792-a51c-4bb3-b32c-86280cda590d', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Withdrawal / Deposits', NULL, NULL, 0, 'user', '2022-10-03 20:37:25', '2022-10-03 20:34:22', '2022-10-03 20:37:25');
INSERT INTO `folders` VALUES ('f84cce8b-3901-4e84-af37-37c5bf45dadd', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, '413 - Corey Monath', NULL, NULL, 0, 'user', NULL, '2022-10-03 21:53:06', '2022-10-05 11:15:49');
INSERT INTO `folders` VALUES ('f94ff1dd-2fcc-40e0-8250-e22b3db22645', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Credit Document', NULL, NULL, 0, 'user', '2022-10-03 21:32:55', '2022-10-03 21:26:17', '2022-10-03 21:32:55');
INSERT INTO `folders` VALUES ('fbbc7dcf-fb7c-425f-bce9-36e730141843', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'lomeo', NULL, NULL, 0, 'user', NULL, '2022-10-06 01:22:21', '2022-10-06 01:25:37');
INSERT INTO `folders` VALUES ('fe448e62-ab14-48a3-8d68-2c7b7fae94a9', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Credit Document', NULL, NULL, 0, 'user', '2022-10-06 01:13:49', '2022-10-04 19:21:59', '2022-10-06 01:13:49');
INSERT INTO `folders` VALUES ('fed518ab-c5fa-4a99-a212-e500ec399e3b', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Credit Document', NULL, NULL, 0, 'user', '2022-10-03 19:14:00', '2022-10-03 18:02:35', '2022-10-03 19:14:00');
INSERT INTO `folders` VALUES ('fef86393-0730-4d22-aea9-bf0a5c419cf8', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, 'Credit Document', NULL, NULL, 0, 'user', '2022-10-03 21:20:13', '2022-10-03 21:02:06', '2022-10-03 21:20:13');

-- ----------------------------
-- Table structure for jobs
-- ----------------------------
DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `queue` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED NULL DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `jobs_queue_index`(`queue` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of jobs
-- ----------------------------

-- ----------------------------
-- Table structure for language_translations
-- ----------------------------
DROP TABLE IF EXISTS `language_translations`;
CREATE TABLE `language_translations`  (
  `key` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lang` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of language_translations
-- ----------------------------

-- ----------------------------
-- Table structure for languages
-- ----------------------------
DROP TABLE IF EXISTS `languages`;
CREATE TABLE `languages`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `languages_locale_unique`(`locale` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of languages
-- ----------------------------

-- ----------------------------
-- Table structure for metered_tiers
-- ----------------------------
DROP TABLE IF EXISTS `metered_tiers`;
CREATE TABLE `metered_tiers`  (
  `metered_feature_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_unit` int NOT NULL DEFAULT 1,
  `last_unit` int NULL DEFAULT NULL,
  `per_unit` decimal(8, 4) NOT NULL,
  `flat_fee` decimal(8, 2) NULL DEFAULT NULL,
  INDEX `metered_tiers_metered_feature_id_index`(`metered_feature_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of metered_tiers
-- ----------------------------

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 41 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (1, '0000_00_00_000000_create_websockets_statistics_entries_table', 1);
INSERT INTO `migrations` VALUES (2, '2014_10_12_000000_create_users_table', 1);
INSERT INTO `migrations` VALUES (3, '2014_10_12_100000_create_password_resets_table', 1);
INSERT INTO `migrations` VALUES (4, '2019_08_15_171328_create_folders_table', 1);
INSERT INTO `migrations` VALUES (5, '2019_08_15_171345_create_files_table', 1);
INSERT INTO `migrations` VALUES (6, '2019_08_19_000000_create_failed_jobs_table', 1);
INSERT INTO `migrations` VALUES (7, '2019_12_14_000001_create_personal_access_tokens_table', 1);
INSERT INTO `migrations` VALUES (8, '2020_03_03_070319_create_favourites_folders_table', 1);
INSERT INTO `migrations` VALUES (9, '2020_04_20_071047_create_shares_table', 1);
INSERT INTO `migrations` VALUES (10, '2020_05_26_092649_create_user_settings_table', 1);
INSERT INTO `migrations` VALUES (11, '2020_06_25_142635_create_settings_table', 1);
INSERT INTO `migrations` VALUES (12, '2020_07_08_080255_create_pages_table', 1);
INSERT INTO `migrations` VALUES (13, '2020_11_22_101014_create_traffic_table', 1);
INSERT INTO `migrations` VALUES (14, '2020_12_05_090531_create_jobs_table', 1);
INSERT INTO `migrations` VALUES (15, '2021_01_09_130434_create_languages_table', 1);
INSERT INTO `migrations` VALUES (16, '2021_01_09_152048_create_language_strings', 1);
INSERT INTO `migrations` VALUES (17, '2021_08_15_141112_create_plans_table', 1);
INSERT INTO `migrations` VALUES (18, '2021_08_15_150116_create_plan_drivers_table', 1);
INSERT INTO `migrations` VALUES (19, '2021_08_15_150116_create_subscription_drivers_table', 1);
INSERT INTO `migrations` VALUES (20, '2021_08_24_080638_create_team_folder_invitations_table', 1);
INSERT INTO `migrations` VALUES (21, '2021_08_24_092726_create_team_folder_members_table', 1);
INSERT INTO `migrations` VALUES (22, '2021_11_05_080436_create_customers_table', 1);
INSERT INTO `migrations` VALUES (23, '2021_11_05_112613_create_subscriptions_table', 1);
INSERT INTO `migrations` VALUES (24, '2021_11_08_155428_create_plan_fixed_features_table', 1);
INSERT INTO `migrations` VALUES (25, '2021_11_18_064523_create_transactions_table', 1);
INSERT INTO `migrations` VALUES (26, '2021_11_19_164732_create_user_limitations_table', 1);
INSERT INTO `migrations` VALUES (27, '2021_12_07_073632_create_plan_metered_features_table', 1);
INSERT INTO `migrations` VALUES (28, '2021_12_07_073633_create_metered_tiers_table', 1);
INSERT INTO `migrations` VALUES (29, '2021_12_07_140020_create_usages_table', 1);
INSERT INTO `migrations` VALUES (30, '2021_12_07_151224_create_balance_table', 1);
INSERT INTO `migrations` VALUES (31, '2021_12_08_073056_create_failed_payments_table', 1);
INSERT INTO `migrations` VALUES (32, '2021_12_16_080643_create_billing_alerts_table', 1);
INSERT INTO `migrations` VALUES (33, '2021_12_28_180644_create_credit_cards_table', 1);
INSERT INTO `migrations` VALUES (34, '2022_01_25_152729_create_exifs_table', 1);
INSERT INTO `migrations` VALUES (35, '2022_02_17_073653_create_upload_requests_table', 1);
INSERT INTO `migrations` VALUES (36, '2022_03_10_052753_create_notifications_table', 1);
INSERT INTO `migrations` VALUES (37, '2022_03_29_161750_update_tables_to_v2.0.10_table', 1);
INSERT INTO `migrations` VALUES (38, '2022_03_30_143926_create_app_updates_table', 1);
INSERT INTO `migrations` VALUES (39, '2022_04_05_161750_update_tables_to_v2.0.14_table', 1);
INSERT INTO `migrations` VALUES (40, '2022_06_07_141902_create_dunnings_table', 1);

-- ----------------------------
-- Table structure for notifications
-- ----------------------------
DROP TABLE IF EXISTS `notifications`;
CREATE TABLE `notifications`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notifications
-- ----------------------------

-- ----------------------------
-- Table structure for pages
-- ----------------------------
DROP TABLE IF EXISTS `pages`;
CREATE TABLE `pages`  (
  `slug` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `visibility` tinyint(1) NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  INDEX `pages_slug_index`(`slug` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pages
-- ----------------------------
INSERT INTO `pages` VALUES ('terms-of-service', 'Terms of Service', 1, 'Laoreet cum hendrerit iaculis arcu phasellus congue et elementum, pharetra risus imperdiet aptent posuere rutrum parturient blandit, dapibus tellus ridiculus potenti aliquam sociis turpis. Nullam commodo eget laoreet risus cursus vel placerat, in dapibus sociis gravida faucibus sodales, fringilla potenti elit semper iaculis ullamcorper. Dignissim vulputate pretium montes pellentesque mollis, consectetur adipiscing curabitur semper sem rhoncus, litora viverra curae proin.');
INSERT INTO `pages` VALUES ('privacy-policy', 'Privacy Policy', 1, 'Sit orci justo augue maecenas laoreet consectetur natoque magnis in viverra sagittis, himenaeos urna facilisis mus proin primis diam accumsan tristique inceptos. Primis quisque posuere sit praesent lobortis feugiat semper convallis facilisis, vivamus gravida ligula nostra curae eu donec duis parturient senectus, arcu dolor viverra penatibus natoque cum nisi commodo. Litora sociis mauris justo nullam suspendisse mattis maecenas nascetur congue phasellus cras ultricies posuere donec, dapibus egestas diam lacus ornare montes senectus tincidunt eu taciti sed consequat.');
INSERT INTO `pages` VALUES ('cookie-policy', 'Cookie Policy', 1, 'Metus penatibus ligula dolor natoque non habitasse laoreet facilisis, libero vivamus eget semper vulputate interdum integer, phasellus lorem enim blandit consectetur nullam sollicitudin. Hendrerit interdum luctus ut in molestie himenaeos eros cum laoreet parturient est, eu lectus hac et netus viverra dictumst congue elit sem senectus litora, fames scelerisque adipiscing inceptos fringilla montes sociosqu suscipit auctor potenti. Elementum lacus vulputate viverra ac morbi ligula ipsum facilisi, sit eu imperdiet lacinia congue dis vitae.');

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets`  (
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  INDEX `password_resets_email_index`(`email` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of password_resets
-- ----------------------------
INSERT INTO `password_resets` VALUES ('monathcorey@gmail.com', '$2y$10$jG/gSJMWY9Y0FGEvvEEzweraSEzvXIHRaJxwO6eCNlfw7oTEi85FK', '2022-09-30 14:40:07');

-- ----------------------------
-- Table structure for personal_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE `personal_access_tokens`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `personal_access_tokens_token_unique`(`token` ASC) USING BTREE,
  INDEX `personal_access_tokens_tokenable_type_tokenable_id_index`(`tokenable_type` ASC, `tokenable_id` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of personal_access_tokens
-- ----------------------------

-- ----------------------------
-- Table structure for plan_drivers
-- ----------------------------
DROP TABLE IF EXISTS `plan_drivers`;
CREATE TABLE `plan_drivers`  (
  `plan_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `driver_plan_id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `driver` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of plan_drivers
-- ----------------------------

-- ----------------------------
-- Table structure for plan_fixed_features
-- ----------------------------
DROP TABLE IF EXISTS `plan_fixed_features`;
CREATE TABLE `plan_fixed_features`  (
  `plan_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `key` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  INDEX `plan_fixed_features_plan_id_index`(`plan_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of plan_fixed_features
-- ----------------------------

-- ----------------------------
-- Table structure for plan_metered_features
-- ----------------------------
DROP TABLE IF EXISTS `plan_metered_features`;
CREATE TABLE `plan_metered_features`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `plan_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `key` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `aggregate_strategy` enum('sum_of_usage','maximum_usage') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  INDEX `plan_metered_features_id_index`(`id` ASC) USING BTREE,
  INDEX `plan_metered_features_plan_id_index`(`plan_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of plan_metered_features
-- ----------------------------

-- ----------------------------
-- Table structure for plans
-- ----------------------------
DROP TABLE IF EXISTS `plans`;
CREATE TABLE `plans`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('active','archived') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `type` enum('fixed','metered') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'fixed',
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `amount` decimal(8, 2) NULL DEFAULT NULL,
  `currency` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `interval` enum('day','week','month','quarter','year') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'month',
  `visible` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  INDEX `plans_id_index`(`id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of plans
-- ----------------------------

-- ----------------------------
-- Table structure for settings
-- ----------------------------
DROP TABLE IF EXISTS `settings`;
CREATE TABLE `settings`  (
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  PRIMARY KEY (`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of settings
-- ----------------------------
INSERT INTO `settings` VALUES ('allowed_google_login', '0');
INSERT INTO `settings` VALUES ('app_color', '#2ca079');
INSERT INTO `settings` VALUES ('app_description', 'managing documents');
INSERT INTO `settings` VALUES ('app_favicon', 'system/ea47ef4c-17da-4622-844c-66ffdc5893a0.jpg');
INSERT INTO `settings` VALUES ('app_logo', 'system/9f7ea990-f61a-4342-b51e-8662c994b0c5.jpg');
INSERT INTO `settings` VALUES ('app_logo_dark', NULL);
INSERT INTO `settings` VALUES ('app_logo_horizontal', 'system/dbc8036f-d9f5-4f2e-a14d-c41d67751710.jpg');
INSERT INTO `settings` VALUES ('app_logo_horizontal_dark', NULL);
INSERT INTO `settings` VALUES ('app_og_image', 'system/b4377404-0cc0-44fd-a552-c9d735d44141.jpg');
INSERT INTO `settings` VALUES ('app_title', 'VueFileManager');
INSERT INTO `settings` VALUES ('app_touch_icon', 'system/b5200c8c-0543-446d-9428-38c4781758cb.jpg');
INSERT INTO `settings` VALUES ('contact_email', 'monathcorey@gmail.com');
INSERT INTO `settings` VALUES ('default_max_storage_amount', '5');
INSERT INTO `settings` VALUES ('default_max_team_member', '5');
INSERT INTO `settings` VALUES ('feature_description_1', 'You have full control over VueFileManager, no third authorities will control your service or usage, only you.');
INSERT INTO `settings` VALUES ('feature_description_2', 'VueFileManager is cloud storage software. You have to install and running application on your own server hosting.');
INSERT INTO `settings` VALUES ('feature_title_1', 'Truly Freedom');
INSERT INTO `settings` VALUES ('feature_title_2', 'The Sky is the Limit');
INSERT INTO `settings` VALUES ('feature_title_3', 'No Monthly Fees');
INSERT INTO `settings` VALUES ('features_description', 'Your private cloud storage software build on Laravel & Vue.js. No limits & no monthly fees. Truly freedom.');
INSERT INTO `settings` VALUES ('features_title', 'The Fastest Growing <span class=\"text-theme\">File Manager</span> on the CodeCanyon Market');
INSERT INTO `settings` VALUES ('google_analytics', NULL);
INSERT INTO `settings` VALUES ('header_description', 'Your private cloud storage software build on Laravel & Vue.js. No limits & no monthly fees. Truly freedom.');
INSERT INTO `settings` VALUES ('header_title', 'Simple <span class=\"text-theme\">&</span> Powerful Personal Cloud Storage');
INSERT INTO `settings` VALUES ('license', 'regular');
INSERT INTO `settings` VALUES ('purchase_code', '11cb9466-4c59-455f-9539-c7b3def201d8');
INSERT INTO `settings` VALUES ('registration', '1');
INSERT INTO `settings` VALUES ('section_feature_boxes', '1');
INSERT INTO `settings` VALUES ('section_features', '1');
INSERT INTO `settings` VALUES ('section_get_started', '1');
INSERT INTO `settings` VALUES ('section_pricing_content', '1');
INSERT INTO `settings` VALUES ('setup_wizard_success', '1');
INSERT INTO `settings` VALUES ('storage_limitation', '1');
INSERT INTO `settings` VALUES ('subscription_type', 'none');
INSERT INTO `settings` VALUES ('upload_limit', '0');
INSERT INTO `settings` VALUES ('user_verification', '0');

-- ----------------------------
-- Table structure for shares
-- ----------------------------
DROP TABLE IF EXISTS `shares`;
CREATE TABLE `shares`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `item_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('file','folder') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `permission` enum('visitor','editor') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `is_protected` tinyint(1) NOT NULL DEFAULT 0,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `expire_in` int NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `shares_token_unique`(`token` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shares
-- ----------------------------

-- ----------------------------
-- Table structure for sub_categories
-- ----------------------------
DROP TABLE IF EXISTS `sub_categories`;
CREATE TABLE `sub_categories`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fields` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp,
  `updated_at` timestamp NULL DEFAULT current_timestamp,
  `type_document_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `types_documents_id_index`(`type_document_id` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sub_categories
-- ----------------------------
INSERT INTO `sub_categories` VALUES (3, 'Sub categoría de prueba', '[{\"name\":\"Campo 1\",\"type\":1,\"required\":true}]', '2022-08-23 20:22:39', '2022-08-23 20:22:39', '16');
INSERT INTO `sub_categories` VALUES (4, 'Credit-AAA', '[{\"name\":\"Date of author\",\"type\":3,\"required\":\"\"},{\"name\":\"Read/Write\",\"type\":4,\"required\":\"\"}]', '2022-10-05 01:28:35', '2022-10-05 01:28:35', '21');
INSERT INTO `sub_categories` VALUES (5, 'SubCradit', '[{\"name\":\"Date of author \",\"type\":3,\"required\":\"\"}]', '2022-10-05 01:31:05', '2022-10-05 01:31:05', '21');
INSERT INTO `sub_categories` VALUES (6, 'aaa', '[{\"name\":\"date\",\"type\":3,\"required\":true}]', '2022-10-05 01:36:35', '2022-10-05 01:36:35', '19');
INSERT INTO `sub_categories` VALUES (7, 'AAA', '[{\"name\":\"Date\",\"type\":3,\"required\":\"\"}]', '2022-10-05 08:17:03', '2022-10-05 08:17:03', '19');
INSERT INTO `sub_categories` VALUES (8, 'BBB', '[{\"name\":\"Num\",\"type\":2,\"required\":true}]', '2022-10-05 08:31:16', '2022-10-05 08:31:16', '21');
INSERT INTO `sub_categories` VALUES (9, 'ACE', '[{\"name\":\"Date\",\"type\":3,\"required\":\"\"}]', '2022-10-05 08:34:51', '2022-10-05 08:34:51', '21');
INSERT INTO `sub_categories` VALUES (10, 'withrawal-a', '[{\"name\":\"Date\",\"type\":3,\"required\":true}]', '2022-10-05 08:39:27', '2022-10-05 08:39:27', '19');

-- ----------------------------
-- Table structure for subscription_drivers
-- ----------------------------
DROP TABLE IF EXISTS `subscription_drivers`;
CREATE TABLE `subscription_drivers`  (
  `subscription_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `driver_subscription_id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `driver` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of subscription_drivers
-- ----------------------------

-- ----------------------------
-- Table structure for subscriptions
-- ----------------------------
DROP TABLE IF EXISTS `subscriptions`;
CREATE TABLE `subscriptions`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `plan_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('fixed','pre-paid','auto-renew') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('inactive','active','cancelled','completed') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `renews_at` timestamp NULL DEFAULT NULL,
  `trial_ends_at` timestamp NULL DEFAULT NULL,
  `ends_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  INDEX `subscriptions_user_id_plan_id_status_index`(`user_id` ASC, `plan_id` ASC, `status` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of subscriptions
-- ----------------------------

-- ----------------------------
-- Table structure for team_folder_invitations
-- ----------------------------
DROP TABLE IF EXISTS `team_folder_invitations`;
CREATE TABLE `team_folder_invitations`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `inviter_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `permission` enum('can-edit','can-view','can-view-and-download') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('pending','accepted','waiting-for-registration','rejected') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of team_folder_invitations
-- ----------------------------
INSERT INTO `team_folder_invitations` VALUES ('03381541-622c-4f48-828e-ab86908f386b', '88d6ed94-0888-4e13-a22f-e682caf77f00', '8dacdcc1-6d5f-431b-afe1-8d7a376e7a7b', 'aaa@gmail.com', '#E8AA14', 'can-edit', 'pending', '2022-09-30 17:53:40', '2022-09-30 17:53:40');

-- ----------------------------
-- Table structure for team_folder_members
-- ----------------------------
DROP TABLE IF EXISTS `team_folder_members`;
CREATE TABLE `team_folder_members`  (
  `parent_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `permission` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of team_folder_members
-- ----------------------------
INSERT INTO `team_folder_members` VALUES ('88d6ed94-0888-4e13-a22f-e682caf77f00', '8dacdcc1-6d5f-431b-afe1-8d7a376e7a7b', 'owner');

-- ----------------------------
-- Table structure for traffic
-- ----------------------------
DROP TABLE IF EXISTS `traffic`;
CREATE TABLE `traffic`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `upload` bigint NOT NULL DEFAULT 0,
  `download` bigint NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  INDEX `traffic_user_id_index`(`user_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of traffic
-- ----------------------------
INSERT INTO `traffic` VALUES ('2a803bca-7109-423e-8110-4844e715fe2c', '8dacdcc1-6d5f-431b-afe1-8d7a376e7a7b', 1253010, 375903, '2022-09-30 14:44:18', '2022-09-30 23:14:53');
INSERT INTO `traffic` VALUES ('8814fb29-e0c0-4eb2-9827-ec1eb394da52', '8dacdcc1-6d5f-431b-afe1-8d7a376e7a7b', 7727916, 127023, '2022-10-01 00:13:00', '2022-10-01 23:00:59');
INSERT INTO `traffic` VALUES ('bbafb61a-613a-45bf-a526-47f6d86519f6', '8dacdcc1-6d5f-431b-afe1-8d7a376e7a7b', 470, 0, '2022-10-02 03:20:46', '2022-10-02 12:58:11');
INSERT INTO `traffic` VALUES ('fb0f22da-9df1-431e-a01f-b788be9abcbc', '9f395167-276f-41fa-aa78-54a858273fae', 501204, 0, '2022-10-02 10:14:12', '2022-10-02 13:01:12');
INSERT INTO `traffic` VALUES ('425a7053-3de6-435f-ab59-a4809ecdf166', '69986d86-95a4-41d8-ab4b-d312551b1574', 130510, 135934, '2022-10-02 14:51:14', '2022-10-02 20:39:14');
INSERT INTO `traffic` VALUES ('80babfbf-889e-42ff-9729-d58d01904a5b', 'ae7301aa-7e55-4943-a062-82995f056e5c', 751806, 250602, '2022-10-02 21:58:05', '2022-10-02 23:00:32');
INSERT INTO `traffic` VALUES ('0be27989-d755-417d-8b43-b3a4577f3c2f', 'ae7301aa-7e55-4943-a062-82995f056e5c', 17474500, 51959999, '2022-10-03 04:34:46', '2022-10-03 22:47:25');
INSERT INTO `traffic` VALUES ('10478c8a-b632-40c4-a421-11b43de015c8', 'ae7301aa-7e55-4943-a062-82995f056e5c', 3843294, 501204, '2022-10-04 00:27:15', '2022-10-04 22:06:48');
INSERT INTO `traffic` VALUES ('75bbe86f-8a40-4b23-8c81-f11ee14dbeed', '9f395167-276f-41fa-aa78-54a858273fae', 250602, 0, '2022-10-04 01:19:30', '2022-10-04 01:19:43');
INSERT INTO `traffic` VALUES ('c15a9543-380c-4025-bb9b-2ad0b84d2ad1', 'ae7301aa-7e55-4943-a062-82995f056e5c', 251326, 250602, '2022-10-05 01:30:01', '2022-10-05 16:07:10');
INSERT INTO `traffic` VALUES ('ae2c7e2a-f738-448a-b204-af87f989bc41', 'ae7301aa-7e55-4943-a062-82995f056e5c', 125301, 125301, '2022-10-06 00:08:16', '2022-10-06 01:22:20');
INSERT INTO `traffic` VALUES ('93b6b5c8-d358-4e81-88c0-edadf172050b', 'bc68b1c7-90d2-4c39-862b-c7e43f837626', 125301, 0, '2022-10-06 01:03:21', '2022-10-06 01:03:21');
INSERT INTO `traffic` VALUES ('a51e9e84-2d29-4454-a43e-bbdb99e4305f', 'ae7301aa-7e55-4943-a062-82995f056e5c', 6329804, 28799272, '2022-10-07 16:49:27', '2022-10-07 22:45:30');
INSERT INTO `traffic` VALUES ('91449f44-6445-4a97-9ccf-b31b6290423e', '9f395167-276f-41fa-aa78-54a858273fae', 0, 375903, '2022-10-07 21:11:01', '2022-10-07 21:49:09');
INSERT INTO `traffic` VALUES ('f583064c-2aa5-4934-a249-07e24b2280fa', 'bc68b1c7-90d2-4c39-862b-c7e43f837626', 0, 125301, '2022-10-07 22:00:37', '2022-10-07 22:00:37');
INSERT INTO `traffic` VALUES ('fef0be93-c0f6-412d-a3bb-2a11f992398c', 'ae7301aa-7e55-4943-a062-82995f056e5c', 168581, 125301, '2022-10-08 01:19:27', '2022-10-08 01:23:23');
INSERT INTO `traffic` VALUES ('14141521-64d7-4180-ab46-08f7fe240d59', '9f395167-276f-41fa-aa78-54a858273fae', 0, 250602, '2022-10-08 02:30:48', '2022-10-08 02:45:48');

-- ----------------------------
-- Table structure for transactions
-- ----------------------------
DROP TABLE IF EXISTS `transactions`;
CREATE TABLE `transactions`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('charge','credit','withdrawal') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('completed','error','cancelled') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `driver` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `reference` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `amount` decimal(8, 2) NOT NULL,
  `currency` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `metadata` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  INDEX `transactions_id_index`(`id` ASC) USING BTREE,
  INDEX `transactions_user_id_index`(`user_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of transactions
-- ----------------------------

-- ----------------------------
-- Table structure for types_documents
-- ----------------------------
DROP TABLE IF EXISTS `types_documents`;
CREATE TABLE `types_documents`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fields` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp,
  `updated_at` timestamp NULL DEFAULT current_timestamp,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of types_documents
-- ----------------------------
INSERT INTO `types_documents` VALUES (16, 'Loan', '[{\"name\":\"Date\"},{\"name\":\"Amount\"}]', '2022-06-04 11:35:29', '2022-08-19 20:31:35');
INSERT INTO `types_documents` VALUES (18, 'Services', '[{\"name\":\"Date\"},{\"name\":\"Type of service\"},{\"name\":\"Transaction\"}]', '2022-06-04 11:38:33', '2022-10-04 21:27:00');
INSERT INTO `types_documents` VALUES (19, 'Withdrawal / Deposits', '[{\"name\":\"Date\",\"required\":true},{\"name\":\"Transaction type\",\"required\":true},{\"name\":\"Amount\"}]', '2022-06-04 11:39:35', '2022-08-19 21:16:00');
INSERT INTO `types_documents` VALUES (21, 'Credit Document', '[{\"name\":\"Document Name\"}]', '2022-08-19 15:21:11', '2022-08-19 20:35:22');
INSERT INTO `types_documents` VALUES (31, 'New Category1', '[{\"name\":\"Date\",\"type\":3,\"required\":true}]', '2022-10-03 17:27:43', '2022-10-03 17:27:43');

-- ----------------------------
-- Table structure for upload_requests
-- ----------------------------
DROP TABLE IF EXISTS `upload_requests`;
CREATE TABLE `upload_requests`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `folder_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `status` enum('active','filling','filled','expired') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `notes` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of upload_requests
-- ----------------------------

-- ----------------------------
-- Table structure for usages
-- ----------------------------
DROP TABLE IF EXISTS `usages`;
CREATE TABLE `usages`  (
  `metered_feature_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `subscription_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` decimal(32, 4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of usages
-- ----------------------------

-- ----------------------------
-- Table structure for user_limitations
-- ----------------------------
DROP TABLE IF EXISTS `user_limitations`;
CREATE TABLE `user_limitations`  (
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `max_storage_amount` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `max_team_members` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_limitations
-- ----------------------------
INSERT INTO `user_limitations` VALUES ('8dacdcc1-6d5f-431b-afe1-8d7a376e7a7b', '5', '5');
INSERT INTO `user_limitations` VALUES ('9f395167-276f-41fa-aa78-54a858273fae', '5', '5');
INSERT INTO `user_limitations` VALUES ('69986d86-95a4-41d8-ab4b-d312551b1574', '5', '5');
INSERT INTO `user_limitations` VALUES ('ae7301aa-7e55-4943-a062-82995f056e5c', '5', '5');
INSERT INTO `user_limitations` VALUES ('412125da-1240-4a34-b047-3dece19e2728', '5', '5');
INSERT INTO `user_limitations` VALUES ('bc68b1c7-90d2-4c39-862b-c7e43f837626', '5', '5');

-- ----------------------------
-- Table structure for user_settings
-- ----------------------------
DROP TABLE IF EXISTS `user_settings`;
CREATE TABLE `user_settings`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `color` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `first_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `last_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `state` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `city` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `postal_code` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `country` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `phone_number` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `timezone` decimal(10, 1) NULL DEFAULT NULL,
  `emoji_type` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `theme_mode` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  INDEX `user_settings_id_index`(`id` ASC) USING BTREE,
  INDEX `user_settings_user_id_index`(`user_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_settings
-- ----------------------------
INSERT INTO `user_settings` VALUES ('8e9eb7a1-0d25-4362-a493-a793b1f55b2b', '8dacdcc1-6d5f-431b-afe1-8d7a376e7a7b', '52a82ebb-da95-4977-a08d-3200430e8ecf.png', '#D90368', 'coreymonath', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'twemoji', 'dark');
INSERT INTO `user_settings` VALUES ('97fa52c0-d226-454f-a41c-5e9300de2926', '9f395167-276f-41fa-aa78-54a858273fae', NULL, '#1BE7FF', 'hero', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'twemoji', 'dark');
INSERT INTO `user_settings` VALUES ('6d003248-2bc5-4b90-adab-85fefa38661a', '69986d86-95a4-41d8-ab4b-d312551b1574', NULL, '#541388', 'coreymonath', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'twemoji', 'dark');
INSERT INTO `user_settings` VALUES ('55295904-5aff-4ef4-b84e-d0b01197bab1', 'ae7301aa-7e55-4943-a062-82995f056e5c', NULL, '#D90368', 'coreymonath', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'twemoji', 'dark');
INSERT INTO `user_settings` VALUES ('4163a773-1209-4ddb-97e8-fc40bf9bd0e4', '412125da-1240-4a34-b047-3dece19e2728', NULL, '#2E294E', 'JuanFher', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'twemoji', 'system');
INSERT INTO `user_settings` VALUES ('20e9a287-53b5-421d-a6fb-1ccf0a6e7d2c', 'bc68b1c7-90d2-4c39-862b-c7e43f837626', NULL, '#D90368', 'Fernando', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'twemoji', 'system');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('admin','user') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `oauth_provider` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `two_factor_secret` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `two_factor_recovery_codes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `users_email_unique`(`email` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('412125da-1240-4a34-b047-3dece19e2728', 'admin', 'informacion.smartpc@gmail.com', '2022-10-05 23:05:10', NULL, '$2y$10$Iyqw5Z9SQiaUEwfP2gfaj.R97QZob4YwtHQFU75AvkSyxXzJm5Xwy', NULL, NULL, NULL, NULL, '2022-10-05 23:05:07', '2022-10-05 23:05:10');
INSERT INTO `users` VALUES ('69986d86-95a4-41d8-ab4b-d312551b1574', 'user', 'corey@gmail.com', '2022-10-02 14:35:05', NULL, '$2y$10$Iyqw5Z9SQiaUEwfP2gfaj.R97QZob4YwtHQFU75AvkSyxXzJm5Xwy', NULL, NULL, NULL, NULL, '2022-10-02 14:35:04', '2022-10-02 14:35:05');
INSERT INTO `users` VALUES ('9f395167-276f-41fa-aa78-54a858273fae', 'user', 'hero@gmail.com', '2022-10-02 10:09:45', NULL, '$2y$10$Iyqw5Z9SQiaUEwfP2gfaj.R97QZob4YwtHQFU75AvkSyxXzJm5Xwy', NULL, NULL, NULL, NULL, '2022-10-02 10:09:44', '2022-10-02 10:09:45');
INSERT INTO `users` VALUES ('ae7301aa-7e55-4943-a062-82995f056e5c', 'admin', 'coreymonath@gmail.com', '2022-10-02 21:56:01', NULL, '$2y$10$Iyqw5Z9SQiaUEwfP2gfaj.R97QZob4YwtHQFU75AvkSyxXzJm5Xwy', NULL, NULL, NULL, NULL, '2022-10-02 21:56:01', '2022-10-02 21:56:01');
INSERT INTO `users` VALUES ('bc68b1c7-90d2-4c39-862b-c7e43f837626', 'admin', 'juan@gmail.com', '2022-10-05 23:35:20', NULL, '$2y$10$lHQjmxdKbbzLBxw1W0guIewvcZO9dXAfGztDRxywcreynSC05i11m', NULL, NULL, NULL, NULL, '2022-10-05 23:35:19', '2022-10-05 23:35:20');

-- ----------------------------
-- Table structure for websockets_statistics_entries
-- ----------------------------
DROP TABLE IF EXISTS `websockets_statistics_entries`;
CREATE TABLE `websockets_statistics_entries`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `app_id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `peak_connection_count` int NOT NULL,
  `websocket_message_count` int NOT NULL,
  `api_message_count` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of websockets_statistics_entries
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
