/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('src/i18n/request.js');
 
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/color/**',
      },
    ],
  },
  transpilePackages: ['three'],
};

export default withNextIntl(nextConfig);