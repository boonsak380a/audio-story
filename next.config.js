/** @type {import('next').NextConfig} */
const semi = require("@douyinfe/semi-next").default({
  /* the extension options */
});
const nextConfig = {
  transpilePackages: [
    "@douyinfe/semi-ui",
    "@douyinfe/semi-icons",
    "@douyinfe/semi-illustrations",
  ],
  output: "standalone",
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*"
      },
    ],
  },
};

module.exports = semi(nextConfig);
