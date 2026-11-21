/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "junaidaly.vercel.app" }],
        destination: "https://junaiddev.skill-bridge.me/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
