import { relations } from "drizzle-orm";
import { authors, books, booksToReviews, catagories, genres, reviewers, reviews } from ".";

export const authorRelations = relations(authors, ({ many }) => ({
	books: many(books)
}));

export const bookRelations = relations(books, ({ one, many }) => ({
	author: one(authors, {
		fields: [books.authorId],
		references: [authors.id]
	}),
	genre: one(genres, {
		fields: [books.genreId],
		references: [genres.id]
	}),
	booksToReviews: many(booksToReviews)
}));

export const catagoriesRelations = relations(catagories, ({ many }) => ({
	reviewers: many(reviewers)
}));

export const genreRelations = relations(genres, ({ many }) => ({
	books: many(books)
}));

export const reviewersRelations = relations(reviewers, ({ one, many }) => ({
	catagory: one(catagories, {
		fields: [reviewers.catagoryId],
		references: [catagories.id]
	}),
	reviews: many(reviews)
}));

export const reviewsRelations = relations(reviews, ({ one, many }) => ({
	reviewer: one(reviewers, {
		fields: [reviews.reviewerId],
		references: [reviewers.id]
	}),
	booksToReviews: many(booksToReviews)
}));

export const bookToReviewsRelations = relations(booksToReviews, ({ one }) => ({
	book: one(books, {
		fields: [booksToReviews.bookId],
		references: [books.id]
	}),
	review: one(reviews, {
		fields: [booksToReviews.reviewId],
		references: [reviews.id]
	})
}));
