import { Links, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Links).values([
    {
      title: "Title",
      url: "google.com",
      isRead: true,
      upvoteNum: 3,
    },
  ]);
}
