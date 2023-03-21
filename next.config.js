const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

const nextConfig = {
  env: {
    // API_URL: "http://localhost:3000",
    API_URL: "https://nextra-v2x.vercel.app",
    BASE_URL: "https://nextra-v2x.vercel.app",
    SITE_URL: "nextra-v2x.vercel.app",
  }
};

module.exports = withNextra(nextConfig)