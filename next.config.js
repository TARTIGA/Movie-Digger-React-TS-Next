const withImages = require("next-images")
const withTM = require("next-transpile-modules")
const withPlugins = require("next-compose-plugins")
module.exports = withPlugins([
  [
    withTM,
    {
      transpileModules: ["@nandorojo/fuego"],
    },
  ],
  withImages,
])
module.exports = {
  // Target must be serverless
  target: "serverless",
}
