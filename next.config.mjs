/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },

      // {
      //   protocol: "https",
      //   hostname: "storage.c2.liara.space",
      //   port: "",
      //   pathname: "**",
      // },
    ],
  },
};

export default nextConfig;
