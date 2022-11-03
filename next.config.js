/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

// nextのImageタグで外部url使用時はそのドメインを下のように記載
module.exports = {
  images: {
    domains: ["images.unsplash.com"],
  },
};
