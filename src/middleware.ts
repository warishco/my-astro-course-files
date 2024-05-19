import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const protectedRoutes = ["/admin", "/secret"];
  const { pathname } = context.url;

  if (protectedRoutes.includes(pathname)) {
    const authHeader = context.request.headers.get("authorization");
    if (authHeader) {
      const authValue = authHeader.split(" ")[1] ?? "username:password";

      const [username, password] = atob(authValue).split(":");

      if (
        username.toLowerCase() === "chris" &&
        password.toLowerCase() === "password"
      ) {
        return next();
      }
    }
    return new Response("Auth required", {
      status: 401,
      headers: {
        "WWW-authenticate": 'Basic realm="Secure Area"',
      },
    });
  }

  return next();
});
