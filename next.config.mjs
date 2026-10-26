/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "junaidaly.vercel.app" }],
        destination: "https://junaiddev.skill-bridge.me/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
