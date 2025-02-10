import {
  DEFAULT_LOGIN_REDIRECT,
  authRoutes,
  protectedRoutes,
  publicRoutes,
} from "@/routes";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  let access = false;
  const sessionCookie = request.cookies.get("USER_SESSION");
  const accessCookie = request.cookies.get("ACCESS_TOKEN");
  const response = NextResponse.next();

  // Check if the user is authenticated
  if (sessionCookie && accessCookie) {
    const accessExpire = JSON.parse(accessCookie.value).expire;
    if (Date.now() < accessExpire) {
      console.log("MIDDLEWARE valid Access token");
      access = true;
    }

    if (Date.now() > accessExpire) {
      console.log("MIDDLEWARE expired Access token signing out");
      access = false;
      response.cookies.delete("ACCESS_TOKEN");
      response.cookies.delete("USER_SESSION");
    }
  }

  const nextUrl = request.nextUrl;
  const pathname = nextUrl.pathname;

  const isPublicRoute = publicRoutes.some((route) =>
    typeof route === "string" ? route === pathname : route.test(pathname)
  );

  const isProtectedRoute = protectedRoutes.some((route) =>
    typeof route === "string" ? route === pathname : route.test(pathname)
  );

  const isAuthRoute = authRoutes.some((route) =>
    typeof route === "string" ? route === pathname : route.test(pathname)
  );
  // Check if the current path is the same as DEFAULT_LOGIN_REDIRECT
  const isRedirectToDefault = pathname === DEFAULT_LOGIN_REDIRECT;

  // Handle public routes: If the route is public, allow access regardless of authentication status
  if (isPublicRoute) {
    return response;
  }

  // Handle authenticated routes
  if (isAuthRoute) {
    if (access) {
      // Prevent a redirection loop by checking if the user is already on the DEFAULT_LOGIN_REDIRECT route
      if (!isRedirectToDefault) {
        return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
      }
      return response; // Allow access to the default redirect route
    } else {
      // Allow access to the authentication route if the user is not authenticated
      return response;
    }
  }

  // Redirect to signin if the route is not public and the user is not authenticated and the route is protected
  if (!access && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth", nextUrl));
  }

  // Allow access to private routes if the user is authenticated
  return response;
}

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
