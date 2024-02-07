-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-02-2024 a las 22:49:22
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recruiting_rh`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `candidate`
--

CREATE TABLE `candidate` (
  `id` int(11) NOT NULL,
  `DNI` bigint(20) NOT NULL,
  `name` varchar(60) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `phone` bigint(10) NOT NULL,
  `perfil_LNK` varchar(60) NOT NULL,
  `birth_date` date NOT NULL,
  `genre` varchar(30) NOT NULL,
  `image` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `candidate_profession`
--

CREATE TABLE `candidate_profession` (
  `id` int(11) NOT NULL,
  `candidate_id` int(11) NOT NULL,
  `profession_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profession`
--

CREATE TABLE `profession` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `candidate`
--
ALTER TABLE `candidate`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `candidate_profession`
--
ALTER TABLE `candidate_profession`
  ADD PRIMARY KEY (`id`),
  ADD KEY `candidateID_apirantes_candidateId` (`candidate_id`),
  ADD KEY `professionId_profesionnes_professionId` (`profession_id`);

--
-- Indices de la tabla `profession`
--
ALTER TABLE `profession`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `profession`
--
ALTER TABLE `profession`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `candidate_profession`
--
ALTER TABLE `candidate_profession`
  ADD CONSTRAINT `candidateID_apirantes_candidateId` FOREIGN KEY (`candidate_id`) REFERENCES `candidate` (`id`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `professionId_profesionnes_professionId` FOREIGN KEY (`profession_id`) REFERENCES `profession` (`id`) ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
