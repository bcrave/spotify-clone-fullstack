import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleWare(req: NextRequest) {
  if (signedinPages.find((page) => page === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }
  }
}
