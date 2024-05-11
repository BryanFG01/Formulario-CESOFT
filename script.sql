CREATE TABLE `cesoft`.`personas` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(80) NOT NULL,
  `Apellidos` VARCHAR(80) NOT NULL,
  `Ciudad` INT NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  `Telefono` VARCHAR(45) NOT NULL,
  `plataforma` VARCHAR(3) NOT NULL,
  `libro` VARCHAR(3) NOT NULL,
  `Comentarios` TEXT(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


CREATE TABLE `cesoft`.`paises` (
  `idPaises` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idPaises`));

ALTER TABLE `cesoft`.`paises` 
CHANGE COLUMN `iso` `iso` CHAR(2) NOT NULL AFTER `idPaises`;



CREATE TABLE `cesoft`.`ciudades` (
  `idciudades` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(100) NOT NULL,
  `idPaises` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idciudades`));