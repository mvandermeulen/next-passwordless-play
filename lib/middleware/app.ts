import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { parse } from "@/lib/middleware/utils";
import {
  AUTH_PAGE_ROUTES,
  OPEN_PAGE_ROUTES,
  VALID_PAGE_ROUTES,
} from "../constants";

export default async function AppMiddleware(req: NextRequest) {
  const { path } = parse(req);
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // pages that don't need auth
  if (OPEN_PAGE_ROUTES.has(path)) {
    return NextResponse.next();
  }

  // redirects to home page when user is not authenticated (exception - login & register page)
  if (!session?.email && !AUTH_PAGE_ROUTES.has(path)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // redirects to protected page when is authenticated and tries to visit the login or register page
  if (session?.email && AUTH_PAGE_ROUTES.has(path)) {
    return NextResponse.redirect(new URL("/protected", req.url));
  }

  // check if path is allowed
  if (!VALID_PAGE_ROUTES.has(path)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
