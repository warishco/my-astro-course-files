import type { APIRoute } from "astro";
import { Links, db, eq } from "astro:db";

export const DELETE: APIRoute = async ({ params }) => {
  const id = params.id;

  try {
    if (!id) {
      throw new Error("There was no ID provided");
    }

    await db.delete(Links).where(eq(Links.id, Number(id)));

    return new Response(null, { status: 204 });
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return new Response(
        JSON.stringify({
          message: e.message,
          success: false,
        }),
        {
          status: 404,
        }
      );
    }
  }
  return new Response(
    JSON.stringify({
      message: "There was an unknown error",
      success: false,
    }),
    {
      status: 404,
    }
  );
};

export const PATCH: APIRoute = async ({ params, request }) => {
  const id = params.id;
  const { isRead } = await request.json();

  try {
    if (!id) {
      throw new Error("There was no ID provided");
    }

    await db
      .update(Links)
      .set({ isRead })
      .where(eq(Links.id, Number(id)));

    return new Response(null, { status: 200 });
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return new Response(
        JSON.stringify({
          message: e.message,
          success: false,
        }),
        {
          status: 404,
        }
      );
    }
  }
  return new Response(
    JSON.stringify({
      message: "There was an unknown error",
      success: false,
    }),
    {
      status: 404,
    }
  );
};
