/** @type {import("drizzle-kit").Config} */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_dQwuYeC0D6vn@ep-quiet-cake-a5lp0725-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
};
