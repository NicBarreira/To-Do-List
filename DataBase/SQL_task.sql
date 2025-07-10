CREATE DATABASE IF NOT EXISTS tasks_diarias;
USE tasks_diarias;

CREATE TABLE usuarios (
nome varchar (100) NOT NULL,
email varchar (255) NOT NULL,
gender ENUM ('Male', 'Female', 'Other') NOT NULL
);