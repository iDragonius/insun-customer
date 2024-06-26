const nextTranslate = require("next-translate-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "127.0.0.1",
      "insun-cpanel.knexel.com",
      "cpanel.insun.az",
    ],
  },
  i18n: {
    locales: ["az", "en", "ru"],
    defaultLocale: "az",
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: ["@svgr/webpack"],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};
module.exports = nextTranslate(nextConfig);
