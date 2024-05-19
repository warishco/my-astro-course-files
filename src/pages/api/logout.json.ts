import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  console.log("Logout Route");
  return new Response(null);
};
