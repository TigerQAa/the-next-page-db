import type { RequestEvent } from "@sveltejs/kit";
import type { inferAsyncReturnType } from "@trpc/server";

// We are not using the event paramater for this function.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createContext(_event: RequestEvent) {
	return {
		// context information
	};
}

export type Context = inferAsyncReturnType<typeof createContext>;
