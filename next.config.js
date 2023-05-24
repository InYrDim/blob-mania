/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xfs-hd08.batcg.org",
        port: "",
        pathname: "/thumb/W600/ampi/**/**",
      },
    ],
  },
};

module.exports = nextConfig;
