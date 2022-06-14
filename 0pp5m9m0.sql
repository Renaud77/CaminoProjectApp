-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 14 juin 2022 à 19:23
-- Version du serveur : 5.7.29
-- Version de PHP : 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `0pp5m9m0`
--
CREATE DATABASE IF NOT EXISTS `0pp5m9m0` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `0pp5m9m0`;

-- --------------------------------------------------------

--
-- Structure de la table `state`
--

CREATE TABLE `state` (
  `name` varchar(255) NOT NULL,
  `display` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `state`
--

INSERT INTO `state` (`name`, `display`, `title`) VALUES
('t1', 1, 'TITRE ÉLÉMENT 1'),
('t2', 1, 'TITRE ÉLÉMENT 2 TRES TRES TRES LONG'),
('t3', 1, 'TITRE ÉLÉMENT 3');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
