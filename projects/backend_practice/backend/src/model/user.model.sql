-- Create a new database
CREATE DATABASE IF NOT EXISTS learn_with_me;

-- Use database
USE learn_with_me;

-- create a new table for the database
CREATE TABLE IF NOT EXISTS subscription_form(
	id SERIAL NOT NULL,
	unique_id VARCHAR(36) NOT NULL,
	full_name VARCHAR(255) NOT NULL,
	google_name VARCHAR(255) NOT NULL,
	gender VARCHAR(10) NOT NULL,
	marital_status VARCHAR(20) NOT NULL,
	subscription VARCHAR(20) NOT NULL,
	course VARCHAR(20) NOT NULL,
	schedule VARCHAR(50) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
	phone CHAR(11) NOT NULL,
	PRIMARY KEY (unique_id)
);
