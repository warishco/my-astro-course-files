import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  console.log("Login Route");
  return new Response(null);
};
