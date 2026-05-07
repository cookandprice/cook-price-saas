const withNextIntl = require("next-intl/plugin")("./i18n.ts")
module.exports = withNextIntl({i18n.ts,middleware.ts}  reactStrictMode: true )
