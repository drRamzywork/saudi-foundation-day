const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "ar",
    locales: ["ar", "en", "fr", "es", "ru"],
    localePath: path.resolve("./public/locales"),
  },
};
