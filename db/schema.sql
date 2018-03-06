DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger_data (
	id int AUTO_INCREMENT,
	burger_name VARCHAR(30) NOT NULL,
	devoured BOOLEAN DEFAULT FALSE,
	PRIMARY KEY(id)
);

INSERT INTO burger_data (burger_name)

VALUES ("bacon cheese burger"), ("chicken burger"), ("veggie burger");

