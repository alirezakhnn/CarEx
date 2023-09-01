module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // domains:['raw.githubusercontent.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
