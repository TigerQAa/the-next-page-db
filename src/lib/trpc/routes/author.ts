import { db } from "$lib/db";
import { t } from "../t";

export const authorRouter = t.router({
	getFirstAuthor: t.procedure.query(async () => {
		const author = await db.query.authors.findFirst({
			columns: {
				name: true
			}
		});
		return author?.name
	})
});
