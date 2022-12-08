const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    // API_URL: "https://next-dataa.vercel.app",
  }
};

module.exports = withNextra(nextConfig)