import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  console.log("in middleware");
  return new Response(JSON.stringify({ success: true }));
});
