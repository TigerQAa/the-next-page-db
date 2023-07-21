import { trpc } from "$lib/trpc/client";
import type { PageLoad } from "./$types";

export const load = (async (event) => {
	return {
		// Make sure to pass the event to trpc.
		link: await trpc(event).cat.image.query()
	};
}) satisfies PageLoad;
