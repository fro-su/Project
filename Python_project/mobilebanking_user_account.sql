-- Host: localhost    Database: mobilebanking2
DROP TABLE IF EXISTS `user_account`;
CREATE TABLE `user_account` (
  `id_no` int DEFAULT NULL,
  `name_full` varchar(50) DEFAULT NULL,
  `balance` int DEFAULT NULL,
  `account_no` int DEFAULT NULL,
  `pin_no` int DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
LOCK TABLES `user_account` WRITE;
INSERT INTO `user_account`
VALUES (1, 'Firew Ayele', 101752, 1234, 123456),
  (2, 'leul', 9860, 2345, 234567),
  (3, 'biruk', 56521, 3456, 345678);
UNLOCK TABLES;