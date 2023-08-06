import { connect } from "@planetscale/database";
import * as schema from "./schemas";
import * as relations from "./schemas/relations";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { MAIN_DATABASE_URL } from "$env/static/private";

const connection = connect({
	url: MAIN_DATABASE_URL
});

export const db = drizzle(connection, { schema: { ...schema, ...relations } });
