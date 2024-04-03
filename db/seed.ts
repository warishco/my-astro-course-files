import { Links, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Links).values([
    {
      title: "Sample Link 2",
      description: "This is a sample description",
      url: "https://google.com",
      isRead: false,
    },
  ]);
}
