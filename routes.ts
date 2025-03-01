export const publicRoutes = [
  "/",
  // "/courses",
  // "/courses/**",
  // /^\/courses(\/.*)?$/,
];
export const protectedRoutes = [/^\/dashboard(\/.*)?$/, "/payment-approval"];

export const authRoutes = ["/auth/**", /^\/auth(\/.*)?$/];

export const DEFAULT_LOGIN_REDIRECT = "/dashboard/profile";
