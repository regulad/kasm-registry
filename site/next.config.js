/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Regulad\'s Registry',
    description: 'Regulad\'s Favorite Kasm Workspaces.',
    icon: 'https://www.gravatar.com/avatar/21efa640b1597e3778a2884009ae1b51?d=retro&r=g&s=200',
    listUrl: 'https://www.regulad.xyz/kasm-registry/',
    contactUrl: 'https://github.com/regulad/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
