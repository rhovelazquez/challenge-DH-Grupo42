-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-02-2024 a las 00:08:52
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

--
-- Volcado de datos para la tabla `candidate`
--

INSERT INTO `candidate` (`id`, `DNI`, `name`, `last_name`, `email`, `phone`, `perfil_LNK`, `birth_date`, `genre`, `image`) VALUES
(1, 23456458, 'Rocio Alejandra', 'Velazquez', 'rocio@gmail.com', 3885478847, 'https://www.linkedin.com/in/rocio-alejandra-velazquez-146941', '2002-12-02', 'femenino', 'foto1.jpg'),
(2, 44854754, 'Jorge', 'Lavayen', 'jorge@gmail.com', 3885789456, 'https://www.linkedin.com/in/jorge-lavayen-146941287/', '1995-05-02', 'masculino', 'foto2.jpg'),
(3, 46200123, 'Martin', 'Romero', 'martin14@gmail.com', 3886123456, 'tinchito', '2014-02-05', 'masculino', 'foto5.jpg'),
(4, 38958887, 'Cristian', 'Ramos', 'cris@gmail.com', 3885965845, 'https://www.linkedin.com/in/cristian-velazquez-146941287/', '1995-10-25', 'masculino', 'foto6.jpg'),
(5, 42541741, 'Josefina', 'Carabajal', 'josefina@gmail.com', 3885458741, 'https://www.linkedin.com/in/josefina-carabajal-146941287/', '1998-05-12', 'femenino', 'foto3.jpg'),
(6, 30254142, 'Maria', 'Fuentes', 'maria@gmail.com', 11254785, 'https://www.linkedin.com/in/maria-magdalena-fuentes-14694128', '1992-02-12', 'femenino', 'foto4.jpg'),
(7, 45742123, 'Facundo', 'Rosselli', 'facundo@gmail.com', 3886965213, 'https://www.linkedin.com/in/facundo-rosselli-146941287/', '2004-09-16', 'masculino', 'foto2.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `candidate_profession`
--

CREATE TABLE `candidate_profession` (
  `id` int(11) NOT NULL,
  `candidate_id` int(11) NOT NULL,
  `profession_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `candidate_profession`
--

INSERT INTO `candidate_profession` (`id`, `candidate_id`, `profession_id`) VALUES
(1, 1, 2),
(2, 2, 2),
(3, 3, 1),
(4, 3, 2),
(5, 4, 6),
(6, 5, 4),
(7, 6, 7),
(8, 7, 9),
(12, 1, 13);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profession`
--

CREATE TABLE `profession` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profession`
--

INSERT INTO `profession` (`id`, `name`) VALUES
(1, 'Analista de sistemas'),
(2, 'Ingeniero de software '),
(3, 'Arquitecto'),
(4, 'Contador'),
(5, 'Ingeniero en minas'),
(6, 'Abogado'),
(7, 'Profesor'),
(8, 'Policia'),
(9, 'Tecnico quimico'),
(10, 'Geólogo'),
(11, 'Secretario'),
(12, 'Licenciado en sistemas'),
(13, 'Analista Programador');

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
-- AUTO_INCREMENT de la tabla `candidate`
--
ALTER TABLE `candidate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `candidate_profession`
--
ALTER TABLE `candidate_profession`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `profession`
--
ALTER TABLE `profession`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

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
