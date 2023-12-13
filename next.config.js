/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination:
          "http://be-be-c957f-21216619-aeb7ba37580c.kr.lb.naverncp.com/",
      },
    ];
  },

  images: {
    domains: ["images.pexels.com"],
  },
};

module.exports = nextConfig;
