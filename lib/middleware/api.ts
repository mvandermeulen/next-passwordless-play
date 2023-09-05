import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function ApiMiddleware(req: NextRequest) {
  // can use the session object to setup protected API routes
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  return NextResponse.next();
}
