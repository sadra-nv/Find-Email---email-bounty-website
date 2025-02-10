export const publicRoutes = [
  "/",
  "/courses",
  "/courses/**",
  /^\/courses(\/.*)?$/,
];
export const protectedRoutes = [/^\/dashboard(\/.*)?$/];

export const authRoutes = ["/auth/**", /^\/auth(\/.*)?$/];

export const DEFAULT_LOGIN_REDIRECT = "/dashboard/profile";
