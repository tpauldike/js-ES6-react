CREATE DATABASE IF NOT EXISTS price_precision;

USE price_precision;

CREATE TABLE IF NOT EXISTS user_info (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	gender VARCHAR(6) NOT NULL,
	phone VARCHAR(20) NOT NULL,
	email VARCHAR(300) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL,
	business_name VARCHAR(255) NOT NULL,
	business_id VARCHAR(36) NOT NULL,
	description VARCHAR(500),
	business_address VARCHAR(500)
);

CREATE INDEX ind_user_business_id ON user_info (business_id);

CREATE TABLE IF NOT EXISTS product_info (
	order_no INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	business_id VARCHAR(36) NOT NULL,
	product_name VARCHAR(255) NOT NULL,
	price INT NOT NULL,
	per VARCHAR(10) NOT NULL DEFAULT "unit",
	product_status BOOLEAN DEFAULT TRUE,
	created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt DATETIME on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (business_id) REFERENCES user_info(business_id)
);
