/** @type { import("drizzle-kit").Config } */

export default {
    schema:"./utils/schema.tsx",
    dialect:'postgresql',
    dbCredentials:{
        url:'postgresql://neondb_owner:MY7AJfbLt8VQ@ep-fancy-truth-a10na5cq.ap-southeast-1.aws.neon.tech/Ai-Content-Generator?sslmode=require'
    }
};