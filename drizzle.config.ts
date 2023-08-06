import type { Config } from "drizzle-kit";
import { config } from "dotenv";
config();

export default {
	schema: "./src/lib/db/schemas/*",
	driver: "mysql2",
	dbCredentials: {
		connectionString: process.env.ADMIN_DATABASE_URL!
	},
	out: "./drizzle"
} satisfies Config;
