import { t } from "$lib/trpc/t";

export const catRouter = t.router({
	image: t.procedure.query(() => {
		return "https://cat-world.com/wp-content/uploads/2021/11/ginger-cat-breeds.jpg";
	})
});
