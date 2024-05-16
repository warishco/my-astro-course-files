import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  // if (url.pathname === "/") {
  //   return Response.redirect(new URL("/redirected", url), 302);
  // }
  // return next();
  context.locals.userMessage = () => {
    // pathname check
    const pathname = context.url.pathname;
    // auth status
    const authStatus = true;
    if (pathname === "/" && !authStatus) {
      return "You must be logged in.";
    }
    if (pathname !== "/") {
      return "Freedom!";
    }
    return "";
  };
  return next();
});
