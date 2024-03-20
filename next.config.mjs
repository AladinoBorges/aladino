/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'bulma.io',
      port: '',
      pathname: '/images/**'
    }]
  }
};

export default nextConfig;
