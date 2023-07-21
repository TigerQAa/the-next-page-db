-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `authors` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256),
	CONSTRAINT `name_idx` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `books` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`title` varchar(256),
	`description` varchar(2000),
	`cover` varchar(512),
	`genre_id` int,
	`author_id` int
);
--> statement-breakpoint
CREATE TABLE `books_to_reviews` (
	`book_id` int NOT NULL,
	`review_id` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `catagories` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(100)
);
--> statement-breakpoint
CREATE TABLE `genres` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256),
	CONSTRAINT `name_idx` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `reviewers` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(100),
	`link` varchar(512),
	`catagory_id` int
);
--> statement-breakpoint
CREATE TABLE `reviews` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`link` varchar(512),
	`reviewer_id` int
);

*/