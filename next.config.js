const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    defaultLocale: "ar",
    locales: ["ar", "en", "fr", "es", "ru"],
  },
  localePath: path.resolve("./public/locales"),
};

module.exports = nextConfig;
