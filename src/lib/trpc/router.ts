import { catRouter } from "./routes/cat";
import { t } from "../trpc/t";
import { authorRouter } from "./routes/author";

export const router = t.router({
	/**
	 * A function that greets you.
	 * @returns A string that says "Hello World!"
	 */
	greeting: t.procedure.query(async () => {
		return "Hello World!";
	}),
	cat: catRouter,
	author: authorRouter
});

export type Router = typeof router;
