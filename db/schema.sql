
DROP DATABASE IF EXISTS elderhelper_db;

CREATE DATABASE elderhelper_db;
USE elderhelper_db;

CREATE TABLE patient(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  patient_name varchar(200) NOT NULL,
  age INT (3) NOT NULL,
  zip INT (5) NOT NULL,
  goodHealth TINYINT (1),
  head TINYINT (1),
  chest TINYINT (1),
  back TINYINT (1),
  arms TINYINT (1),
  stomach TINYINT (1),
  torso TINYINT (1),
  legs TINYINT (1),
  comments TINYINT (1), 
  
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP)