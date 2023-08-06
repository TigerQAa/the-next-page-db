import { mysqlTable, unique, serial, varchar, int, primaryKey } from "drizzle-orm/mysql-core";

export const authors = mysqlTable(
	"authors",
	{
		id: serial("id").primaryKey().notNull().autoincrement(),
		name: varchar("name", { length: 256 }).notNull()
	},
	(table) => {
		return {
			nameIdx: unique("name_idx").on(table.name)
		};
	}
);

export const books = mysqlTable("books", {
	id: serial("id").primaryKey().notNull().autoincrement(),
	title: varchar("title", { length: 256 }).notNull(),
	description: varchar("description", { length: 2000 }).notNull(),
	cover: varchar("cover", { length: 512 }),
	genreId: int("genre_id").notNull(),
	authorId: int("author_id").notNull()
});

export const booksToReviews = mysqlTable(
	"books_to_reviews",
	{
		bookId: int("book_id").notNull(),
		reviewId: int("review_id").notNull()
	},
	(btr) => ({
		pk: primaryKey(btr.bookId, btr.reviewId)
	})
);

export const catagories = mysqlTable(
	"catagories",
	{
		id: serial("id").primaryKey().notNull().autoincrement(),
		name: varchar("name", { length: 256 }).notNull()
	},
	(table) => ({
		nameIdx: unique("name_idx").on(table.name)
	})
);

export const genres = mysqlTable(
	"genres",
	{
		id: serial("id").primaryKey().notNull().autoincrement(),
		name: varchar("name", { length: 256 }).notNull()
	},
	(table) => {
		return {
			nameIdx: unique("name_idx").on(table.name)
		};
	}
);

export const reviewers = mysqlTable(
	"reviewers",
	{
		id: serial("id").primaryKey().notNull().autoincrement(),
		name: varchar("name", { length: 256 }).notNull(),
		link: varchar("link", { length: 512 }).notNull(),
		catagoryId: int("catagory_id").notNull()
	},
	(table) => ({
		nameIdx: unique("name_idx").on(table.name)
	})
);

export const reviews = mysqlTable("reviews", {
	id: serial("id").primaryKey().notNull().autoincrement(),
	link: varchar("link", { length: 512 }).notNull(),
	reviewerId: int("reviewer_id").notNull()
});
