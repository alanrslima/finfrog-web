import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const token = request.cookies.get("FIN_TOKEN")?.value;
  // console.log("FIN_TOKEN", token);
  const token = request.cookies.get("TESTE_TOKEN")?.value;
  console.log("TESTE_TOKEN", token);

  const privateRoutes = ["/transactions"];

  // const currentUser = request.cookies.get("FIN_TOKEN")?.value;
  // if (token && !request.nextUrl.pathname.startsWith("/transactions")) {
  //   return Response.redirect(new URL("/transactions", request.url));
  // }
  // if (token && request.nextUrl.pathname.startsWith("/transactions")) {
  //   return Response.redirect(new URL("/transactions", request.url));
  // }
  // if (!token && !request.nextUrl.pathname.startsWith("/signin")) {
  //   return Response.redirect(new URL("/signin", request.url));
  // }
  if (!token) {
    return Response.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
