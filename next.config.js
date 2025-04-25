/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/jobs', // Redirect for /jobs
          destination: 'https://jobs.dev-champions.tech', // External URL
          permanent: true, // Permanent redirect (308)
        },
        {
          source: '/blogs', // Redirect for /blogs
          destination: 'https://blogs.dev-champions.tech', // External URL
          permanent: true, // Permanent redirect (308)
        },
      ];
    },
  };
  
  module.exports = nextConfig;