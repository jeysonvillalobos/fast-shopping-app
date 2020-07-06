CREATE DATABASE  IF NOT EXISTS `fastshopping` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `fastshopping`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fastshopping
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `idCategory` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`idCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Technology'),(2,'Phone'),(3,'Films'),(4,'Clothes'),(5,'Tablet'),(6,'Headphones'),(7,'Entertainment');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `idProduct` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `price` float NOT NULL,
  `image` tinytext NOT NULL,
  `description` tinytext NOT NULL,
  `publication_date` date DEFAULT NULL,
  PRIMARY KEY (`idProduct`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Samsung Galaxy note 10+',542.99,'https://images-na.ssl-images-amazon.com/images/I/71znGoLL%2B4L._SL1500_.jpg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2019-05-20'),(2,'Acer',105.58,'https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/Acer_Aspire_5_E515_52G/Acer_Aspire_5_E515_52G_L_1.jpg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2020-01-23'),(3,'Iphone 11',300,'https://images-eu.ssl-images-amazon.com/images/I/41xcc9p33XL.jpg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2020-06-21'),(4,'Adidas',900,'https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2019-05-06'),(5,'Nike',425,'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uoxteud0rv2d2wml9xkl/calzado-air-force-1-07-TjqcX1.jpg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2020-05-05'),(6,'Macbook',200,'https://static.esrgear.com/wp-content/uploads/2019/10/MacBook-Pro-13.3%E2%80%B3-Hardshell-Laptop-Case-3.jpg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2020-06-01'),(7,'Supreme Shirt',300,'https://cdn.fs.grailed.com/api/file/bIRbRetYTeSkt4uA3PU1','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2015-12-24'),(8,'Samsung Galaxy tab',865.25,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6357/6357007_sd.jpg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2019-01-01'),(9,'Airpods',800,'https://ishopcolombia.vteximg.com.br/arquivos/ids/180287-1000-1000/MRXJ2BE_A-_1.jpg?v=637105477511930000','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2020-05-05'),(10,'Headphones',950,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6316/6316142ld.jpg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2020-07-03'),(11,'Kindle',980,'https://images-na.ssl-images-amazon.com/images/I/419i0JkdTHL._AC_SY400_.jpg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2013-05-06'),(12,'Iphone 7',750,'https://media.aws.alkosto.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-7-plata-p1.jpg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2016-03-07'),(13,'Samsung Galaxy s8',600,'https://images-na.ssl-images-amazon.com/images/I/61MF7kZkrIL._AC_SX425_.jpg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2012-09-07'),(14,'Google Pixel 2',100,'https://cnet2.cbsistatic.com/img/pM8OloQJlWoKE-URhy_Fpvngw6I=/940x0/2017/10/03/1c15f2a7-431d-4b1b-a973-34041f36323a/venturebeat-pixel-2-xl-front-back-blass.png','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2020-01-02'),(15,'Samsung TV',150,'https://exitocol.vtexassets.com/arquivos/ids/1995143/televisor-samsung-65-pulgadas-tu7000-crystal-uhd-4k-smart-tv.jpg?v=637262120981370000','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2020-03-04'),(16,'Miky the doll',300,'https://media.4rgos.it/s/Argos/9177374_R_SET?$Main768$&w=620&h=620','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2018-03-04'),(17,'Frozen 2',650,'https://target.scene7.com/is/image/Target/GUEST_97f08fe6-8abc-4969-969e-2d7a7303ed60?wid=488&hei=488&fmt=pjpeg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2020-04-25'),(18,'Max Steel dol',50.32,'https://i5.walmartimages.com/asr/6faefd01-4e30-44ec-980b-7624d29608be_1.9b6ab52e0d8219348ba60a037ce127b1.jpeg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2011-06-22'),(19,'Louis Vuitton',960,'https://i.pinimg.com/originals/9f/c4/95/9fc495facd1cf6b31ac9166323c86d37.jpg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2020-03-04'),(20,'Toy Story 4',50,'https://i.pinimg.com/originals/19/83/fe/1983feca223852fa076bf3965e79d5ff.jpg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2020-06-02'),(21,'Frozen 2 Movie',50,'https://images-na.ssl-images-amazon.com/images/I/814ByGMTgML._SL1366_.jpg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2020-06-03'),(22,'Terminator 2',50,'https://upload.wikimedia.org/wikipedia/en/8/85/Terminator2poster.jpg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2020-05-04'),(23,'GPS',100.55,'https://cdn.shopify.com/s/files/1/0339/7965/products/garm.jpg?v=1564691161','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2018-03-01'),(24,'Universal',233,'https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/7/7/7702561755162-vista-1-_1_.jpg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2019-08-21'),(25,'Mini Sony',450,'https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/4/5/4548736070981.jpg','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iure cum velit consequatur numquam porro dolor, inventore aliquid nostrum itaque ipsam pariatur doloremque a ullam laboriosam enim animi soluta commodi.','2020-04-22');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_by_categories`
--

DROP TABLE IF EXISTS `products_by_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_by_categories` (
  `idProductsCategories` int NOT NULL AUTO_INCREMENT,
  `idProduct` int NOT NULL,
  `idCategory` int NOT NULL,
  PRIMARY KEY (`idProductsCategories`),
  KEY `idProduct_idx` (`idProduct`),
  KEY `idCategory_idx` (`idCategory`),
  CONSTRAINT `idCategory` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`idCategory`),
  CONSTRAINT `idProduct` FOREIGN KEY (`idProduct`) REFERENCES `products` (`idProduct`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_by_categories`
--

LOCK TABLES `products_by_categories` WRITE;
/*!40000 ALTER TABLE `products_by_categories` DISABLE KEYS */;
INSERT INTO `products_by_categories` VALUES (1,1,1),(2,1,2),(3,2,1),(4,3,1),(5,3,2),(6,4,4),(7,5,4),(8,6,1),(9,7,4),(10,8,1),(11,8,5),(12,9,1),(13,10,1),(14,10,6),(15,9,6),(16,9,2),(17,11,1),(18,11,7),(19,12,1),(20,12,2),(21,13,1),(22,13,2),(23,14,1),(24,14,2),(25,15,1),(26,15,7),(27,16,7),(28,17,7),(29,18,7),(30,19,4),(31,20,3),(32,20,7),(33,21,7),(34,21,3),(35,22,3),(36,22,7),(37,23,1),(38,24,1),(39,25,1);
/*!40000 ALTER TABLE `products_by_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `iduser` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(100) CHARACTER SET utf8 NOT NULL,
  `id` int NOT NULL,
  `address` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `phoneNumber` varchar(25) COLLATE utf8_spanish_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'John Doe',123456,'Main Street, #100-200, Wonderland','0000 000 000','johndoe@gmail.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-06 17:39:47
