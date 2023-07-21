ALTER TABLE `authors` MODIFY COLUMN `name` varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE `books` MODIFY COLUMN `title` varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE `books` MODIFY COLUMN `description` varchar(2000) NOT NULL;--> statement-breakpoint
ALTER TABLE `books` MODIFY COLUMN `cover` varchar(512) NOT NULL;--> statement-breakpoint
ALTER TABLE `books` MODIFY COLUMN `genre_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `books` MODIFY COLUMN `author_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `catagories` MODIFY COLUMN `name` varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE `genres` MODIFY COLUMN `name` varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE `reviewers` MODIFY COLUMN `name` varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE `reviewers` MODIFY COLUMN `link` varchar(512) NOT NULL;--> statement-breakpoint
ALTER TABLE `reviewers` MODIFY COLUMN `catagory_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `reviews` MODIFY COLUMN `link` varchar(512) NOT NULL;--> statement-breakpoint
ALTER TABLE `reviews` MODIFY COLUMN `reviewer_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `books_to_reviews` ADD PRIMARY KEY(`book_id`,`review_id`);--> statement-breakpoint
ALTER TABLE `catagories` ADD CONSTRAINT `name_idx` UNIQUE(`name`);--> statement-breakpoint
ALTER TABLE `reviewers` ADD CONSTRAINT `name_idx` UNIQUE(`name`);